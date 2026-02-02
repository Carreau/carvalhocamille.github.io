# Website Redesign - Migration Status

## Current Progress

### ✅ Completed (Phase 1)

1. **11ty Project Setup**
   - Installed Eleventy 3.1.2 and dependencies
   - Configured `.eleventy.js` with bilingual support
   - Set up npm scripts (`npm start`, `npm build`, `npm clean`)

2. **Directory Structure**
   - Created `src/` directory structure:
     - `_data/` for data files (site.json configured)
     - `_includes/` for templates and components
     - `en/` and `fr/` for bilingual content
     - `assets/css/` for modern CSS
     - `pdf/`, `quiz/` for static assets

3. **Modern Design System**
   - Created comprehensive CSS framework:
     - `reset.css` - Modern CSS reset
     - `variables.css` - Design tokens (colors, spacing, typography)
     - `typography.css` - Typography system
     - `layout.css` - Responsive layout
     - `components.css` - Reusable UI components
     - `main.css` - Utilities and helpers
   - Academic blue color palette
   - Mobile-first responsive design
   - Accessibility-focused (WCAG 2.1 AA)

4. **Base Templates**
   - `layouts/base.njk` - Main HTML template
   - `layouts/page.njk` - Standard page layout
   - `components/header.njk` - Site header with navigation
   - `components/footer.njk` - Site footer

5. **Bilingual i18n Configuration**
   - Set up language-specific directories (`en/`, `fr/`)
   - Created `site.json` with bilingual strings
   - Configured language switcher in header
   - Language-aware navigation

6. **Quiz Application Preserved**
   - Copied `QuizFeteScience2013/` to `src/quiz/`
   - Configured as passthrough copy (maintained exactly as-is)
   - All 11 quiz HTML files and assets preserved

7. **Home Page Migrated**
   - Created `en/index.md` with profile content
   - Profile section with image
   - Social media links (GitHub, Scholar, ORCID, etc.)
   - Contact information
   - Collaborators list
   - Funding logos

8. **Build Successful**
   - Site builds successfully with `npm run build`
   - Outputs to `_site/` directory
   - 11 HTML files generated + 185 static files copied

### 🚧 In Progress / Next Steps

#### Immediate Next Steps (You can do these):

1. **Migrate Remaining Pages**
   - Create `src/en/cv.md` - CV page (simple Markdown)
   - Create `src/en/teaching.md` - Teaching history (simple Markdown)
   - Create `src/fr/index.md` - French homepage (mirror of English)
   - Create `src/fr/cursus.md`, `src/fr/enseignement.md` (French versions)

2. **Create Data Files**
   - `src/_data/publications.json` - Extract 30+ publications from `publis.html`
   - `src/_data/students.json` - Extract students data from `group.html`
   - `src/_data/teaching.json` - Teaching history data

3. **Build Data-Driven Templates**
   - `src/en/publications.njk` - Template using publications.json
   - `src/en/students.njk` - Template using students.json

4. **Migrate Complex Research Pages**
   - `src/en/research/index.md` - Research overview
   - `src/en/research/fem.html` - FEM page (keep as HTML)
   - `src/en/research/evaluation.html` - Layer potentials (keep as HTML)
   - `src/en/research/transmission.html` - Optical cloaking (keep as HTML)
   - `src/en/research/tconform.html` - T-conform method (keep as HTML)

5. **Optimize and Organize Media**
   - Images already passingthrough from `img/` to `assets/img/`
   - Videos from `video/` to `assets/video/`
   - PDFs from root to `pdf/`
   - **Note:** Keeping all large PDFs in repository for now (user preference)
     - `These_carvalho.pdf` (13MB) - kept locally
     - `these_carvalho_soutenance.pdf` (26MB) - kept locally
     - `merced.pdf` (23MB) - kept locally
     - `exposes_mmcs/Lagoutiere.pdf` (71MB) - kept locally
   - Total repository size ~570MB is acceptable for GitHub

6. **GitHub Actions Deployment**
   - Create `.github/workflows/deploy.yml`
   - Configure automatic deployment to GitHub Pages

7. **Testing**
   - Test all pages locally
   - Verify bilingual navigation
   - Test quiz functionality
   - Check responsive design on mobile
   - Accessibility audit

## How to Work with the New Site

### Development

```bash
# Start development server with live reload
npm start

# Open http://localhost:8080/en/ in your browser
# Make changes to files in src/
# Browser will auto-reload
```

### Build

```bash
# Build for production
npm run build

# Output goes to _site/
# This is what gets deployed to GitHub Pages
```

### Directory Structure

```
src/
├── _data/               # Data files (JSON)
│   └── site.json       # Bilingual strings and site config
├── _includes/          # Templates and components
│   ├── layouts/
│   │   ├── base.njk   # Base HTML template
│   │   └── page.njk   # Standard page layout
│   └── components/
│       ├── header.njk # Site header
│       └── footer.njk # Site footer
├── en/                 # English content
│   ├── en.json        # English page defaults
│   ├── index.md       # Homepage (Markdown)
│   └── research/      # Research pages
├── fr/                 # French content
│   ├── fr.json        # French page defaults
│   └── ...
├── assets/css/         # Stylesheets
├── quiz/              # Quiz app (preserved as-is)
└── CNAME              # Custom domain

_site/                  # Build output (gitignored)
```

### Creating New Pages

**Simple Markdown page:**

```markdown
---
title: My Page Title
---

# Content here

Markdown content...
```

**Page with custom HTML:**

```html
---
title: My Page Title
layout: layouts/page.njk
---

<div class="custom-content">
  Custom HTML here...
</div>
```

### Bilingual Content

- Put English content in `src/en/`
- Put French content in `src/fr/`
- Each folder has a `{lang}.json` file setting `locale` for all pages
- Use same filenames in both folders for easy language switching

## Recommended Workflow

### Phase 1: Complete Basic Pages ✅
1. Migrate CV, Teaching pages to Markdown
2. Create French homepage
3. Test build

### Phase 2: Data Files & Templates
1. Extract publications from HTML to JSON
2. Extract students data to JSON
3. Create templates using this data
4. Test build

### Phase 3: Research Pages
1. Create research overview page
2. Migrate 4 detailed research pages (keep HTML for complex viz)
3. Test all links and images

### Phase 4: Polish & Deploy
1. Optimize images
2. Set up GitHub Actions
3. Test deployment
4. Update DNS if needed

## Resources

- **Eleventy Docs**: https://www.11ty.dev/docs/
- **Nunjucks Template Docs**: https://mozilla.github.io/nunjucks/templating.html
- **Current Plan**: `/home/ubuntu/.claude/plans/sharded-honking-swing.md`

## Questions?

If you have questions about:
- **11ty configuration**: Check `.eleventy.js`
- **Templates**: Look in `src/_includes/`
- **Styling**: CSS files in `src/assets/css/`
- **Build errors**: Run `npm run build` and check error messages

## Testing URLs (Development)

When running `npm start`:
- Home (EN): http://localhost:8080/en/
- Home (FR): http://localhost:8080/fr/
- Quiz: http://localhost:8080/quiz/QuizFeteScience2013/AccueilQuiz/

## What Works Now

✅ Basic 11ty build system
✅ Modern CSS design
✅ Responsive header with navigation
✅ Language switcher (EN/FR)
✅ English homepage with profile
✅ Quiz application preserved
✅ Social media links
✅ Footer

## What's Missing

⏳ Remaining pages (CV, Teaching, Research, etc.)
⏳ Publications data and template
⏳ Students data and template
⏳ French translations
⏳ GitHub Actions deployment
⏳ SEO redirects from old URLs
