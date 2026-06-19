# Changelog 📝

All notable changes to the *CrispyHub* platform development cycle are documented below.

## [1.1.0] - 2026-06-19

### ➕ Added
- Created a comprehensive README.md file to document the project structure, features, installation steps, and tech stack for evaluation.
- Added dynamic item card generation inside myjavascript.js using array loop methods (.forEach) to naturally render food data.
- Implemented full SEO support by introducing targeted <meta name="description"> and <meta name="keywords"> segments customized across index.html, menu.html, and contactus.html.
- Attached the production jQuery CDN resource script pipeline link into the structural <head> across all pages to safely facilitate scalable DOM processes.

### 🔄 Changed
- Ordered the <head> scripts strictly so that the jQuery library resource loads dynamically right before myjavascript.js runs.
- Modified JavaScript mapping declaration variables from itemCard.className = "menu-item-card" to match .menu-item classes inside the stylesheets exactly.

### 🐛 Fixed
- *CRITICAL CSS FIX (95% Assignment Milestone):* Successfully debugged and resolved the broken menu item alignment issue by changing the container layout from display: list-item; to display: flex;. This completely removed unwanted default system bullet points and forced the menu cards to align perfectly side-by-side in a responsive horizontal grid layout instead of stacking vertically.
- *CRITICAL HTML FIX:* Resolved a severe broken layout issue where a missing quotation mark and unclosed bracket inside the metadata keywords tag caused web browsers to completely skip linking the external style.css asset.

### ❌ Removed
- Cleaned out unoptimized fallback styling loops embedded inside structural main content section blocks.

---

## [1.0.0] - 2026-05-15

### ➕ Added
- Built core semantic HTML5 structural pages including index.html, menu.html, and contactus.html.
- Created primary external stylesheet (style.css) to define restaurant branding colors, typography layout, responsive text elements, and navigation linkages.
