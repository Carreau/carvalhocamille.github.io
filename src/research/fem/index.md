---
title: Finite Element Method for Plasmonics
permalink: /research/fem/
layout: layouts/page.njk
locale: en
---

## Plasmonic Structures

Plasmonic structures are made of a positive material (dielectrics) and a negative material (metals at optical frequencies, metamaterials). Surface electromagnetic waves called surface plasmons can appear at the interface.

<div style="text-align: center; margin: var(--space-xl) 0;">
  <img src="/assets/img/plasmon.png" alt="Plasmonic structure" style="max-width: 400px; width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
</div>

## Applications

Guiding and confining such particular waves in nanophotonic devices reveal a great interest to overcome the diffraction limit, in nanophotonic sensing and related applications.

## Challenges

- Multiple scales
- Surface plasmons are very sensitive to the geometry (corners)
- Inaccurate predictions of the near field
- Hyper-oscillating singularities, called black-hole waves, appear at the corners
- Standard FEM fail due to spurious reflections

## Novel Numerical Method using FEM

### Mesh requirements to ensure FEM optimal convergence via the T-coercivity

<div style="display: flex; gap: var(--space-md); align-items: center; flex-wrap: wrap; justify-content: center; margin: var(--space-xl) 0;">
  <img src="/assets/img/mesh0.png" alt="Standard mesh" style="max-width: 300px; width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
  <img src="/assets/img/mesh1.png" alt="T-conforming mesh" style="max-width: 300px; width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
</div>

An hexagonal cavity with an hexagonal negative material inclusion. Left: standard mesh. Right: T-conforming mesh.

### Use of Perfectly Matched Layers at the corners to capture the black-hole waves

<div style="text-align: center; margin: var(--space-xl) 0;">
  <video width="100%" style="max-width: 640px; border-radius: var(--radius-md); box-shadow: var(--shadow-lg);" controls loop muted>
    <source src="/assets/video/PASPML1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <video width="100%" style="max-width: 640px; border-radius: var(--radius-md); box-shadow: var(--shadow-lg); margin-top: var(--space-md);" controls loop muted>
    <source src="/assets/video/PML.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p style="margin-top: var(--space-md); font-style: italic; color: var(--color-text-light);">
    Scattering problem by a plane wave of a metallic inclusion. Top: standard FEM, spurious reflections at the corners (steady wave). Bottom: multi-scale method, the plasmons propagate towards the corners.
  </p>
</div>

## References

- **Mesh requirements for the finite element approximation of problems with sign-changing coefficients**
  A.-S. Bonnet-Ben Dhia, C. Carvalho, P. Ciarlet Jr.
  *Numerische Mathematik*, pp 1-38, 2018.

- **Eigenvalue problems with sign-changing coefficients**
  C. Carvalho, L. Chesnel, P. Ciarlet Jr.
  *Compte Rendus Mathématiques*, 355 (6), pp 671-675, 2017.

- **On the use of Perfectly Matched Layers at corners for scattering problems with sign-changing coefficients**
  A.-S. Bonnet-Ben Dhia, C. Carvalho, L. Chesnel, P. Ciarlet Jr.
  *Journal of Computational Physics*, 322, pp 224-247, 2016.

## Ongoing Projects

- T-conforming mesh generator
- Limiting Amplitude Principle
