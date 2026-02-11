<template>
  <div class="payment-page">
    <!-- LOADING -->
    <PaymentLoading v-if="state === 'loading'" />

    <!-- SUCCESS -->
    <div v-else-if="state === 'paid'" class="success">
      <div class="success-icon">
        <div class="icon-circle">
          <svg viewBox="0 0 52 52" class="checkmark">
            <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
      </div>
      
      <h2 class="success-title">Thanh toán thành công</h2>
      <p class="success-subtitle">
        Cảm ơn bạn đã tin tưởng! 
        <svg class="heart-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </p>

      <!-- PUBLIC LINK COPY - Modernized -->
      <div class="copy-section">
        <label class="copy-label">Link chia sẻ của bạn</label>
        <div class="copy-box">
          <div class="input-wrapper">
            <svg class="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <input 
              type="text" 
              :value="publicUrl" 
              readonly 
              @focus="$event.target.select()" 
              placeholder="Link của bạn"
            />
          </div>
          <button @click="copyLink" class="copy-btn" :class="{ copied: justCopied }">
            <span class="btn-content">
              <svg v-if="!justCopied" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="btn-text">{{ justCopied ? 'Đã sao chép' : 'Sao chép' }}</span>
            </span>
          </button>
        </div>
      </div>

      <!-- Toast thông báo hiện đại -->
      <transition name="toast">
        <div v-if="showToast" class="toast">
          <div class="toast-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="toast-content">
            <span class="toast-title">Thành công!</span>
            <span class="toast-message">Đã sao chép link vào clipboard</span>
          </div>
        </div>
      </transition>

      <!-- QR Preview với hiệu ứng đẹp -->
      <div class="qr-container">
        <div class="qr-box" :class="`style-${style}`">
          <div class="qr-glow"></div>
          <div class="qr-wrapper">
            <img
              :src="qrUrl"
              class="qr"
              @load="qrLoading = false"
              :style="{ opacity: qrLoading ? 0 : 1 }"
              alt="QR Code"
            />
            <div v-if="qrLoading" class="qr-loader">
              <div class="spinner"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- QR Style Picker - Modernized -->
      <div class="qr-style">
        <p class="style-label">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Chọn phong cách QR
        </p>
        <div class="style-buttons">
          <button
            v-for="s in styles"
            :key="s"
            :class="{ active: style === s }"
            @click="changeStyle(s)"
            class="style-btn"
          >
            <!-- <span class="style-icon">{{ icons[s] }}</span> -->
            <span class="style-name">{{ labels[s] }}</span>
            <span v-if="style === s" class="check-mark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <!-- Download button -->
      <div class="action-buttons">
        <a :href="qrUrl" download class="btn download"> 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          <span>Tải xuống QR Code</span>
        </a>

        <!-- Home button -->
        <a href="/" class="btn primary" title="Quay về trang chủ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span>Quay về trang chủ</span>
        </a>
      </div>
    </div>

    <!-- TIMEOUT -->
    <div v-else class="timeout">
      <div class="timeout-icon">
        <svg class="clock-icon" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>
      <h2>Đang xử lý giao dịch</h2>
      <p class="support-text">
        Nếu bạn đã thanh toán nhưng chưa nhận được sản phẩm, vui lòng liên hệ với chúng tôi qua:
      </p>

      <div class="support-icons">
        <a
          href="https://www.facebook.com/share/1DsRV6xZqa/"
          target="_blank"
          title="Facebook"
          class="support-link facebook"
        >
          <i class="mdi mdi-facebook"></i>
          <span class="tooltip">Facebook</span>
        </a>
        <a
          href="https://www.tiktok.com/@nvquangdev?is_from_webapp=1&sender_device=pc"
          target="_blank"
          title="TikTok"
          class="support-link tiktok"
        >
          <i class="mdi mdi-music-note"></i>
          <span class="tooltip">TikTok</span>
        </a>
        <a 
          href="https://zalo.me/0377456265" 
          target="_blank" 
          title="Zalo"
          class="support-link zalo"
        >
          <i class="mdi mdi-message-processing"></i>
          <span class="tooltip">Zalo</span>
        </a>
      </div>

      <a href="/" class="btn primary"> 
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span>Quay về trang chủ</span>
      </a>
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
const showToast = ref(false);
const justCopied = ref(false);

/* ===== QR STYLE ===== */
const style = ref("pink");

const styles = ["classic", "pink"];

const labels = {
  classic: "Mặc định",
  pink: "Hồng",
};

const icons = {
  classic: "◻️",
  pink: "💖",
};

