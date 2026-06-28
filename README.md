# Tolulope Adenipo — WordPress Developer Portfolio

A clean, fast portfolio site built with vanilla HTML, CSS, and JavaScript. No dependencies, no build step — just drop it on GitHub Pages and it works.

## Live demo
👉 `https://chipommes.github.io/portfolio`

## What's inside

```
portfolio/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Filtering, nav, form logic
└── README.md
```

## Features
- 10 demo WordPress projects across 5 categories
- Filterable project grid (Business, E-commerce, Blog, Landing pages, Themes & Plugins)
- Responsive — works on mobile, tablet, and desktop
- Contact form (wire up to Formspree or Netlify Forms)
- Accessible — keyboard navigable, ARIA roles, reduced-motion support
- Fast — no frameworks, no build tools

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `portfolio`)
2. Push this folder to `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**
4. Your site will be live at `https://chipommes.github.io/portfolio`

## Customise it

### 1. Update your name and details
In `index.html`, search for **"Tolulope Adenipo"** and replace with your name. Update the footer links (GitHub, Upwork, email).

### 2. Edit the projects
Open `js/main.js` and edit the `projects` array. Each project has:
```js
{
  cat: "business",          // business | ecommerce | blog | landing | theme
  icon: "🏢",              // emoji shown on the card thumbnail
  bg: "bg-business",        // CSS class for the thumbnail background
  badge: "badge-business",  // CSS class for the type badge
  label: "Business",        // Display label
  title: "Project name",
  desc: "Short description of the project.",
  tags: ["ACF", "Elementor"],
  link: "https://yourproject.com"  // or "#" if no live URL
}
```

### 3. Wire up the contact form
For GitHub Pages (which is static), use [Formspree](https://formspree.io):
1. Sign up and create a form
2. In `js/main.js`, replace the fake `setTimeout` in `initForm()` with a real `fetch` to your Formspree endpoint:
```js
fetch("https://formspree.io/f/YOUR_CODE", {
  method: "POST",
  body: new FormData(form),
  headers: { Accept: "application/json" }
})
```

### 4. Add a real photo
Replace the `.about-avatar` initials div in `index.html` with an `<img>` tag:
```html
<img src="img/photo.jpg" alt="Tolulope Adenipo" class="about-photo" />
```
Add `.about-photo { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; }` to `style.css`.

### 5. Link your Upwork profile
In the footer, update:
```html
<a href="https://www.upwork.com/freelancers/~YOUR_ID" ...>Upwork</a>
```

## Connecting to Upwork
GitHub repos don't auto-sync to Upwork. To use this portfolio there:
- Go to your Upwork profile → **Portfolio** → **Add portfolio item**
- Add the GitHub Pages URL as the project link
- Or take a screenshot of the live site and upload it as a portfolio image

## Tech stack
- HTML5 · CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter + Lora)
- No frameworks, no npm, no build step
