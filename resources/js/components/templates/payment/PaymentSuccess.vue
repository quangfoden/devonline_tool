<template>
  <div class="payment-page">
    <!-- LOADING -->
    <PaymentLoading v-if="state === 'loading'" />

    <!-- SUCCESS -->
    <div v-else-if="state === 'paid'" class="success">
      <h2>🎉 Thanh toán thành công</h2>
      <!-- PUBLIC LINK COPY -->
      <div class="copy-box">
        <input type="text" :value="publicUrl" readonly @focus="$event.target.select()" />
        <button @click="copyLink">📋 Sao chép</button>
      </div>

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
      <p class="support-text">
        Nếu bạn đã thanh toán nhưng chưa nhận được sản phẩm, vui lòng liên hệ với chúng
        tôi:
      </p>

      <div class="support-icons">
        <a
          href="https://www.facebook.com/share/1DsRV6xZqa/"
          target="_blank"
          title="Facebook"
        >
          <i class="mdi mdi-facebook"></i>
        </a>
        <a
          href="https://www.tiktok.com/@nvquangdev?is_from_webapp=1&sender_device=pc"
          target="_blank"
          title="TikTok"
        >
          <i class="mdi mdi-music-note"></i>
        </a>
        <a href="https://zalo.me/0377456265" target="_blank" title="Zalo">
          <i class="mdi mdi-message-processing"></i>
        </a>
      </div>

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

/* ===== COPY LINK ===== */
const copyLink = () => {
  if (!publicUrl.value) return;
  navigator.clipboard.writeText(publicUrl.value);
  alert("Đã sao chép liên kết vào clipboard!");
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
  padding: 24px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-hero);
  color: var(--color-text);
}

/* ===== CARD CHÍNH ===== */
.payment-page > div {
  width: 100%;
  max-width: 420px;
  background: var(--color-surface);
  border-radius: 20px;
  padding: 28px 22px 32px;
  box-shadow: 0 20px 40px rgba(139, 47, 60, 0.12);
  border: 1px solid var(--color-border);
  text-align: center;
}

/* ===== SUCCESS ===== */
.success h2 {
  font-size: 22px;
  margin-bottom: 12px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===== QR BOX ===== */
.qr-box {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 24px auto;
  border-radius: 24px;
  background: var(--gradient-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1px var(--color-border);
}

/* QR */
.qr {
  width: 170px;
  height: 170px;
  background: white;
  padding: 10px;
  border-radius: 16px;
  z-index: 2;
  transition: opacity 0.25s ease;
}

/* ===== STYLE PICKER ===== */
.qr-style {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 12px 0 18px;
  flex-wrap: wrap;
}

.qr-style button {
  padding: 6px 14px;
  font-size: 13px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-light);
  cursor: pointer;
  transition: all 0.2s ease;
}

.qr-style button.active {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
}

/* ===== BUTTON ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 11px 18px;
  border-radius: 14px;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  margin: 6px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.secondary {
  background: var(--color-accent-light);
  color: var(--color-primary);
  border: 1px solid var(--color-border);
}

/* ===== TIMEOUT ===== */
.timeout h2 {
  font-size: 20px;
  margin-bottom: 8px;
  color: var(--color-primary);
}

.timeout p {
  font-size: 14px;
  color: var(--color-text-light);
  margin-bottom: 16px;
}

/* ===== SUPPORT ICONS ===== */
.support-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 10px 0 18px;
}

.support-icons a {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-light);
  font-size: 22px;
  transition: all 0.2s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
}

/* Hover chung */
.support-icons a:hover {
  transform: translateY(-2px);
  background: var(--gradient-primary);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 10px 22px rgba(139, 47, 60, 0.35);
}

/* Màu riêng từng nền tảng (hover tinh tế) */
.support-icons a:hover .mdi-facebook {
  color: #fff;
}

.support-icons a:hover .mdi-music-note {
  color: #fff;
}

.support-icons a:hover .mdi-message-processing {
  color: #fff;
}

/* ===== COPY LINK BOX ===== */
.copy-box {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 14px 0 10px;
}

.copy-box input {
  flex: 1;
  padding: 10px 12px;
  font-size: 13px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
}

.copy-box input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.copy-box button {
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 13px;
  border: none;
  cursor: pointer;
  background: var(--gradient-primary);
  color: white;
  white-space: nowrap;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 6px 14px rgba(139, 47, 60, 0.35);
}

.copy-box button:hover {
  transform: translateY(-1px);
}

/* ===== RESPONSIVE ===== */
@media (min-width: 768px) {
  .payment-page > div {
    padding: 36px 32px 40px;
  }

  .success h2 {
    font-size: 24px;
  }

  .qr-box {
    width: 240px;
    height: 240px;
  }

  .qr {
    width: 185px;
    height: 185px;
  }
}
</style>
