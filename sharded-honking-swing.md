# Website Redesign Plan for Camille Carvalho

## Current Status
**Phase: User Requirements Gathering**

## Current Website Overview
- **Size**: 572 MB, ~250+ files
- **Design**: 2006 FullAhead template (XHTML 1.0)
- **Hosting**: GitHub Pages at camillecarvalho.org
- **Languages**: Bilingual (English/French)

### Main Content Structure
1. **Core Pages** (6 main navigation items):
   - Home (index.html) - Profile, contact, collaborators
   - Research (Research.html) - 3 main research projects
   - Publications (publis.html) - 30+ publications with links
   - Teaching (Teaching.html) - Teaching history 2012-2024
   - CV (cursusEN.html) - Links to PDF CV
   - Students (group.html) - Current and past students with photos

2. **Detailed Research Pages** (4 pages):
   - FEM.html - Finite element methods for plasmonics
   - eval.html - Close evaluation of layer potentials
   - transmission.html - Boundary integral methods
   - Tconform.html - T-conforming methods

3. **Special Content**:
   - MMCS.html - Team day event (2024)
   - BD.html - Educational comic about plasmons
   - QuizFeteScience2013/ - Interactive quiz application (jQuery-based, from 2013)

4. **Assets**:
   - 101 images (profile photos, research visualizations, logos)
   - 45+ PDFs (CVs, thesis, papers, presentations)
   - 23 videos (research demos, educational content)
   - 5 CSS files

### Legacy/Deprecated Content
- French versions: recherche.html, enseignement.html, cursus.html
- Old homepage: EnglishVersion.html
- Multiple old CV versions (2016-2023)
- QuizFeteScience2013 (11-year-old interactive quiz)
- Template demo: styles.html

## User Requirements (Confirmed)
1. ✅ **Quiz app**: Keep QuizFeteScience2013 functioning
2. ✅ **Languages**: Maintain bilingual French + English
3. ✅ **Design**: Complete modern redesign
4. ✅ **Editing**: Mix of Markdown (simple pages) and HTML (complex visualizations)

---

## RECOMMENDED SOLUTION: 11ty (Eleventy)

### Why 11ty?
- **Perfect fit** for "Markdown + HTML" workflow
- **Excellent i18n** built-in bilingual support
- **Flexible templating** (Nunjucks, Liquid, HTML)
- **Zero-config** easy to maintain
- **GitHub Pages** compatible via Actions
- **Quiz preservation** via passthrough copy
- **Data-driven** can manage publications as JSON

### Alternative Options Considered
- **Hugo**: Faster but steeper learning curve (Go templates), less flexible for mixing Markdown/HTML
- **Astro**: Modern but overkill, requires more JavaScript knowledge
- **Jekyll**: Native GitHub Pages but slow, Ruby dependency hassle

---

## IMPLEMENTATION PLAN

### Directory Structure (New Site)
```
/
├── .eleventy.js              # Configuration
├── .github/workflows/
│   └── deploy.yml            # Auto-deploy to GitHub Pages
├── src/
│   ├── _data/
│   │   ├── publications.json # 30+ publications (structured)
│   │   ├── students.json     # Students with photos
│   │   ├── teaching.json     # Teaching history
│   │   └── site.json         # Bilingual strings
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk      # Base template
│   │   │   ├── page.njk      # Standard pages
│   │   │   └── research.njk  # Research projects
│   │   └── components/
│   │       ├── header.njk    # Site header
│   │       ├── nav.njk       # Navigation + lang switcher
│   │       └── footer.njk    # Footer
│   ├── en/                   # English content
│   │   ├── index.md          # Home (Markdown)
│   │   ├── research/
│   │   │   ├── index.md
│   │   │   ├── fem.html      # Complex viz (HTML)
│   │   │   ├── evaluation.html
│   │   │   └── transmission.html
│   │   ├── publications.njk  # Data-driven template
│   │   ├── teaching.md       # Markdown
│   │   ├── cv.md
│   │   └── students.njk      # Data-driven
│   ├── fr/                   # French content (mirrors en/)
│   ├── assets/
│   │   ├── css/
│   │   ├── img/
│   │   └── video/
│   ├── pdf/                  # PDFs
│   └── quiz/                 # QuizFeteScience2013 (copied as-is)
└── _site/                    # Build output
```

### Content Migration Strategy

