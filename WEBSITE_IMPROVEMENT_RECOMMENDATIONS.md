# Website Improvement Recommendations for Camille Carvalho

## Executive Summary

The current website provides a solid foundation with CV, publications, teaching history, and student information. However, several notable achievements and activities are missing or underrepresented. This document provides specific recommendations to better showcase Dr. Carvalho's contributions to computational mathematics and electromagnetics.

---

## High-Priority Additions

### 1. Highlight Conference Organization (MISSING)

**Current Status:** Not mentioned on the website

**Recommendation:** Add a prominent section about the co-organization of "Journées Ondes des Poètes 2024"

**Why Important:**
- Demonstrates leadership in the research community
- Shows recognition by peers (trusted to organize major anniversary conference)
- Honors four prominent researchers in the field
- Major organizational achievement

**Where to Add:**
- Create a new section on the CV page: "Service & Leadership"
- Add to the homepage highlights
- Include in the publications page under "Selected Activities"

**Suggested Content:**
```markdown
## Service & Leadership

### Conference Organization
- **Co-organizer**, Journées Ondes des Poètes 2024 (JO des poètes)
  - 60th anniversary conference honoring É. Bécache, A.-S. Bonnet-Ben Dhia, C. Hazard, and E. Lunéville
  - Focus: Mathematical and numerical analysis of wave propagation phenomena
  - April 17-19, 2024, ENSTA Paris
  - [Conference Website](https://jondes2024.sciencesconf.org/)
```

### 2. Add Administrative Role (MISSING)

**Current Status:** Not mentioned on the website

**Recommendation:** Highlight elected administrative position at Institut Camille Jordan

**Why Important:**
- Shows trust and responsibility within the institute
- Demonstrates service to the mathematical community
- Indicates involvement beyond research and teaching

**Where to Add:**
- Under "Current Position" in CV
- In a "Service & Leadership" section

**Suggested Content:**
```markdown
**Elected Member**, Institut Camille Jordan Administration
- Contributing to institutional governance and decision-making
```

### 3. Expand Research Interests with Context (ENHANCEMENT)

**Current Status:** List of keywords exists but lacks context

**Recommendation:** Add brief descriptions to make research accessible to broader audience

**Why Important:**
- Makes research understandable to non-specialists
- Shows impact and applications
- Better for attracting potential students and collaborators

**Suggested Content:**
```markdown
## Research Interests

My research develops mathematical methods and computational tools for understanding and predicting electromagnetic wave behavior, particularly in complex materials like plasmonics and metamaterials with applications in nano-optics and optical devices.

**Core Methodologies:**
- Partial Differential Equations and Wave Propagation
- Finite Element Methods with high-order accuracy
- Boundary Integral Methods for scattering problems
- Asymptotic Analysis and Spectral Theory

**Application Areas:**
- Metamaterials and Plasmonics Modeling
- Electromagnetic scattering and resonances
- Near-field computation in nano-optics
- Structures with corners and singularities

**Key Innovations:**
- QPAX (Quadrature by Parity Asymptotic eXpansions) for high aspect ratio particles
- Accurate close evaluation methods for layer potentials
- Analysis of resonances in metamaterial cavities
```

### 4. Create Research Highlights/Projects Page (NEW PAGE)

**Current Status:** Research is implicit through publications, not showcased

**Recommendation:** Create a dedicated page highlighting major research themes with visuals

**Why Important:**
- Publications list is comprehensive but not accessible
- Visuals make research more engaging
- Shows coherent research program
- Better for potential students and collaborators

**Suggested Structure:**
```markdown
# Research

## Overview
Brief paragraph about research vision and impact

## Major Research Themes

### 1. Boundary Integral Methods for Close Evaluation
- The challenge: accurate near-field computation
- Our approach: QPAX and asymptotic methods
- Impact: enables accurate nano-optics simulations
- Key publications: [3-4 selected papers]
- Code: [GitHub repositories]

### 2. Resonances in Metamaterial Cavities
- The challenge: sign-changing coefficients in metamaterials
- Our approach: spectral analysis and FEM
- Impact: understanding plasmonic resonances
- Key publications: [3-4 selected papers]
- Visualization: [images/videos]

### 3. Perfectly Matched Layers at Corners
- The challenge: PML behavior at geometric corners
- Our approach: Kondratiev theory and numerical analysis
- Impact: improved computational methods
- Key publications: [3-4 selected papers]

### 4. Multi-scale Methods for Electromagnetic Scattering
- The challenge: multiple length scales in plasmonic structures
- Our approach: adaptive methods and asymptotic analysis
- Impact: efficient high-fidelity simulations
- Key publications: [3-4 selected papers]
```

