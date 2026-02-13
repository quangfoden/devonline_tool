<template>
  <div class="base-create">
    <component
      v-if="createComponent"
      :is="createComponent"
      :modelValue="formData"
      @update:modelValue="onUpdate"
    />

    <div v-else-if="loadError" class="error-box">
      <div class="error-icon">💌</div>
      <h3>Không tìm thấy mẫu</h3>
      <p>Mẫu này có thể đã bị xoá hoặc chưa được cấu hình.</p>
      <button class="back-btn" @click="$router.push('/')">
        <span>←</span> Quay lại chọn mẫu
      </button>
    </div>

    <div v-else class="loading">
      <div class="loading-spinner"></div>
      <p>Đang tải mẫu...</p>
    </div>

    <!-- Autosave status -->
    <div class="autosave-status" v-if="!loadError">
      <span class="status-dot" :class="{ saving: saving }"></span>
      {{ autosaveText }}
    </div>

    <!-- ===== FLOATING BOTTOM BAR ===== -->
    <div class="payment-bar" v-if="!loadError">
      <!-- Price info -->
      <div class="bar-price">
        <span class="bar-price-label">Tổng thanh toán</span>
        <span class="bar-price-value">{{ formatVND(totalPrice) }}</span>
      </div>

      <!-- Divider -->
      <div class="bar-divider"></div>

      <!-- Buttons -->
      <div class="bar-actions">
        <button class="bar-btn preview-btn" @click="previewCard()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span>Xem trước</span>
        </button>

        <button class="bar-btn pay-btn" @click="payWithPayOS()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
          <span>Thanh toán ngay</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.base-create {
  position: relative;
  min-height: 100vh;
  padding: 32px 24px 100px;
  background: var(--color-background);
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* ===== LOADING STATE ===== */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  gap: 20px;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-accent-light);
  border-top: 4px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading p {
  font-size: 15px;
  color: var(--color-text-light);
  font-weight: 500;
}

/* ===== ERROR BOX ===== */
.error-box {
  max-width: 460px;
  margin: 120px auto;
  background: var(--color-surface);
  padding: 40px 32px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(139, 47, 60, 0.08);
  border: 1px solid var(--color-border);
}

.error-icon {
  font-size: 64px;
  margin-bottom: 16px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

.error-box h3 {
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
}

.error-box p {
  font-size: 15px;
  color: var(--color-text-light);
  margin-bottom: 28px;
  line-height: 1.6;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  background: var(--gradient-primary);
  color: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(139, 47, 60, 0.25);
}

.back-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(139, 47, 60, 0.35);
}

.back-btn:active { transform: translateY(-1px); }

/* ===== AUTOSAVE STATUS ===== */
.autosave-status {
  position: fixed;
  bottom: 28px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  color: var(--color-text-light);
  font-weight: 500;
  user-select: none;
  z-index: 101;
  letter-spacing: 0.2px;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  flex-shrink: 0;
  transition: background 0.3s ease;
}

.status-dot.saving {
  background: var(--color-primary, #f59e0b);
  animation: blink 1.2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* ===== FLOATING PAYMENT BAR ===== */
.payment-bar {
  position: fixed;
  bottom: 20px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 0;
  background: var(--color-surface, #fff);
  border: 1px solid var(--color-border, rgba(139,47,60,0.12));
  border-radius: 20px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.04),
    0 12px 40px rgba(139, 47, 60, 0.12);
  overflow: hidden;
  height: 60px;
  z-index: 100;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Price section */
.bar-price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  gap: 1px;
  min-width: 160px;
}

.bar-price-label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--color-text-light, #9ca3af);
  line-height: 1;
}

.bar-price-value {
  font-size: 18px;
  font-weight: 800;
  color: var(--color-primary, #8b2f3c);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

/* Divider */
.bar-divider {
  width: 1px;
  height: 36px;
  background: var(--color-border, rgba(139, 47, 60, 0.12));
  flex-shrink: 0;
}

/* Actions area */
.bar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
}

/* Base button */
.bar-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 16px;
  height: 40px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: 0.1px;
  transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.bar-btn svg {
  flex-shrink: 0;
  transition: transform 0.22s ease;
}

/* Preview button — ghost style */
.preview-btn {
  background: transparent;
  color: var(--color-primary, #8b2f3c);
  border: 1.5px solid var(--color-border, rgba(139, 47, 60, 0.2));
}

.preview-btn:hover {
  background: var(--color-accent-light, rgba(139, 47, 60, 0.06));
  border-color: var(--color-primary, #8b2f3c);
  transform: translateY(-1px);
}

.preview-btn:hover svg {
  transform: scale(1.1);
}

.preview-btn:active { transform: translateY(0); }

/* Pay button — solid style */
.pay-btn {
  background: var(--gradient-primary, linear-gradient(135deg, #8b2f3c, #c0404f));
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(139, 47, 60, 0.3);
}

.pay-btn:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(139, 47, 60, 0.38);
}

.pay-btn:hover svg {
  transform: translateX(1px);
}

.pay-btn:active {
  transform: translateY(0);
  filter: brightness(0.97);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .base-create {
    padding: 40px 16px 90px;
  }

  .payment-bar {
    left: 16px;
    right: 16px;
    bottom: 16px;
    height: 56px;
    border-radius: 18px;
  }

  .bar-price {
    flex: 1;
    min-width: 0;
    padding: 0 16px;
  }

  .bar-price-value {
    font-size: 16px;
  }

  .bar-actions {
    padding: 0 8px;
    gap: 6px;
  }

  .bar-btn {
    padding: 0 14px;
    height: 38px;
    font-size: 13px;
  }

  .autosave-status {
    bottom: 82px;
    left: 20px;
  }
}

@media (max-width: 400px) {
  .bar-btn span {
    display: none;
  }

  .bar-btn {
    width: 40px;
    padding: 0;
    justify-content: center;
    border-radius: 10px;
  }
}
</style>

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
      if (this.saving) return "Đang lưu...";
      if (this.lastSavedAt) return "Đã lưu";
      return "Chưa lưu";
    },
    totalPrice() {
      const basePrice = Number(this.template?.price || 0);
      let imageCount = 0;

      if (Array.isArray(this.formData.imageSources)) {
        imageCount += this.formData.imageSources.filter(Boolean).length;
      }

      if (Array.isArray(this.formData.pages)) {
        imageCount += this.formData.pages.filter((p) => p?.image).length;
      }

      const extraImages = Math.max(0, imageCount - 1);
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
      this.formData = { ...this.formData, ...val };
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