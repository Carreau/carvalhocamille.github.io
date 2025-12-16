---
title: Close Evaluation of Layer Potentials
permalink: /research/evaluation/
layout: layouts/page.njk
locale: en
---

<p class="lead">Sponsored by NSF DMS-1819052</p>

## Framework

The close-evaluation problem in boundary integral methods refers to large errors incurred when evaluating layer potentials at points near the boundary of the domain despite being accurate elsewhere in the domain. When using a high order Nyström method to numerically evaluate a layer potential, its high order accuracy will be effective for nearly all points in the domain. However, at close-evaluation points, this quadrature rule will produce an O(1) error. The goal is to address this error using asymptotic analysis of the nearly singular behavior.

## Asymptotic Method with Deferred Correction

We developed a numerical method based on asymptotic approximations of the kernel via rational trigonometric functions to capture the peaked behavior for close-evaluation points. Subtracting this approximation allows to use standard Nyström method, and the remainder can be computed analytically using Fourier convolution sum.

<div style="text-align: center; margin: var(--space-2xl) 0;">
  <img src="/assets/img/bie.png" alt="Close evaluation comparison" style="max-width: 700px; width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
  <p style="margin-top: var(--space-md); font-style: italic; color: var(--color-text-light);">
    Close evaluation for acoustic scattering. Left: standard Nyström method (O(1) close to the boundary). Right: asymptotic method with deferred correction.
  </p>
</div>

## Asymptotic Approximations Methods

We developed asymptotic approximations methods based on matched asymptotic expansions of layer potentials in 2D and 3D to control the error with respect to the distance from the boundary.

<div style="text-align: center; margin: var(--space-2xl) 0;">
  <img src="/assets/img/3deval.png" alt="3D close evaluation" style="max-width: 700px; width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
  <p style="margin-top: var(--space-md); font-style: italic; color: var(--color-text-light);">
    Close evaluation for the double-layer potential for Laplace's equation in 3D.
  </p>
</div>

## References

- **Codes available on [GitHub](https://github.com/arnolddkim/Asymptotic-DLP)**

- **Layer potential identities and subtraction techniques**
  C. Carvalho, submitted.
  [Code on GitHub](https://github.com/carvalhocamille/Subtraction_techniques)

- **Close evaluation for layer potentials in three dimensions**
  S. Khatri, A. D. Kim, R. Cortez, C. Carvalho, in revision.

- **Asymptotic approximations for the close evaluation of double-layer potentials**
  C. Carvalho, S. Khatri, A. D. Kim
  *SIAM Journal for Scientific Computing*, 42, pp A504-A533, 2020.

- **Asymptotic analysis for close evaluation for layer potentials**
  C. Carvalho, S. Khatri, A. D. Kim
  *Journal of Computational Physics*, 655, pp 327-341, 2018.

## Ongoing Projects

- Asymptotic methods for regions of high curvature
- Applications to Stokes flow
- Application to transmission problems