### 5. Add Collaborators Section (NEW)

**Current Status:** Collaborators mentioned only in publications

**Recommendation:** Add section highlighting key collaborations

**Why Important:**
- Shows integration in research community
- Demonstrates ability to work in teams
- Useful for potential collaborators

**Suggested Content:**
```markdown
## Key Collaborators

### Ongoing Collaborations
- **Arnold D. Kim** (UC Merced) - Boundary integral methods, asymptotic analysis
- **Chrysoula Tsogka** (UC Merced) - Wave propagation and imaging
- **Patrick Ciarlet Jr.** - Finite element methods for electromagnetics
- **Sonia Fliss** (POEMS, ENSTA) - Wave propagation phenomena
- **Lucas Chesnel** (INRIA) - Scattering theory
- **Zoïs Moitier** - Asymptotic methods for metamaterials

### PhD Advisors
- **Anne-Sophie Bonnet-Ben Dhia** (ENSTA Paris)
- **Patrick Ciarlet Jr.** (ENSTA Paris)
```

### 6. Enhance Outreach Section (ENHANCEMENT)

**Current Status:** Minimal outreach mentioned in publications page

**Recommendation:** Create dedicated section with more context

**Why Important:**
- Shows commitment to broader impacts
- Demonstrates science communication skills
- Makes work accessible to public

**Suggested Enhancement:**
```markdown
## Outreach & Science Communication

### Public Engagement
- **[My PhD in Comics](link)** - Explaining plasmonic waves through comics (in French)
  - Makes complex mathematical concepts accessible to general public
  - Creative approach to science communication

- **Dinner with a Scientist**, UC Merced, 2018
  - [AAUW Program](https://mariposa-ca.aauw.net/community-projects/dinner-with-a-scientist/)
  - Engaging local community with scientific research

- **Fête de la Science 2013** - Interactive Quiz on Mathematics and Waves
  - [Quiz available here](/quiz/QuizFeteScience2013/AccueilQuiz/)
  - Science outreach for general public

### Academic Outreach
- **Journée formation des mathématiques**, Institut Camille Jordan, Lyon, 2022
  - "Modélisation mathématique de phénomènes plasmoniques"
  - Training workshop for mathematicians
```

---

## Medium-Priority Enhancements

### 7. Add "Awards & Recognition" Section

**Current Status:** No awards mentioned (may not exist, but worth checking)

**Recommendation:** If applicable, add any grants, fellowships, or awards received

**Potential Content:**
- Research grants (NSF, ANR, etc.)
- Teaching awards
- Fellowship honors
- Best paper awards

### 8. Update Student Information Format

**Current Status:** Basic information in JSON format

**Recommendation:** Add more context about student achievements and projects

**Suggested Enhancement:**
- Add thesis titles where available
- Include current positions of graduated students (career outcomes)
- Add photos if available and with permission
- Include brief project descriptions

**Example:**
```markdown
### PhD Students

**Benjamin Latham** (2019-2025)
- Dissertation: "Plane Wave Discontinuous Galerkin Methods for Helmholtz Equations in Complex Media"
- Co-advised with Arnold D. Kim
- Now: [Current position]

**Cory McCullough** (2019-2025)
- Dissertation: "Asymptotic Methods for Close Evaluation in Multiple Scattering"
- Co-advised with Arnold D. Kim
- Now: [Current position]
```

### 9. Add "Software & Code" as Standalone Section

**Current Status:** Code repositories listed at bottom of publications page

**Recommendation:** Create dedicated section highlighting computational contributions

**Why Important:**
- Code is a significant research output
- Shows commitment to reproducible research
- Useful for students and researchers in the field

