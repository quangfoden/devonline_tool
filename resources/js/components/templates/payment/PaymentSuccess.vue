<template>
  <div class="payment-page">
    <!-- LOADING -->
    <PaymentLoading v-if="state === 'loading'" />

    <!-- SUCCESS -->
    <div v-else-if="state === 'paid'" class="success">
      <h2>🎉 Thanh toán thành công</h2>

      <a :href="publicUrl" target="_blank" class="btn primary"> 🔗 Mở card </a>

      <!-- QR Preview -->
      <div class="qr-box" :class="`style-${style}`">
      
        <img
          :src="qrUrl"
          class="qr"
          @load="qrLoading = false"
          :style="{ opacity: qrLoading ? 0.3 : 1 }"
        />
      </div>

      <!-- QR Style Picker -->
      <div class="qr-style">
        <button
          v-for="s in styles"
          :key="s"
          :class="{ active: style === s }"
          @click="style = s"
        >
          {{ labels[s] }}
        </button>
      </div>

      <a :href="qrUrl" download class="btn secondary"> 📥 Tải QR </a>
    </div>

    <!-- TIMEOUT -->
    <div v-else class="timeout">
      <h2>⚠️ Đang xử lý giao dịch</h2>
      <p>
        Nếu bạn đã thanh toán, vui lòng đợi thêm vài giây <br />
        hoặc kiểm tra lại sau.
      </p>
      <a href="/" class="btn primary"> 🏠 Quay về trang chủ </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import PaymentLoading from "@/components/templates/payment/PaymentLoading.vue";

const route = useRoute();

/* ===== STATE ===== */
const state = ref("loading");
const publicUrl = ref(null);
const cardUuid = ref(null);

/* ===== QR STYLE ===== */
const style = ref("heart");

const styles = ["classic", "heart", "pink"];

const labels = {
  classic: "Mặc định",
  heart: "Trái tim",
  pink: "Hồng",
};

/* ===== QR URL ===== */
const qrLoading = ref(false);

// Theo dõi thay đổi style để bật loading
watch(style, () => {
  qrLoading.value = true;
});

const qrUrl = computed(() => {
  if (!cardUuid.value) return "";
  return `/api/cards/${cardUuid.value}/qr?style=${style.value}`;
});

/* ===== POLLING ===== */
let timer = null;
let attempts = 0;
const maxAttempts = 15;

const check = async () => {
  attempts++;

  try {
    const code = route.query.orderCode;
    if (!code) return;

    const res = await axios.get(`/api/orders/${code}/status`);

    if (res.data.status === "paid") {
      state.value = "paid";
      publicUrl.value = res.data.public_url;
      cardUuid.value = res.data.card_uuid;
      clearInterval(timer);
      return;
    }
  } catch (e) {
    console.error(e);
  }

  if (attempts >= maxAttempts) {
    state.value = "timeout";
    clearInterval(timer);
  }
};

onMounted(() => {
  check();
  timer = setInterval(check, 2000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.payment-page {
  min-height: 100vh;
  padding: 40px 16px;
  text-align: center;
  background: #f8fafc;
}

.success h2 {
  margin-bottom: 16px;
}

.qr-box {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* QR luôn nằm trên */
.qr {
  width: 180px;
  height: 180px;
  z-index: 2;
  background: white;
  padding: 8px;
}

/* ===== STYLE TRÁI TIM ===== */
.style-heart::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #ef4444;
  clip-path: path(
    "M110 200
     C110 200 10 130 10 70
     C10 30 50 10 80 40
     C110 10 150 30 150 70
     C150 130 110 200 110 200 Z"
  );
  z-index: 1;
}

/* ===== STYLE HỒNG ===== */
.style-pink::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f472b6;
  border-radius: 24px;
  z-index: 1;
}

.qr-style {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
}

.qr-style button {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: white;
  font-size: 13px;
  cursor: pointer;
}

.qr-style button.active {
  background: #ef4444;
  color: white;
  border-color: #ef4444;
}

.btn {
  display: inline-block;
  padding: 10px 16px;
  border-radius: 8px;
  margin: 6px;
  text-decoration: none;
  font-weight: 500;
}

.btn.primary {
  background: #3b82f6;
  color: white;
}

.btn.secondary {
  background: #10b981;
  color: white;
}

.timeout {
  max-width: 360px;
  margin: auto;
}
</style>
