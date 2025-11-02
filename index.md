---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ICiMR 2025"
  text: "MARS 2025"
  tagline: "11-12 November 2025 | Sunway University"
  actions:
    - theme: brand
      text: ICiMR
      link: /schedule-icimr
    - theme: alt
      text: MARS
      link: /schedule-mars

# features:
#   - title: Session 1
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#     link: https://ricwtk.github.io/
#   - title: Session 2
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import Feature from "./components/Feature.vue"
import { useData } from 'vitepress'
const { theme } = useData()
const sidebar = theme.value.sidebar || []
const sessions = sidebar.find(i => i.text?.toLowerCase() === 'technical sessions').items
</script>

<style scoped>
.feature-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}
@media (min-width: 768px) {
  .feature-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

<div style="margin: -48px"></div>
<div v-for="s in sessions">
  <h2>{{ s.text }}</h2>
  <div class="feature-container">
    <Feature v-for="i in s.items" :title="i.text" :link="i.link" />
  </div>
</div>

<h2></h2>

Organised by

<style scoped>
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


