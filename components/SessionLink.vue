<template>
  <div class="qrbox">
    <a href="link">
      <QrcodeVue
        :value="link"
        :size="200"
        :margin="2"
      />
    </a>
    Scan or click QR code to launch
  </div>
</template>

<script setup>
defineProps(["link"])
import QrcodeVue from 'qrcode.vue';
</script>

<style>
.qrbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}
</style>