/* ===== CHANGE STYLE WITH ANIMATION ===== */
const changeStyle = (newStyle) => {
  if (style.value !== newStyle) {
    qrLoading.value = true;
    style.value = newStyle;
  }
};

/* ===== COPY LINK ===== */
const copyLink = async () => {
  if (!publicUrl.value) return;
  
  try {
    await navigator.clipboard.writeText(publicUrl.value);
    justCopied.value = true;
    showToast.value = true;
    
    setTimeout(() => {
      justCopied.value = false;
    }, 2000);
    
    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  } catch (err) {
    alert("Đã sao chép liên kết!");
  }
};

/* ===== QR URL ===== */
const qrLoading = ref(false);

watch(style, () => {
  qrLoading.value = true;
});

const qrUrl = computed(() => {
  if (!cardUuid.value) return "";
  return `/api/cards/${cardUuid.value}/qr?style=${style.value}`;
});

onMounted(() => {
  const orderCode = route.query.orderCode;

  if (window.opener) {
    window.opener.postMessage(
      {
        type: "PAYMENT_SUCCESS",
        orderCode: orderCode,
      },
      window.location.origin
    );

    window.close();
  } else {
    state.value = "loading";
    checkStatus(orderCode);
  }
});
const checkStatus = async (code) => {
  try {
    const res = await axios.get(`/api/orders/${code}/status`);

    if (res.data.status === "paid") {
      state.value = "paid";
      publicUrl.value = res.data.public_url;
      cardUuid.value = res.data.card_uuid;
    } else {
      state.value = "timeout";
    }
  } catch (e) {
    state.value = "timeout";
  }
};

</script>

<style scoped>
* {
  box-sizing: border-box;
}

.payment-page {
  min-height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: 
    linear-gradient(135deg, 
      #667eea 0%, 
      #764ba2 20%, 
      #f093fb 40%, 
      #f5576c 60%, 
      #ff9a9e 80%, 
      #fecfef 100%
    );
  background-size: 400% 400%;
  animation: gradientFlow 20s ease infinite;
  position: relative;
  overflow: hidden;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}


