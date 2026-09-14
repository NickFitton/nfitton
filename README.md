# Nicholas Fitton’s personal site

An Astro site presenting engineering leadership experience, selected case studies, career history and a downloadable CV.

## Local development

Use **Node.js 24.21.0** and **pnpm 12.4.1**. Node is pinned in `.node-version` and `.nvmrc`; pnpm is pinned in `package.json`. The `engines.node` setting selects Node 24 for Vercel; local version-manager files pin the latest Node 24 patch release.

With a Node version manager, run `fnm use --install-if-missing` or `nvm install` from the repository. Then install the pinned package manager if needed:

```sh
npm install --global pnpm@12.4.1
```

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Run `pnpm build` to generate the static site in `dist/`.

## Updating content

- `src/pages/index.astro`: introduction, mentoring, technical strengths and contact details.
- `src/data/profile.ts`: case studies, shared by the homepage and `/work/[slug]/`.
- `src/data/career.json`: career history and CV achievement bullets.
- `src/components/Career.astro`: shared career and education presentation.
- `src/pages/_root.css`: responsive black and purple profile styling.

The existing `/experience/` route uses the same career content as the homepage.

## Regenerating the CV

The two-page PDF is checked in at `public/nicholas-fitton-cv.pdf`, so ordinary site builds do not require Python.

```sh
python3 -m venv /tmp/nfitton-cv-env
/tmp/nfitton-cv-env/bin/pip install -r scripts/requirements-cv.txt
/tmp/nfitton-cv-env/bin/python scripts/build_cv.py
```

The generator reads employment data from `src/data/career.json`. The introduction, skills and education are in `scripts/build_cv.py`; keep them aligned with the site when editing. Review both rendered pages after regeneration and confirm the download still has two pages.

## Dependency maintenance

The site uses Astro 7 and content loaders configured in `src/content.config.ts`. Collection routes use entry IDs, preserving custom card slugs.

`pnpm-workspace.yaml` enforces the Node/pnpm requirements and permits esbuild’s installation script. Commit `pnpm-lock.yaml` with dependency updates and use `pnpm install --frozen-lockfile` in CI. Build with `pnpm build`; preview the result with `pnpm preview`.

When updating Node, keep `.node-version`, `.nvmrc`, `package.json` and these instructions aligned. Update the `packageManager` field and pnpm engine requirement together when changing pnpm. The CV generator’s ReportLab dependency is separately pinned in `scripts/requirements-cv.txt`.
