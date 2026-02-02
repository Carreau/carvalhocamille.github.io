---
title: Boundary Integral Methods for Optical Cloaking
permalink: /research/transmission/
layout: layouts/page.njk
locale: en
---

## Framework

Optical cloaking refers to light propagating in heterogeneous media whereas measurements do not detect heterogeneities, in other words there is no light scattering. One main motivation is to be able to cloak objects by using layers of different materials around the cloaked object.

<div style="text-align: center; margin: var(--space-xl) 0;">
  <img src="/assets/img/cloaking1.png" alt="Optical cloaking concept" style="max-width: 400px; width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
</div>

We develop a Python code to perform cloaking and scattering in layered media (in particular concentric layers) using boundary integral equations methods.

<div style="text-align: center; margin: var(--space-2xl) 0;">
  <img src="/assets/img/bie_plasmon.png" alt="BIE plasmon scattering" style="max-width: 700px; width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
  <p style="margin-top: var(--space-md); font-style: italic; color: var(--color-text-light);">
    Scattering problem by a plane wave of a metallic inclusion. Left: using standard Periodic Trapezoid Rule. Right: using asymptotic approximation method (more information <a href="/research/evaluation/">here</a>).
  </p>
</div>

## References

- **Codes available on [GitHub](https://github.com/eangelcortes/boundary_cloaking)**

## Ongoing Projects

- Develop a multi-layered transmission problem code
- Cloaking optimization