/* ===== CARD CHÍNH ===== */
.payment-page > div {
  width: 100%;
  max-width: 480px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  padding: 40px 32px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* ===== SUCCESS ICON ===== */
.success-icon {
  margin: 0 auto 20px;
}

.icon-circle {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.25);
  animation: iconPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes iconPop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.checkmark {
  width: 50px;
  height: 50px;
  stroke-width: 3;
  stroke: white;
  stroke-miterlimit: 10;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.7s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

/* ===== SUCCESS CONTENT ===== */
.success-title {
  font-size: 28px;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  animation: slideDown 0.5s ease-out 0.2s both;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-subtitle {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 32px;
  font-weight: 500;
  animation: slideDown 0.6s ease-out 0.3s both;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.heart-icon {
  color: #f43f5e;
  animation: heartBeat 1.5s ease-in-out infinite;
}

@keyframes heartBeat {
  0%, 100% {
    transform: scale(1);
  }
  10%, 30% {
    transform: scale(1.2);
  }
  20%, 40% {
    transform: scale(1);
  }
}

/* ===== COPY SECTION - MODERNIZED ===== */
.copy-section {
  margin: 0 0 28px;
  text-align: left;
  animation: slideUp 0.5s ease-out 0.3s both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.copy-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.copy-box {
  display: flex;
  gap: 12px;
  align-items: stretch;
}

.input-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.link-icon {
  position: absolute;
  left: 16px;
  color: #94a3b8;
  z-index: 1;
  pointer-events: none;
}

.copy-box input {
  width: 100%;
  padding: 14px 14px 14px 44px;
  font-size: 14px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
  color: #1e293b;
  transition: all 0.2s ease;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
}

.copy-box input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.copy-btn {
  padding: 14px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  white-space: nowrap;
}

.copy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.copy-btn:active {
  transform: translateY(0);
}

.copy-btn.copied {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
}

.copy-btn.copied:hover {
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.copy-btn svg {
  transition: transform 0.3s ease;
}

.copy-btn.copied svg {
  animation: checkPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes checkPop {
  0% {
    transform: scale(0) rotate(-45deg);
  }
  50% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}

/* ===== TOAST NOTIFICATION - HIỆN ĐẠI ===== */
.toast {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #1e293b;
  padding: 12px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.toast-icon {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.toast-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.toast-title {
  font-weight: 600;
  font-size: 14px;
  color: #0f172a;
}

.toast-message {
  font-weight: 500;
  font-size: 12px;
  color: #64748b;
}

.toast-enter-active {
  animation: toastSlideIn 0.3s ease-out;
}

.toast-leave-active {
  animation: toastSlideOut 0.2s ease-in;
}

@keyframes toastSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes toastSlideOut {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
}

/* ===== QR CONTAINER ===== */
.qr-container {
  margin: 28px 0;
  animation: slideUp 0.5s ease-out 0.4s both;
}

.qr-box {
  position: relative;
  width: 240px;
  height: 240px;
  margin: 0 auto;
  border-radius: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 28px rgba(102, 126, 234, 0.25);
  overflow: hidden;
  transition: all 0.3s ease;
}

.qr-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(102, 126, 234, 0.3);
}

.qr-box.style-pink {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 12px 28px rgba(245, 87, 108, 0.25);
}

.qr-box.style-pink:hover {
  box-shadow: 0 16px 36px rgba(245, 87, 108, 0.3);
}

.qr-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.qr-wrapper {
  position: relative;
  z-index: 2;
}

.qr {
  width: 190px;
  height: 190px;
  background: white;
  padding: 12px;
  border-radius: 16px;
  transition: opacity 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.qr-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ===== QR STYLE PICKER - HIỆN ĐẠI ===== */
.qr-style {
  margin: 24px 0;
  animation: slideUp 0.5s ease-out 0.5s both;
}

.style-label {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.style-label svg {
  color: #fbbf24;
}

.style-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.style-btn {
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  background: white;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.style-btn:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.style-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.style-btn.active:hover {
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

.style-icon {
  font-size: 18px;
}

.check-mark {
  width: 18px;
  height: 18px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: checkPop 0.3s ease-out;
}

@keyframes checkPop {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* ===== BUTTONS ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  margin-top: 12px;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.btn.download {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(245, 87, 108, 0.3);
  animation: slideUp 0.5s ease-out 0.6s both;
}

.btn.download:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 87, 108, 0.4);
}

.btn.download:active {
  transform: translateY(0);
}

.btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

.btn.primary:active {
  transform: translateY(0);
}

/* ===== TIMEOUT ===== */
.timeout-icon {
  margin-bottom: 20px;
}

.clock-icon {
  color: #f59e0b;
  animation: clockTick 2s ease-in-out infinite;
}

@keyframes clockTick {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}

.timeout h2 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #1e293b;
  font-weight: 700;
}

.support-text {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 24px;
  line-height: 1.6;
  font-weight: 500;
}

/* ===== SUPPORT ICONS ===== */
.support-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 24px 0 28px;
}

.support-link {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  border: 2px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 24px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.support-link .tooltip {
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  background: #1e293b;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  transition: transform 0.2s ease;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.support-link .tooltip::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1e293b;
}

.support-link:hover .tooltip {
  transform: translateX(-50%) scale(1);
}

.support-link.facebook:hover {
  background: #1877f2;
  border-color: #1877f2;
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(24, 119, 242, 0.3);
}

.support-link.tiktok:hover {
  background: linear-gradient(135deg, #00f2ea 0%, #ff0050 100%);
  border-color: transparent;
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(255, 0, 80, 0.3);
}

.support-link.zalo:hover {
  background: #0068ff;
  border-color: #0068ff;
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 104, 255, 0.3);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 600px) {
  .payment-page {
    padding: 16px;
  }

  .payment-page > div {
    padding: 32px 24px;
    border-radius: 20px;
  }

  .success-title {
    font-size: 24px;
  }

  .success-subtitle {
    font-size: 15px;
  }

  .qr-box {
    width: 220px;
    height: 220px;
  }

  .qr {
    width: 175px;
    height: 175px;
  }

  .copy-box {
    flex-direction: column;
  }

  .copy-btn {
    justify-content: center;
  }

  .style-buttons {
    gap: 8px;
  }

  .style-btn {
    padding: 10px 18px;
    font-size: 13px;
  }

  .support-link {
    width: 52px;
    height: 52px;
    font-size: 22px;
  }

  .btn {
    padding: 12px 24px;
    font-size: 14px;
  }

  .toast {
    max-width: calc(100% - 32px);
  }
}

@media (min-width: 768px) {
  .payment-page > div {
    padding: 44px 40px;
  }

  .qr-box {
    width: 260px;
    height: 260px;
  }

  .qr {
    width: 205px;
    height: 205px;
  }
}

@media (max-width: 400px) {
  .copy-box input {
    font-size: 13px;
    padding: 12px 12px 12px 40px;
  }

  .link-icon {
    left: 12px;
  }
}
</style>