<template>
  <div class="loading-wrapper">
    <div class="spinner"></div>

    <p class="text">
      Đang xác nhận thanh toán<span>{{ dots }}</span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dots = ref('');
let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    dots.value = dots.value.length >= 3 ? '' : dots.value + '.';
  }, 500);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.loading-wrapper {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

.text {
  margin-top: 16px;
  font-size: 16px;
  color: #374151;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
