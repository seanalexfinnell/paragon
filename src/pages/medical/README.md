# Medical Case Studies Page

## Overview

`/medical/case-studies/` is a hard-coded Astro page that lists case studies from
Pages CMS and opens each study in a modal dialog.

## Content Source

Case studies live in `src/content/case-studies/` as Markdown files with YAML
frontmatter:

```md
---
title: "Acne: male, 17"
slug: "acne-male-17" # optional
---

## Patient History

...
```

The collection is defined in `src/content/config.ts` under
`collections["case-studies"]`, and configured for Pages CMS in `.pages.yml` as
the `case-studies` collection.

## How the Page Works

- The page at `src/pages/medical/case-studies.astro` loads all entries from the
  `case-studies` collection.
- Each entry renders inside a `<dialog>` modal.
- The right column is a clickable list of case study titles that opens the
  corresponding modal.
- Left/right arrow buttons and keyboard arrow keys cycle through modals and wrap
  at the ends.

## Styling Notes

- The modal body is scrollable via `.modal-body` and uses `:global(...)` rules
  for Markdown headings (Astro content render is outside component scoping).
- If you need to adjust modal typography, edit the styles at the bottom of
  `src/pages/medical/case-studies.astro`.

## Related Files

- `src/pages/medical/case-studies.astro`
- `src/content/config.ts`
- `.pages.yml`
- `src/content/case-studies/`
