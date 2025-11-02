<template>
  <a :href="link" v-if="link" class="feature-link">
    <div class="feature">
      <div class="feature-title">{{ title }}</div>
    </div>
  </a>
  <div class="feature" v-else>
    <div class="feature-title">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps(["title", "link"])
</script>

<style scoped>
.feature {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}
.feature-link .feature:hover {
  border-color: var(--vp-c-brand-1);
}
.feature-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--vp-c-text-1);
}
a {
  color: inherit;
  text-decoration: inherit;
}
</style>