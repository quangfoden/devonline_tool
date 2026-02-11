<template>
  <div class="base-create">
    <!-- Main content area -->
    <div class="content-wrapper">
      <component
        v-if="createComponent"
        :is="createComponent"
        :modelValue="formData"
        @update:modelValue="onUpdate"
      />

      <!-- Error State -->
      <div v-else-if="loadError" class="error-state">
        <div class="error-content">
          <div class="error-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" stroke="#8b2f3c" stroke-width="3" stroke-dasharray="5 5"/>
              <path d="M28 32L40 44M40 44L52 32M40 44L28 56M40 44L52 56" stroke="#8b2f3c" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Không tìm thấy mẫu thiệp</h3>
          <p>Mẫu này có thể đã bị xoá hoặc chưa được cấu hình. Vui lòng chọn mẫu khác.</p>
          <button class="back-btn" @click="$router.push('/')">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Quay lại trang chủ</span>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="loading-state">
        <div class="loading-spinner"></div>
        <p>Đang tải mẫu thiệp...</p>
      </div>
    </div>

    <!-- Fixed bottom bar -->
    <transition name="slide-up">
      <div v-if="!loadError" class="bottom-bar">
        <div class="bottom-bar-content">
          <!-- Autosave indicator -->
          <div class="autosave-indicator">
            <div class="indicator-dot" :class="{ saving }"></div>
            <span class="indicator-text">{{ autosaveText }}</span>
          </div>

          <!-- Price display -->
          <div class="price-display">
            <div class="price-label">Tổng cộng</div>
            <div class="price-amount">{{ formatVND(totalPrice) }}</div>
          </div>

          <!-- Action buttons -->
          <div class="action-buttons">
            <button class="action-btn preview-btn" @click="previewCard" title="Xem trước">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4C5 4 1.73 7.11 1 10C1.73 12.89 5 16 10 16C15 16 18.27 12.89 19 10C18.27 7.11 15 4 10 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="btn-label">Xem trước</span>
            </button>

            <button class="action-btn payment-btn" @click="payWithPayOS">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M2 9H18" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="6" cy="13" r="1" fill="currentColor"/>
              </svg>
              <span class="btn-label">Thanh toán</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createComponent: null,
      formData: {},
      template: null,
      autosaveTimer: null,
      saving: false,
      lastSavedAt: null,
      draftId: null,
      loadError: false,
    };
  },

  computed: {
    autosaveText() {
      if (this.saving) return "Đang lưu";
      if (this.lastSavedAt) return "Đã lưu";
      return "Chưa lưu";
    },
    totalPrice() {
      const basePrice = Number(this.template?.price || 0);

      const images = this.formData.imageSources || [];
      const extraImages = Math.max(0, images.length - 1);

      const hasMusic = !!this.formData.MUSIC_URL;
      return basePrice + extraImages * 10000 + (hasMusic ? 10000 : 0);
    },
  },

  async created() {
    try {
      this.draftId = this.$route.params.id;

      const res = await this.axios.get(`/api/cards/${this.draftId}`);
      this.formData = res.data.data || {};
      this.card = res.data.card;
      this.template = res.data.template;

      const viewPath = this.template.view;

      try {
        const module = await import(`@components/templates/create/${viewPath}/index.vue`);
        this.createComponent = module.default;
      } catch (e) {
        console.error("Không tìm thấy component:", viewPath, e);
        this.loadError = true;
      }
    } catch (e) {
      console.error("Lỗi load card / template", e);
      this.loadError = true;
    }
  },

  mounted() {
    window.addEventListener("message", this.handlePaymentMessage);
  },

  beforeUnmount() {
    window.removeEventListener("message", this.handlePaymentMessage);
  },

  watch: {
    formData: {
      deep: true,
      handler() {
        this.debounceAutosave();
      },
    },
  },

  methods: {
    formatVND(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0,
      }).format(value);
    },

    onUpdate(val) {
      this.formData = {
        ...this.formData,
        ...val,
      };
    },

    debounceAutosave() {
      clearTimeout(this.autosaveTimer);

      this.autosaveTimer = setTimeout(() => {
        this.autosave();
      }, 1000);
    },

    async autosave() {
      if (this.saving) return;

      this.saving = true;

      try {
        await this.axios.post(`/api/cards/${this.draftId}/autosave`, {
          data: this.formData,
        });

        this.lastSavedAt = new Date();
      } catch (e) {
        console.error("Autosave lỗi", e);
      } finally {
        this.saving = false;
      }
    },

    previewCard() {
      if (!this.draftId) return;
      if (this.autosaveTimer) {
        clearTimeout(this.autosaveTimer);
        this.autosave();
      }

      const demoUrl = `${window.location.origin}/demo/${this.draftId}`;
      window.open(demoUrl, "_blank");
    },

    handlePaymentMessage(event) {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === "PAYMENT_SUCCESS") {
        this.$router.push({
          name: "payment-page",
          query: { orderCode: event.data.orderCode },
        });
      }
    },

    async payWithPayOS() {
      try {
        const res = await this.axios.post("/api/payments/payos/create", {
          card_id: this.$route.params.id,
        });

        const width = 500;
        const height = 700;
        const left = window.screenX + (window.innerWidth - width) / 2;
        const top = window.screenY + (window.innerHeight - height) / 2;

        this.paymentPopup = window.open(
          res.data.checkoutUrl,
          "PayOS",
          `width=${width},height=${height},left=${left},top=${top}`
        );
      } catch (e) {
        alert("Không tạo được thanh toán");
      }
    },

    async paymentVnp() {
      try {
        const res = await this.axios.post(`/api/cards/${this.draftId}/payment`);
        window.location.href = res.data.pay_url;
      } catch (e) {
        alert("Không thể thanh toán");
      }
    },
  },
};
</script>

