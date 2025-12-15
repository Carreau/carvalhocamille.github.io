# Camille Carvalho - Academic Website

Modern academic website built with [Eleventy (11ty)](https://www.11ty.dev/) static site generator.

## 🚀 Quick Start

### Prerequisites

You need [Node.js](https://nodejs.org/) installed (version 14 or higher).

Check if you have Node.js installed:
```bash
node --version
```

If not installed, download from: https://nodejs.org/

### Installation

1. **Clone or navigate to this repository**
   ```bash
   cd carvalhocamille.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install Eleventy and required plugins (~5 seconds).

### Development

**Start the development server:**
```bash
npm start
```

This will:
- Build your site
- Start a local web server
- Open your browser automatically
- Watch for file changes and auto-reload

**Default URL:** http://localhost:8080/en/

**Available pages:**
- Home (EN): http://localhost:8080/en/
- Home (FR): http://localhost:8080/fr/ (coming soon)
- Quiz: http://localhost:8080/quiz/QuizFeteScience2013/AccueilQuiz/

**To stop the server:** Press `Ctrl+C` in the terminal

### Building for Production

**Build the site:**
```bash
npm run build
```

This creates a `_site/` folder with the complete static website ready for deployment.

**Clean build output:**
```bash
npm clean
```

Removes the `_site/` folder.

## 📁 Project Structure

```
carvalhocamille.github.io/
├── src/                        # Source files
│   ├── _data/                  # Data files (JSON)
│   │   └── site.json          # Site configuration & bilingual strings
│   ├── _includes/              # Templates & components
│   │   ├── layouts/
│   │   │   ├── base.njk       # Base HTML template
│   │   │   └── page.njk       # Page layout
│   │   └── components/
│   │       ├── header.njk     # Site header with navigation
│   │       └── footer.njk     # Site footer
│   ├── en/                     # English content
│   │   ├── en.json            # English page defaults
│   │   ├── index.md           # Homepage
│   │   └── research/          # Research pages (coming)
│   ├── fr/                     # French content
│   │   ├── fr.json            # French page defaults
│   │   └── index.md           # Homepage (coming)
│   ├── assets/                 # Static assets
│   │   ├── css/               # Stylesheets
│   │   ├── img/               # Images
│   │   └── video/             # Videos
│   ├── pdf/                    # PDF files
│   ├── quiz/                   # Quiz application (preserved as-is)
│   └── CNAME                   # Custom domain config
├── _site/                      # Build output (auto-generated, gitignored)
├── .eleventy.js                # Eleventy configuration
├── package.json                # Node.js dependencies
├── .gitignore                  # Git ignore file
└── README.md                   # This file
```

## ✏️ Editing Content

### Simple Pages (Markdown)

Most pages are written in Markdown for easy editing.

**Example: `src/en/cv.md`**
```markdown
---
title: CV
---

## Education

- PhD in Applied Mathematics, ENSTA Paris, 2016
- ...

## Experience

- 2022-present: Associate Professor, INSA de Lyon
- ...
```

**Markdown basics:**
- `# Heading 1`, `## Heading 2`, `### Heading 3`
- `**bold text**` or `__bold text__`
- `*italic text*` or `_italic text_`
- `[Link text](URL)`
- `![Image alt](image-path.jpg)`
- Lists: Start lines with `-` or `1.`

**Front matter** (between `---` lines):
- `title:` - Page title
- `layout:` - Template to use (optional, defaults set in en.json/fr.json)

### Complex Pages (HTML)

Research pages with visualizations can use HTML.

**Example: `src/en/research/fem.html`**
```html
---
title: Finite Element Methods for Plasmonics
layout: layouts/page.njk
---

<div class="research-content">
  <img src="/assets/img/summary_pmls.png" alt="PML visualization">

  <h2>Overview</h2>
  <p>Description of research...</p>

  <video controls>
    <source src="/assets/video/PML.mp4" type="video/mp4">
  </video>
</div>
```

### Data Files (JSON)

Structured data for publications, students, teaching history.

**Example: `src/_data/publications.json`**
```json
{
  "journal_articles": [
    {
      "year": 2023,
      "authors": ["C. Carvalho", "Z. Moitier"],
      "title": "Scattering resonances...",
      "venue": "IMA Journal of Applied Mathematics",
      "volume": "88",
      "pages": "215-257",
      "links": {
        "paper": "https://...",
        "code": "https://github.com/..."
      }
    }
  ]
}
```

Then use in templates (e.g., `src/en/publications.njk`):
```html
{% for pub in publications.journal_articles %}
  <li>
    {{ pub.authors | join(", ") }} - {{ pub.title }}
  </li>
{% endfor %}
```

### Bilingual Content

1. Create English version in `src/en/page-name.md`
2. Create French version in `src/fr/page-name.md`
3. Use same filename in both folders
4. Language switcher automatically works

**Example:**
- `src/en/teaching.md` → URL: `/en/teaching/`
- `src/fr/enseignement.md` → URL: `/fr/enseignement/`

## 🎨 Styling

CSS files are in `src/assets/css/`:

- `reset.css` - CSS reset
- `variables.css` - Colors, fonts, spacing (edit here to change site colors)
- `typography.css` - Text styles
- `layout.css` - Page layout, header, footer
- `components.css` - Reusable components (cards, buttons, etc.)
- `main.css` - Utilities

**To change colors:** Edit `src/assets/css/variables.css`

```css
:root {
  --color-primary: #1e40af;        /* Main blue color */
  --color-primary-dark: #1e3a8a;   /* Darker blue */
  --color-accent: #0891b2;          /* Teal accent */
  ...
}
```

## 📦 Adding New Pages

### 1. Simple Page (Markdown)

Create `src/en/my-page.md`:
```markdown
---
title: My Page Title
---

Content goes here...
```

Will be available at: `/en/my-page/`

### 2. Page with Custom Layout

Create `src/en/my-page.md`:
```markdown
---
title: My Page
layout: layouts/custom.njk
---

Content...
```

### 3. Adding to Navigation

Edit `src/_includes/components/header.njk` to add links:
```html
<li><a href="/{{ currentLang }}/my-page/">My Page</a></li>
```

## 🖼️ Adding Images

1. **Add image file** to `src/assets/img/`
2. **Reference in Markdown:**
   ```markdown
   ![Alt text](/assets/img/my-image.jpg)
   ```
3. **Or in HTML:**
   ```html
   <img src="/assets/img/my-image.jpg" alt="Description">
   ```

## 📄 Adding PDFs

1. **Add PDF** to `src/pdf/`
2. **Link to it:**
   ```markdown
   [Download CV](/pdf/CV_carvalho.pdf)
   ```

## 🔧 Troubleshooting

### Build fails with "filter not found" error
Check template syntax in `.njk` files. Make sure you're using correct Nunjucks filters.

### Changes not showing
- Make sure dev server is running (`npm start`)
- Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Check console for errors

### Port 8080 already in use
Stop other dev servers or change port in `.eleventy.js`:
```javascript
module.exports = function(eleventyConfig) {
  // ...
  return {
    // ...
    serverOptions: {
      port: 8081  // Change this
    }
  };
};
```

### Images/PDFs not showing
Check that:
1. Files are in `src/assets/img/` or `src/pdf/`
2. Paths start with `/` (e.g., `/assets/img/photo.jpg`)
3. File names match exactly (case-sensitive)

## 🚀 Deployment

### GitHub Pages (Current Setup)

The site will auto-deploy when GitHub Actions is set up (coming soon).

**Manual deployment for now:**
1. Build: `npm run build`
2. The `_site/` folder contains your complete website
3. Push to `gh-pages` branch or configure GitHub Pages

### Other Hosting

The `_site/` folder can be deployed to:
- Netlify: Drag & drop the folder
- Vercel: Connect GitHub repo
- Any static hosting: Upload `_site/` contents

## 📚 Resources

- **Eleventy Docs:** https://www.11ty.dev/docs/
- **Markdown Guide:** https://www.markdownguide.org/basic-syntax/
- **Nunjucks Templates:** https://mozilla.github.io/nunjucks/templating.html
- **Migration Status:** See `MIGRATION_STATUS.md` for detailed progress

## 🆘 Getting Help

**Common tasks:**

1. **Add a new publication:**
   - Edit `src/_data/publications.json`
   - Add new entry to the array
   - Rebuild: `npm run build`

2. **Update teaching history:**
   - Edit `src/en/teaching.md`
   - Add new courses/semester
   - Auto-rebuilds if dev server running

3. **Change site colors:**
   - Edit `src/assets/css/variables.css`
   - Modify CSS custom properties

4. **Add a student:**
   - Edit `src/_data/students.json`
   - Add photo to `src/assets/img/photos/`
   - Update template

## 📝 Notes

- **Large files:** All PDFs, videos, and images stay in the repository for now
- **Quiz app:** Located in `src/quiz/` - do not modify, it's preserved exactly as-is
- **Old site:** Original HTML files remain in root for reference
- **Build output:** `_site/` folder is auto-generated, don't edit files there

## Current Status

✅ Working:
- Basic site structure
- English homepage
- Modern responsive design
- Bilingual framework
- Quiz application preserved
- Development server

🚧 In Progress:
- CV page
- Teaching page
- Research pages
- Publications template
- Students template
- French translations
- GitHub Actions deployment

See `MIGRATION_STATUS.md` for detailed progress.