**Suggested Structure:**
```markdown
## Research Software

I develop and maintain several open-source packages for computational electromagnetics:

### Active Projects

**QPAX - Quadrature by Parity eXpansions**
- Python package for scattering by high aspect ratio particles
- [GitHub](https://github.com/zmoitier/Scattering_BIE_QPAX) | DOI: 10.5281/zenodo.4692601
- Used in: [related publications]

**Asymptotic Methods for Metamaterial Cavities**
- Python implementation of asymptotic analysis
- [GitHub](https://github.com/zmoitier/Asymptotic_metacavity) | DOI: 10.5281/zenodo.4716362
- Used in: [related publications]

[Continue for other packages...]

### Philosophy
All my research code is open-source and archived with DOIs to ensure reproducibility and enable others to build on our methods.
```

### 10. Add Timeline/Career Path Visualization

**Current Status:** CV lists positions chronologically

**Recommendation:** Add visual timeline showing career progression

**Why Important:**
- Makes career path immediately clear
- Shows international experience
- Visually appealing

**Implementation:**
Could use CSS timeline or simple graphical representation showing:
- 2009-2012: Engineering studies (ENSTA)
- 2012-2016: PhD (ENSTA)
- 2016-2018: Postdoc (INRIA)
- 2018-2022: Assistant Professor (UC Merced)
- 2022-2024: Associate Researcher (UC Merced)
- 2022-present: Associate Professor (INSA Lyon)

### 11. Add Recent News/Updates Section

**Current Status:** Website is static, no indication of recent activities

**Recommendation:** Add homepage section with recent highlights

**Suggested Content:**
```markdown
## Recent Updates

**April 2024** - Co-organized Journées Ondes des Poètes 2024 at ENSTA Paris

**2024** - Presented 3 papers at WAVES 2024 in Berlin

**Fall 2024** - Teaching Mathematics SCAN as instructor of record

**2023** - Published "Scattering resonances for unbounded transmission problems" in IMA Journal

**2023** - Presented at SIAM CSE23 in Amsterdam and NACONF23 in Glasgow
```

---

## Technical/Structural Improvements

### 12. Add Structured Data for SEO

**Recommendation:** Add schema.org markup for better discoverability

Implement:
- Person schema with academic details
- ScholarlyArticle schema for publications
- Organization affiliation markup

### 13. Improve Navigation

**Current Status:** Basic navigation

**Recommendations:**
- Add "Research" as separate top-level item (currently implied by Publications)
- Add "News" or "Updates" if implementing that section
- Consider adding "Service" if adding organizational activities
- Add "Software/Code" as top-level navigation item

### 14. Add RSS/Blog Capability

**Recommendation:** Enable blog functionality for research updates

**Why Important:**
- Share research insights
- Announce new publications
- Discuss teaching experiences
- Build engaged audience

### 15. Enhance Visual Elements

**Current Status:** Minimal visuals beyond quiz

**Recommendations:**
- Add research visualization images to research pages
- Include photos from conferences/teaching
- Add headshot to homepage/about
- Include diagrams explaining research concepts

---

## Content Gaps to Address

### Missing Information to Consider Adding:

1. **Professional Memberships**
   - SIAM, AMS, or other mathematical societies
   - Professional affiliations

2. **Review/Editorial Service**
   - Journal reviewer for which journals?
   - Editorial board memberships?
   - Conference program committees?

3. **Invited Talks & Seminars**
   - Currently only 6 "selected talks" shown
   - Likely many more seminar/colloquium talks
   - Consider adding complete list or at least more entries

4. **Media/Press Coverage**
   - Any press coverage of research?
   - Interviews or articles about work?

5. **Funding/Grants**
   - Research grants received?
   - Amounts and funding agencies?

6. **Teaching Philosophy**
   - Could add brief statement about teaching approach
   - Student testimonials if available

7. **Advising Information**
   - For prospective students: what makes a good fit?
   - Information about available positions
   - How to apply to work with you

8. **Contact Information Enhancement**
   - Office hours
   - Preferred contact method
   - Response time expectations

---

## Priority Implementation Order