<style scoped>
/* ===== VARIABLES ===== */
:root {
  --primary: #8b2f3c;
  --primary-dark: #6d2530;
  --primary-light: #c35b6e;
  --accent: #ffe5e9;
  --surface: #ffffff;
  --background: #f8f9fa;
  --border: #e5e7eb;
  --text: #1f2937;
  --text-light: #6b7280;
  --success: #10b981;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 25px rgba(139, 47, 60, 0.1);
  --radius: 16px;
  --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== BASE ===== */
.base-create {
  min-height: 100vh;
  background: var(--background);
  padding-bottom: 100px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
}

/* ===== LOADING STATE ===== */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 24px;
  gap: 20px;
}

.loading-spinner {
  width: 56px;
  height: 56px;
  border: 4px solid var(--accent);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-state p {
  font-size: 15px;
  color: var(--text-light);
  font-weight: 500;
}

/* ===== ERROR STATE ===== */
.error-state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 40px 24px;
}

.error-content {
  max-width: 480px;
  text-align: center;
  background: var(--surface);
  padding: 48px 40px;
  border-radius: 24px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border);
}

.error-icon {
  display: inline-flex;
  margin-bottom: 24px;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

.error-content h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 12px 0;
}

.error-content p {
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0 0 32px 0;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 12px;
  border: none;
  background: var(--primary);
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 12px rgba(139, 47, 60, 0.2);
}

.back-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 47, 60, 0.3);
}

.back-btn svg {
  stroke: currentColor;
}

/* ===== BOTTOM BAR ===== */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);
  z-index: 100;
  backdrop-filter: blur(10px);
}

.bottom-bar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

/* ===== AUTOSAVE INDICATOR ===== */
.autosave-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  transition: var(--transition);
}

.indicator-dot.saving {
  background: #f59e0b;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

.indicator-text {
  font-size: 14px;
  color: var(--text-light);
  font-weight: 500;
}

/* ===== PRICE DISPLAY ===== */
.price-display {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.price-label {
  font-size: 12px;
  color: var(--text-light);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price-amount {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.5px;
}

/* ===== ACTION BUTTONS ===== */
.action-buttons {
  display: flex;
  gap: 12px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
}

.preview-btn {
  background: var(--background);
  color: var(--text);
  border: 2px solid var(--border);
}

.preview-btn:hover {
  background: var(--accent);
  border-color: var(--primary);
  transform: translateY(-2px);
}

.payment-btn {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 12px rgba(139, 47, 60, 0.2);
}

.payment-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 47, 60, 0.3);
}

.action-btn svg {
  stroke: currentColor;
  flex-shrink: 0;
}

.btn-label {
  font-size: 15px;
}

/* ===== ANIMATIONS ===== */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 24px 16px;
  }

  .base-create {
    padding-bottom: 120px;
  }

  .bottom-bar-content {
    padding: 12px 16px;
    flex-wrap: wrap;
  }

  .autosave-indicator {
    order: 1;
    flex: 1;
  }

  .action-buttons {
    order: 2;
    width: 100%;
    flex: 1 1 100%;
  }

  .price-display {
    order: 3;
    align-items: flex-start;
  }

  .action-btn {
    flex: 1;
    justify-content: center;
    padding: 12px 16px;
  }

  .price-amount {
    font-size: 20px;
  }

  .error-content {
    padding: 40px 32px;
  }

  .error-content h3 {
    font-size: 22px;
  }

  .error-icon svg {
    width: 64px;
    height: 64px;
  }
}

@media (max-width: 640px) {
  .action-btn svg {
    display: none;
  }

  .action-btn {
    padding: 12px;
  }

  .price-display {
    display: none;
  }

  .autosave-indicator {
    font-size: 13px;
  }

  .indicator-dot {
    width: 6px;
    height: 6px;
  }

  .bottom-bar-content {
    gap: 12px;
  }

  .action-buttons {
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 20px 12px;
  }

  .error-content {
    padding: 32px 24px;
  }

  .error-content h3 {
    font-size: 20px;
  }

  .error-content p {
    font-size: 14px;
  }

  .back-btn {
    padding: 12px 24px;
    font-size: 14px;
  }

  .bottom-bar-content {
    padding: 10px 12px;
  }
}

/* ===== MOBILE OPTIMIZATIONS ===== */
@media (hover: none) and (pointer: coarse) {
  /* Increase touch targets on mobile */
  .action-btn {
    min-height: 44px;
  }

  .back-btn {
    min-height: 44px;
  }

  /* Show image remove buttons on mobile */
  :deep(.image-remove-btn) {
    opacity: 1 !important;
  }

  /* Hide image overlay on mobile */
  :deep(.image-overlay) {
    display: none !important;
  }
}
</style>