<template>
  <div class="speaker">
    <div class="image">
      <slot name="image">
        <img :src="image" class="speaker-image"></img>
      </slot>
    </div>
    <div class="content">
      <div class="session">
        <slot name="session">
          <div class="day">Day {{ day }}</div>
          <Event :time="time" :title="title" :venue="venue" :remarks="speaker"></Event>
        </slot>
      </div>
      <div class="affiliation">
        <slot name="affiliation"><b>Affiliation</b> {{ affiliation }}</slot>
      </div>
      <div class="description">
        <b>Description</b>
        <slot name="description"></slot>
      </div>
    </div>
  </div>

</template>

<script setup>
defineProps(["image", "speaker", "title", "affiliation", "day", "time", "venue"])
import Event from './Event.vue';
</script>

<style scoped>
.speaker {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
@media (max-width: 650px) {
  .speaker {
    flex-direction: column;
    align-items: center;
  }
}
.speaker-image {
  width: 220px;       
  object-fit: cover;   
  display: block;
}
.content {
  display: flex;
  flex-direction: column;
}
.day {
  /* font-size: larger; */
  font-weight: bold;
}
.description {
  margin-top: 5px;
  width: 100%;
}
</style>
