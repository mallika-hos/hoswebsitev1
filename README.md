# House of Six

Marketing site for House of Six, a luxury home decor brand. The site is a single-page, six-panel hero design with sections introducing the brand, the founder, and a contact form.

## Project structure

```
.
├── index.html        # Page markup
├── css/
│   └── styles.css    # All styling
├── js/
│   └── main.js        # Contact form submission logic
└── images/            # Place image assets here
```

## Color palette

| Name     | Variable   | Hex       | Use                                  |
|----------|-----------|-----------|---------------------------------------|
| Ink      | `--ink`    | `#1c1a17` | Primary background, dark surfaces     |
| Ivory    | `--ivory`  | `#f3eee6` | Primary text on dark, light surfaces  |
| Stone    | `--stone`  | `#b9ad9a` | Secondary/muted text                  |
| Brass    | `--brass`  | `#ad8a4e` | Accent color — links, buttons, italics|
| Forest   | `--forest` | `#3f4a3d` | Secondary accent (founder section)    |

## Fonts

Loaded from Google Fonts:

- **[Fraunces](https://fonts.google.com/specimen/Fraunces)** — serif display font used for headings, the wordmark, and italicized emphasis.
- **[Inter](https://fonts.google.com/specimen/Inter)** — sans-serif used for body copy, nav, labels, and buttons.

## Contact form

The contact form in the Connect section submits to [Formspree](https://formspree.io). Before deploying:

1. Create a free Formspree account and a new form.
2. Copy your form endpoint (looks like `https://formspree.io/f/xxxxxxxx`).
3. Replace `YOUR_FORM_ID` in the form's `action` attribute in [`index.html`](index.html) with your real endpoint.

Submission is handled via `fetch` in [`js/main.js`](js/main.js), which shows a "Sending…" state, confirms success inline without leaving the page, and surfaces an error message if the submission fails.

## Local development

No build step — just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Deployment

See deployment instructions provided separately for publishing to Hostinger.
