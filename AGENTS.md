# AGENTS Instructions

You are working in the Paragon Sciences Astro codebase. Follow these rules for
all changes.

## Project Context

- Static marketing site for a medical research company.
- Migrating content from WordPress at https://paragonsciences.com.
- Framework: Astro with Tailwind CSS.
- Content editing: Pages CMS, reference docs at
  https://pagescms.org/docs/configuration/.
- Brand colors: Paragon green #59A847, Paragon black #404040.

## Goals

- Reproduce the WordPress information architecture and content hierarchy.
- Preserve headings, copy, and terminology from the source site unless asked to
  rewrite.
- Keep layout clean, clinical, and readable (medical/biotech tone).
- Once CMS is configured, build a lightweight search functionality with Pagefind
  (https://pagefind.app/docs/).

## Content Modeling (Pages CMS)

- Prefer Markdown or MDX content in `src/content/` with frontmatter.
- Keep fields explicit and consistent (title, description, slug, hero, sections,
  cta).
- Avoid magic strings in components; pass content from frontmatter or data
  files.
- For styling Markdown rendered via Astro content collections, use scoped CSS
  with `:global(...)` selectors (e.g. `:global(.modal-body h2)`) because the
  rendered content is outside component scoping.

## Astro Conventions

- Use `.astro` components with clear props and type annotations when helpful.
- Keep pages in `src/pages/` and components in `src/components/`.
- Prefer composition over large monolithic pages.
- Use `Astro.props` for component props; avoid global state.

## Tailwind Conventions

- Use Tailwind utility classes; avoid custom CSS unless necessary.
- Keep class lists readable; extract into components when reused.
- Stick to existing color palette and typography scale when present.

## Assets

- Place images in `public/` and reference with absolute paths.
- Optimize for performance: prefer modern formats, set width/height when known.

## Quality Bar

- Ensure accessible headings and semantic HTML.
- Validate links and routes.
- Keep content copy accurate to the source site.

## Do Not

- Do not add heavy JS frameworks or client-side state unless requested.
- Do not introduce dark mode or dramatic UI changes without instruction.