| Current | New | Format | Notes |
|---------|-----|--------|-------|
| index.html | en/index.md | Markdown | Simple content |
| Research.html | en/research/index.md | Markdown | Overview page |
| FEM.html | en/research/fem.html | HTML | Complex visualizations |
| eval.html | en/research/evaluation.html | HTML | Complex visualizations |
| transmission.html | en/research/transmission.html | HTML | Complex visualizations |
| Tconform.html | en/research/tconform.html | HTML | Complex visualizations |
| publis.html | en/publications.njk | Template + JSON | Data-driven from publications.json |
| Teaching.html | en/teaching.md | Markdown | Chronological list |
| cursusEN.html | en/cv.md | Markdown | Links to PDF |
| group.html | en/students.njk | Template + JSON | Data-driven from students.json |
| MMCS.html | en/events/mmcs-2024.md | Markdown | Event page |
| BD.html | en/outreach/bd.md | Markdown | Educational comic |
| QuizFeteScience2013/ | quiz/ | Passthrough | Preserved exactly as-is |

### URL Redirects (SEO Preservation)
```
/Research.html → /en/research/
/FEM.html → /en/research/fem/
/publis.html → /en/publications/
/Teaching.html → /en/teaching/
/group.html → /en/students/
/QuizFeteScience2013/ → /quiz/
```

### Media Optimization Strategy

**Large Files to Move External:**
- These_carvalho.pdf (13MB) → Zenodo/HAL
- these_carvalho_soutenance.pdf (26MB) → Zenodo/HAL
- merced.pdf (23MB) → Archive or external
- Large presentation: Lagoutiere.pdf (71MB) → External or compress

**Keep on GitHub Pages:**
- Images (optimized): ~8MB
- Current CV + recent papers: ~10MB
- Small videos (<5MB each)
- Quiz assets: ~13MB
- Total after optimization: ~100-150MB (well within 1GB limit)

**Old CVs to Archive:**
- Keep only: CV_carvalho_Jan_23.pdf (current)
- Archive: CV versions from 2016-2021 (move to /archive/)

### Bilingual Implementation

**Language Switcher:**
```html
<nav class="lang-switcher">
  <a href="/en/" class="{% if locale == 'en' %}active{% endif %}">EN</a>
  <a href="/fr/" class="{% if locale == 'fr' %}active{% endif %}">FR</a>
</nav>
```

**Content Structure:**
- `/en/` - All English content
- `/fr/` - All French content
- Parallel structure maintained
- Shared data files with both languages

### Modern Design Features
- Clean typography (system fonts or Inter/Lora)
- Academic blue/navy color palette
- Responsive grid layout
- Card-based research projects
- Timeline for teaching history
- Sticky navigation with lang switcher
- Mobile-first responsive design
- Accessibility improvements (WCAG 2.1 AA)

---

## IMPLEMENTATION PHASES

### Phase 1: Setup (Week 1)
- Initialize 11ty project
- Configure bilingual routing
- Create base templates and design system
- Set up GitHub Actions deployment

### Phase 2: Content Migration (Weeks 2-3)
- Migrate simple pages to Markdown
- Create data files (publications.json, students.json, teaching.json)
- Build template-driven pages
- Migrate complex research pages as HTML templates
- Implement full bilingual content

### Phase 3: Assets & Special Features (Week 4)
- Optimize and migrate images
- Organize PDFs (move large files external)
- Copy quiz app as-is (passthrough)
- Test quiz functionality

### Phase 4: Testing & Polish (Week 5)
- Cross-browser testing
- Mobile responsiveness
- Accessibility audit
- Performance optimization (Lighthouse)
- SEO redirects and sitemap

### Phase 5: Deployment (Week 6)
- GitHub Actions setup
- Test staging deployment
- Final production launch
- Monitor and fix issues

**Total Timeline: 6 weeks**

---

## CRITICAL FILES TO REFERENCE

1. `/home/ubuntu/dev/carvalhocamille.github.io/index.html` - Main structure template
2. `/home/ubuntu/dev/carvalhocamille.github.io/publis.html` - Publications format (30+ entries)
3. `/home/ubuntu/dev/carvalhocamille.github.io/QuizFeteScience2013/Quiz1.html` - Quiz functionality
4. `/home/ubuntu/dev/carvalhocamille.github.io/css/layout.css` - Current styling reference
5. `/home/ubuntu/dev/carvalhocamille.github.io/FEM.html` - Complex research page example

---

## EDITING WORKFLOW (Post-Launch)

**Simple updates (80% of edits):**
```markdown
# Edit src/en/teaching.md directly
## Fall 2025: New Course
- Add course here
```
Commit to main → Auto-deploys via GitHub Actions

**Add publication:**
```json
// Edit src/_data/publications.json
{
  "year": 2025,
  "authors": ["C. Carvalho", "..."],
  "title": "New paper",
  "venue": "Journal name",
  "links": { "paper": "url", "code": "url" }
}
```

**Complex edits:**
- Research pages: Edit HTML in `src/en/research/*.html`
- Maintains flexibility of current site with modern tooling

---

## NEXT STEPS

After plan approval:
1. Initialize 11ty project structure
2. Set up basic configuration
3. Create one sample page (e.g., CV) to validate workflow
4. Proceed with full migration
