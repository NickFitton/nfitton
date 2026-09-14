# Nicholas Fitton’s personal site

An Astro site presenting engineering leadership experience, selected case studies, career history and a downloadable CV.

## Local development

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

The pinned legacy Astro formatter can alter nested JSX content. Inspect its output before accepting formatting changes to Astro templates.
