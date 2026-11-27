## The problem

Coding agents are good at long-running work, but they run in a terminal on one machine. If I start a task at my desk, I can’t check on it, answer a question or review the result from my phone. Hosted agent services solve that, but they need my repositories and provider credentials in someone else’s cloud.

I wanted the reverse: agents that keep running on my Mac with my existing logins, and a thin, account-scoped server that only coordinates work.

## Actors and observers

Each enrolled device is either an **actor** or an **observer**.

- The **actor** is the Electron desktop app. It owns the repository checkouts, the provider credentials and the agent processes. Each chat gets its own Git worktree and branch, so parallel tasks don’t trample each other.
- **Observers** are the web app, the Expo mobile app and other desktops. They create chats, send messages and images, watch progress, and review diffs.
- The **API** (NestJS, Prisma, PostgreSQL) holds accounts, devices, projects, chats and a job queue. It never sees provider credentials: they stay in Electron `safeStorage` on the actor and fail closed if protected storage is unavailable. Only allowlisted metadata, such as model lists and quota percentages, is uploaded.

Clerk handles sign-in. Each device then gets its own access and refresh JWTs, bound to a credential generation that is checked against the database on every request. Deleting a device revokes it immediately.

## One worker, many agent harnesses

I didn’t want to tie Loom to a single vendor, so the worker reports work through a small harness seam: a common set of session events that each backend maps its own stream onto.

- **Pi SDK** is embedded for API-key and OAuth providers.
- **Claude Code**, **Gemini CLI** and **Antigravity** run over the [Agent Client Protocol](https://agentclientprotocol.com).
- **Codex** runs over its own app-server protocol, which exposes typed approvals and rate limits.

Loom never installs or signs in to these CLIs; it uses the user’s existing login. Transcripts, tool calls, images, titles and usage are produced by the same worker code whichever harness runs. Loom’s own tools are provided to every harness: MCP-over-ACP for Claude Code, a token-protected local MCP server for the Google CLIs and dynamic tools for Codex.

- `ask_user` lets an agent ask numbered questions. Answers are batched and sent back in one message, so the agent isn’t interrupted for each one.
- `submit_image` lets an agent share screenshots and GIFs in the chat.
- `loom_agents` lets an agent delegate work to subagents.

## Making work survive real networks

Laptops sleep, phones lose signal and responses get lost. Much of the engineering went into making each step safe to retry:

- **Job queue with fencing.** The actor claims jobs from PostgreSQL. Restarts and handovers are fenced, so a late report from a superseded run can’t overwrite newer state.
- **Local report outbox.** The actor writes progress snapshots to disk atomically before publishing them, so work completed offline is delivered in order once the actor reconnects.
- **Two-phase credential rotation.** A refresh stages a new token pair, the client saves it durably and then confirms it. A lost response can be retried without stranding the device. In the browser, IndexedDB, Web Locks and BroadcastChannel coordinate this across tabs.
- **Transactional push outbox.** Android notifications are queued in the same transaction that completes a chat, the same pattern I used for [audit logging at Humaans](/work/reliable-audit-events/).

## Subagents with real limits

Any agent can spawn, list, wait for and resume child agents, up to two levels deep, on the same worktree. Children are ordinary durable chats, so an interrupted task is resumed in its original conversation rather than replaced. Submission IDs make retries idempotent.

Depth, lifetime and per-minute quotas are enforced by row locks taken in a consistent order. I verified the risky interleavings, such as archiving a parent while its child is being claimed, with coordinated PostgreSQL tests. These tests wait until the database shows a transaction blocked instead of using sleeps, so they don’t flake.

## One UI across three platforms

All pages live in a shared `packages/ui` library, built from shadcn components and developed in Storybook. The web app (TanStack Start) and the Electron renderer use the same pages; the Expo app has native screens with the same flows. These include an inbox of agent activity, project and branch selection, model and effort choice, Markdown transcripts, image galleries, diff review with line and range comments, and provider quota and usage dashboards.

## Shipping it

- **Infrastructure as code.** Terraform provisions Cloud Run, Cloud SQL, Secret Manager and Artifact Registry on GCP; the web app is served as Cloudflare static assets. It costs about $20 a month.
- **On-demand releases.** A GitHub Actions workflow uses Turborepo hashes to deploy only what changed. It runs migrations as a Cloud Run job, checks the API before publishing the web app and keeps a success record per stage, so a failed release can simply be rerun. GitHub authenticates to GCP with Workload Identity Federation, so there are no stored keys.
- **Signed desktop builds.** The macOS app is signed with a Developer ID, notarised, stapled and updated in place.
- **Mobile delivery.** Expo’s native fingerprint decides between a new signed APK, an over-the-air update or nothing. Android is released; iOS remains development-only.

Some installed-Mac and real-device acceptance checks are still pending.

## What I’d highlight

- **Trust boundaries first.** Keeping credentials and code on the actor shaped every API, from device enrolment to quota reporting.
- **Design for retries.** Idempotency keys, generation fences and outboxes turned flaky networks and sleeping laptops into routine cases.
- **Write the decisions down.** Research notes, audits and runbooks live beside the code, so each feature’s reasoning and recovery steps are recorded.

**Stack** TypeScript · React · TanStack Start · Electron · Expo / React Native · NestJS · Prisma · PostgreSQL · Clerk · Turborepo · Storybook · Terraform · Google Cloud Run · Cloudflare · GitHub Actions
