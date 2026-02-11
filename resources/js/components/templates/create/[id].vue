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
      <span class="status-icon" :class="{ saving: saving }">
        {{ saving ? "⏳" : "✓" }}
      </span>
      {{ autosaveText }}
    </div>

    <!-- Price info -->
    <div class="price-card" v-if="!loadError">
      <div class="price-label">Tổng thanh toán</div>
      <div class="price-value">{{ formatVND(totalPrice) }}</div>
    </div>

    <!-- Payment buttons -->
    <div class="payment-section" v-if="!loadError">
      <!-- Preview button -->
      <button class="payment-btn preview" @click="previewCard()">
        <span class="btn-icon">👀</span>
        <span class="btn-text">
          <strong>Xem trước thiệp</strong>
          <small>Mở bản xem thử</small>
        </span>
      </button>
      <button class="payment-btn primary" @click="payWithPayOS()">
        <span class="btn-icon">💳</span>
        <span class="btn-text">
          <strong>Thanh toán PayOS</strong>
          <small>Nhanh chóng & bảo mật</small>
        </span>
      </button>
      <!-- <button class="payment-btn secondary" @click="paymentVnp()">
        <span class="btn-icon">🏦</span>
        <span class="btn-text">
          <strong>Thanh toán VNPAY</strong>
          <small>Hỗ trợ đa ngân hàng</small>
        </span>
      </button> -->
    </div>
  </div>
</template>

<style scoped>
.base-create {
  position: relative;
  min-height: 100vh;
  padding: 32px 24px 180px;
  background: var(--color-background);
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
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
  to {
    transform: rotate(360deg);
  }
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
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
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

.back-btn:active {
  transform: translateY(-1px);
}

/* ===== AUTOSAVE STATUS ===== */
.autosave-status {
  position: fixed;
  bottom: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-text-light);
  background: var(--color-surface);
  padding: 10px 18px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(139, 47, 60, 0.08);
  border: 1px solid var(--color-border);
  user-select: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.status-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-accent-light);
  font-size: 12px;
  transition: all 0.3s ease;
}

.status-icon.saving {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

/* ===== PRICE CARD ===== */
.price-card {
  position: fixed;
  bottom: 120px;
  right: 24px;
  background: var(--gradient-accent);
  padding: 20px 24px;
  border-radius: 20px;
  min-width: 240px;
  box-shadow: 0 12px 40px rgba(139, 47, 60, 0.12);
  border: 1px solid var(--color-accent);
  backdrop-filter: blur(10px);
}

.price-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.price-value {
  font-size: 28px;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: -0.5px;
}

/* ===== PAYMENT SECTION ===== */
.payment-section {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.payment-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(139, 47, 60, 0.15);
  position: relative;
  overflow: hidden;
}

.payment-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.payment-btn:hover::before {
  opacity: 1;
}

.payment-btn.primary {
  background: var(--gradient-primary);
  color: #ffffff;
}

.payment-btn.secondary {
  background: var(--color-surface);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.payment-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(139, 47, 60, 0.25);
}

.payment-btn:active {
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.btn-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 2px;
}

.btn-text strong {
  font-weight: 700;
  font-size: 15px;
}

.btn-text small {
  font-size: 12px;
  opacity: 0.85;
  font-weight: 400;
}

.payment-btn.secondary .btn-text strong {
  color: var(--color-primary);
}

.payment-btn.secondary .btn-text small {
  color: var(--color-text-light);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .base-create {
    padding: 24px 16px 200px;
  }

  .payment-section {
    right: 16px;
    left: 16px;
    width: auto;
    bottom: 16px;
  }

  .price-card {
    right: 16px;
    left: 16px;
    bottom: 140px;
  }

  .autosave-status {
    left: 16px;
    bottom: 220px;
    font-size: 13px;
    padding: 8px 14px;
  }

  .payment-btn {
    padding: 14px 18px;
  }

  .btn-icon {
    font-size: 20px;
  }

  .btn-text strong {
    font-size: 14px;
  }

  .btn-text small {
    font-size: 11px;
  }
  .image-remove-btn {
    opacity: 1 !important;
    background: rgba(0, 0, 0, 0.6);
  }

  .image-overlay {
    display: none;
  }
}

@media (max-width: 480px) {
  .error-box {
    margin: 60px auto;
    padding: 32px 24px;
  }

  .price-value {
    font-size: 24px;
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

      const images = this.formData.imageSources || [];
      const extraImages = Math.max(0, images.length - 1);

      return basePrice + extraImages * 10000;
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
