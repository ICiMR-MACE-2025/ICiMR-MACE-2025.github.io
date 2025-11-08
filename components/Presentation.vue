<template>
  <div class="card">
    <div class="timing">
      <div class="time">
        <div class="hour">{{ time.split(":")[0] }}</div>
        <div class="minute">{{ time.split(":")[1] }}</div>
      </div>
    </div>
    <div class="desc">
      <div class="title">{{ title }}</div>
      <div class="presenter">{{ presenter }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps(["time", "title", "presenter"])
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  /* padding: 11px 16px 13px; */
  /* border: 1px solid var(--vp-c-brand-1); */
  border-radius: 8px;
  margin: 15px 0px;
}
.card .timing, .card .desc {
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
  border-radius: 0px 8px 8px 0px;
}
.card .title {
  font-size: larger;
}
.card .presenter {
  font-size: smaller;
}
</style>