<template>
  <div class="card">
    <div class="timing">
      <div class="time">
        <div class="hour">{{ time.split(":")[0] }}</div>
        <div class="minute">{{ time.split(":")[1] }}</div>
      </div>
      <!-- <div class="day">Day {{ day }}</div> -->
    </div>
    <div class="desc">
      <div class="title">
        <span>{{ title }}</span>
        <span v-if="link"><a :href="link"><svg-icon type="mdi" :path="mdiOpenInNew"></svg-icon></a></span>
      </div>
      <div class="remarks">{{ remarks }}</div>
    </div>
    <div v-if="venue" class="venue">
    {{ venue }}
    </div>
  </div>
</template>

<script setup>
defineProps(["time", "title", "venue", "remarks", "link"])
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiOpenInNew } from '@mdi/js';
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  /* padding: 11px 16px 13px; */
  /* border: 1px solid var(--vp-c-brand-1); */
  border-radius: 8px;
  margin: 10px 0px;
}
.card .desc:last-child {
  border-radius: 0px 8px 8px 0px;
}
.card .timing, .card .desc, .card .venue {
  padding: 20px 30px;
}
.card .timing {
  border: 1px solid var(--vp-c-brand-1);
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-brand-1);
  color: var(--vp-button-brand-text);
  border-radius: 8px 0px 0px 8px;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  max-width: 90px;
  width: 90px; 
}
.card .time {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.card .hour {
  font-size: 200%;
}
.card .minute {
  font-size: 150%;
}
.card .day {
  font-size: 75%;
}
.card .desc {
  border: 1px solid var(--vp-c-brand-1);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card .title {
  font-size: larger;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.card .remarks {
  font-size: smaller;
}
.card .venue {
  font-size: larger;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 8px 8px 0px;
  background-color: var(--vp-c-brand-1);
  color: var(--vp-button-brand-text);
  min-width: 100px;
  max-width: 100px;
  width: 100px;  
}
</style>
