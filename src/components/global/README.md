# Global Header

This header implements the Paragon Sciences desktop + mobile navigation, mega
menus, and brand styling.

## Structure

- Desktop: Two rows.
  - Row 1: Logo left, search icon right.
  - Row 2: Top-level nav with hover mega menus.
- Mobile: Single row with logo + search + hamburger. Hamburger toggles a
  one-column accordion menu.

## Data Model

`src/components/global/Header.astro` defines menu data near the top:

- `homeMenuColumns`, `medicalMenuColumns`, `sportMenuColumns`,
  `powerMenuColumns`, `climateMenuColumns`
- Each column:
  - `title`: Section heading (optional for home menu).
  - `items`: Array of entries with:
    - `label`: Text to display.
    - `href`: Target URL.
    - `dividerBefore`: Adds vertical spacing before the item.
    - `isHeading`: Renders a non-link subheading (used for Sport > Training).
    - `className`: Optional Tailwind classes (used for green Contact link).
- Top-level items (in `navLinks`) accept:
  - `label`, `href`, `current`
  - `alwaysGreen`: Forces green text (ParagonSciences).
  - `menuColumns`: Array of column objects.
  - `feature`: Optional feature card with `image`, `alt`, `caption`, `href`.

## Assets

- Logo: `src/components/assets/paragonicon.svg`
- Search icon: `src/components/assets/search.svg`
- Chevron: `src/components/assets/chevron-down.svg`
- Medical feature image: `src/images/medicalnavfeature.jpg`
- Sport feature image: `src/images/sportnavfeature.jpg`

## Brand Colors

Defined in `src/styles/global.css`:

- `--paragon-green`: #59A847
- `--paragon-black`: #404040

## Desktop Mega Menu

- Hover-only; click does not pin the menu open.
- 4-column grid layout for consistent column alignment.
- Fade + slight slide on hover (`transition-all` + `translate-y-2`).

## Mobile Behavior

- Hamburger toggles a collapsible menu.
- Each top-level item uses a `<details>` accordion with JS control for:
  - Smooth open/close animation (height transition).
  - Only one accordion open at a time.
  - Open item turns green.
- Resize logic closes the mobile menu when hitting desktop widths.

## Updating Links

Replace `href: "#"` entries with real routes as pages are created. Keep labels
matching WordPress copy unless instructed to rewrite.
