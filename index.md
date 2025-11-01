---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ICiMR 2025"
  text: "3rd International Conference on Intelligent Manufacturing and Robotics"
  tagline: "11-12 November 2025 | Sunway University"
  actions:
    - theme: brand
      text: Schedule
      link: /markdown-examples
    - theme: alt
      text: Booklet
      link: /api-examples

features:
  - title: Session 1
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: https://ricwtk.github.io/
  - title: Session 2
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---


Organised by

<style>
  .image-row {
    display: flex;
    justify-content: space-between; /* or center / space-around */
    align-items: center;
    flex-wrap: nowrap; /* keep in one row */
    max-width: 100%; /* responsive */
    gap: 10px; /* space between images */
  }

  .image-row img {
    flex: 1 1 0; /* allow equal width distribution */
    width: 100%;
    height: auto; /* maintain aspect ratio */
    object-fit: cover; /* crop if necessary */
  }
</style>
<div class="image-row">
  <a href="/about-sunway-university"><img src="/img/sunway.png"></a>
  <a href="/about-xjtlu"><img src="/img/xjtlu.png"></a>
  <a href="/about-utm"><img src="/img/utm.png"></a>
</div>

<!-- ![Sunway University](/img/sunway.png) ![XJTLU](/img/xjtlu.png) ![UTM](/img/utm.png) -->
