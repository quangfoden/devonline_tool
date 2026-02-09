<template>
  <div class="base-create">
    <component
      v-if="createComponent"
      :is="createComponent"
      :modelValue="formData"
      @update:modelValue="onUpdate"
    />

    <div v-else class="loading">Đang tải mẫu...</div>
    <p class="autosave-status">
      {{ autosaveText }}
    </p>
    <p class="price-info">
      💰 Giá: <strong>{{ formatVND(totalPrice) }}</strong>
    </p>
    <div class="btn-payment">
      <button class="publish-btn" @click="payWithPayOS()">Thanh toán Payos</button>
      <!-- <button class="publish-btn2" @click="paymentVnp()">Thanh toán VNPAY</button> -->
    </div>
  </div>
</template>
<style scoped>
.base-create {
  position: relative;
  min-height: 100vh;
  padding: 24px 24px 120px;
  background: #f8fafc;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.price-info {
  position: fixed;
  bottom: 70px;
  right: 24px;
  background: #ffffff;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

/* loading */
.loading {
  text-align: center;
  padding: 60px 0;
  font-size: 15px;
  color: #64748b;
}

/* autosave status */
.autosave-status {
  position: fixed;
  bottom: 24px;
  left: 24px;
  font-size: 13px;
  color: #64748b;
  background: #ffffff;
  padding: 6px 12px;
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  user-select: none;
  transition: all 0.25s ease;
}

/* trạng thái đang lưu */
.autosave-status:has(:contains("Đang lưu")) {
  color: #0ea5e9;
}
.btn-payment {
  position: fixed;
  right: 24px;
  bottom: 20px;
  display: flex;
  gap: 12px;
  align-items: center;
}
/* publish button */
.publish-btn,
.publish-btn2 {
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.35);
  transition: all 0.25s ease;
}
/* hover */
.publish-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 40px rgba(79, 70, 229, 0.45);
}

/* click */
.publish-btn:active {
  transform: translateY(0);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
}

/* mobile */
@media (max-width: 640px) {
  .publish-btn {
    right: 16px;
    bottom: 16px;
    padding: 12px 20px;
    font-size: 14px;
  }

  .autosave-status {
    left: 16px;
    bottom: 70px;
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
    };
  },

  computed: {
    autosaveText() {
      if (this.saving) return "Đang lưu...";
      if (this.lastSavedAt) return "Đã lưu ✔";
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
    this.draftId = this.$route.params.id;

    const res = await this.axios.get(`/api/cards/${this.draftId}`);
    this.formData = res.data.data || {};
    this.card = res.data.card;
    this.template = res.data.template;
    const viewPath = this.template.view;

    const module = await import(`@components/templates/create/${viewPath}/index.vue`);

    this.createComponent = module.default;
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
    async payWithPayOS() {
      try {
        const res = await this.axios.post("/api/payments/payos/create", {
          card_id: this.$route.params.id,
        });

        window.location.href = res.data.checkoutUrl;
      } catch (e) {
        alert("Không tạo được thanh toán");
        console.error(e);
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
