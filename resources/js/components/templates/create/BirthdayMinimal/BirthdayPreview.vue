<!-- components/templates/birthday/BirthdayPreview.vue -->
<template>
  <div class="content">
    <div v-if="!opened" class="gift" @click="open">
      🎁
      <p>Nhấn để mở</p>
    </div>

    <div v-if="countdown > 0" class="countdown">
      {{ countdown }}
    </div>

    <div v-if="opened && countdown === 0" class="card">
      <h1>🎉 Chúc mừng sinh nhật 🎉</h1>
      <p>{{ data.message || "Chúc bạn thật hạnh phúc 💖" }}</p>
      <p>— {{ data.sender || "Người bí mật" }}</p>
      <img v-if="data.sender_image" :src="data.sender_image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      opened: false,
      countdown: 0,
    };
  },
  methods: {
    open() {
      this.opened = true;
      this.countdown = 3;
      const t = setInterval(() => {
        this.countdown--;
        if (this.countdown === 0) clearInterval(t);
      }, 1000);
    },
  },
};
</script>

<style scoped>
.content {
  text-align: center;
}
.gift {
  font-size: 96px;
  cursor: pointer;
  animation: shake 1.5s infinite;
}
.countdown {
  font-size: 72px;
  font-weight: bold;
}
.card {
  background: #fff;
  padding: 24px;
  border-radius: 20px;
}
.card img {
  max-width: 160px;
  border-radius: 12px;
  margin-top: 12px;
}
@keyframes shake {
  0%,100% { transform: rotate(0); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}
</style>