### Phase 1 (Immediate - High Impact, Low Effort)
1. Add conference organization to CV/homepage
2. Add administrative role to CV
3. Enhance outreach section with more context
4. Add "Recent Updates" to homepage
5. Update navigation to include these sections

### Phase 2 (Short-term - Medium Effort, High Impact)
1. Expand research interests with descriptions
2. Add collaborators section
3. Enhance software/code section
4. Add service & leadership section
5. Improve student information with more details

### Phase 3 (Long-term - Higher Effort, Medium-High Impact)
1. Create research highlights/projects page with visuals
2. Add timeline visualization
3. Implement blog/news capability
4. Add more visual elements throughout site
5. Implement structured data markup

---

## Specific Page Recommendations

### Homepage (`src/en/index.md`)
**Add:**
- Brief research summary (1 paragraph)
- Recent highlights (3-5 items)
- "I am currently" box with latest activities
- Link to research projects

### CV Page (`src/cv.md`)
**Add:**
- Service & Leadership section
- Administrative role
- Conference organization
- Professional memberships
- Awards & grants (if applicable)

### Publications Page (`src/publications.njk`)
**Enhance:**
- Move software/code to separate page
- Add publication statistics if desired (e.g., "12 journal articles, 12 proceedings, 4 software packages")
- Consider grouping by theme as well as type

### Teaching Page (`src/teaching.md`)
**Enhance:**
- Add brief teaching philosophy statement
- Include any teaching materials available (e.g., lecture notes)
- Add information for prospective students

### New Pages to Create:
1. `src/en/research.md` - Research highlights and projects
2. `src/en/software.md` - Software and code repositories
3. `src/en/service.md` - Service, leadership, and outreach (optional)
4. `src/en/news.md` - Recent updates and news

---

## Comparison with Typical Academic Websites

### Strengths of Current Site:
✅ Comprehensive publication list
✅ Teaching history well-documented
✅ Student information included
✅ Modern, clean design
✅ Bilingual capability
✅ Open-source code listed

### Areas for Improvement:
❌ Limited research narrative (just publications list)
❌ Missing service/leadership activities
❌ No recent updates/news
❌ Limited visual elements
❌ No dedicated research projects page
❌ Collaborations not highlighted

### Peer Comparison:
Looking at similar researchers' websites, the following are common features that could be adopted:
- Research group/lab branding
- Project pages with visuals
- News/blog sections
- Grant information
- More detailed student/postdoc pages
- Lab manual or information for prospective students

---

## Content Writing Tips

### Making Mathematics Accessible:
When adding research descriptions, follow these principles:

1. **Start with the problem, not the method**
   - Bad: "We use T-coercivity for sign-changing coefficients"
   - Good: "Metamaterials can have unusual properties that break standard mathematical assumptions. We developed new methods to handle these cases."

2. **Explain impact and applications**
   - Always answer: "Why does this matter?"
   - Connect to real-world applications

3. **Use analogies where possible**
   - Plasmonics: "light waves trapped at metal surfaces, like ripples on a pond"
   - Near-field evaluation: "computing wave behavior very close to objects"

4. **Layer the technical detail**
   - Executive summary for general audience
   - Technical paragraph for specialists
   - Link to papers for full details

---

## Next Steps

1. **Review and prioritize** which recommendations align with goals
2. **Gather missing content** (write descriptions, find images, check for awards/grants)
3. **Implement Phase 1** additions (quick wins)
4. **Plan Phase 2 and 3** based on time available and priorities
5. **Regular updates** - plan to update website at least twice per year

---

## Conclusion

Dr. Carvalho has an impressive research profile with significant contributions to computational electromagnetics and plasmonics. The current website provides a solid foundation but misses several opportunities to showcase important achievements, particularly:

- **Leadership**: Conference organization
- **Service**: Administrative role
- **Impact**: Research software and computational tools
- **Narrative**: Coherent story of research program

Implementing these recommendations will create a more comprehensive, engaging, and effective academic website that better represents the breadth and depth of contributions to the field.

---

**Document created:** January 2, 2026
**For:** Camille Carvalho website enhancement
**Based on:** Research profile analysis and web research
