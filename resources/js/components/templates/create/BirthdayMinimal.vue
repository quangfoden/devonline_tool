<template>
  <div class="birthday-create">
    <!-- FORM -->
    <div class="form">
      <h2>🎂 Tạo thiệp sinh nhật</h2>

      <label>Người chúc</label>
      <input v-model="form.sender" placeholder="Ví dụ: Anh yêu 💕" />

      <label>Lời chúc</label>
      <textarea
        v-model="form.message"
        placeholder="Chúc em luôn vui vẻ, hạnh phúc..."
      />

      <label>Ảnh người chúc</label>
      <input type="file" @change="onImage" />
    </div>

    <!-- PREVIEW -->
    <div class="preview">
      <!-- TOOLS -->
      <div class="preview-tools">
        <button @click="resetPreview">🔄 Reset</button>
        <button @click="toggleZoom">
          {{ isZoom ? "🔍 Thu nhỏ" : "🔍 Phóng to" }}
        </button>
      </div>

      <!-- STAGE -->
      <div
        class="preview-stage"
        :class="{ zoom: isZoom }"
        @click.self="isZoom = false"
      >
        <button v-if="isZoom" class="zoom-close" @click="isZoom = false">✕</button>

        <!-- GIFT -->
        <div v-if="!opened" class="gift" @click.stop="openGift">
          🎁
          <p>Nhấn để mở</p>
        </div>

        <!-- COUNTDOWN -->
        <div v-if="countdown > 0" class="countdown">
          {{ countdown }}
        </div>

        <!-- CARD -->
        <div v-if="opened && countdown === 0" class="card">
          <h1>🎉 Chúc mừng sinh nhật 🎉</h1>

          <p class="message">
            {{ form.message || "Chúc bạn một ngày thật đặc biệt 💖" }}
          </p>

          <p class="sender">— {{ form.sender || "Người bí mật" }}</p>

          <img
            v-if="previewImage || form.sender_image"
            :src="previewImage || form.sender_image"
            alt="sender"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  emits: ["update:modelValue"],

  computed: {
    form: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },

  data() {
    return {
      previewImage: null,

      autosaveTimer: null,
      lastSavedHash: "",

      opened: false,
      countdown: 0,
      timer: null,

      isZoom: false,
    };
  },

  mounted() {
    window.addEventListener("keydown", this.onKeydown);
    this.startAutosave();
  },

  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeydown);
    clearInterval(this.autosaveTimer);
  },

  methods: {
    /* ================= IMAGE ================= */
    async onImage(e) {
      const file = e.target.files[0];
      if (!file) return;

      this.previewImage = URL.createObjectURL(file);

      const formData = new FormData();
      formData.append("image", file);

      const draftId = this.$route.params.id;

      const res = await this.axios.post(
        `/api/cards/${draftId}/upload-image`,
        formData
      );

      this.form = {
        ...this.form,
        sender_image: res.data.path,
      };
    },

    /* ================= PREVIEW ================= */
    openGift() {
      if (this.opened) return;

      this.opened = true;
      this.countdown = 3;

      this.timer = setInterval(() => {
        this.countdown--;
        if (this.countdown === 0) clearInterval(this.timer);
      }, 1000);
    },

    resetPreview() {
      clearInterval(this.timer);
      this.opened = false;
      this.countdown = 0;
    },

    toggleZoom() {
      this.isZoom = !this.isZoom;
    },

    onKeydown(e) {
      if (e.key === "Escape") this.isZoom = false;
    },

    /* ================= AUTOSAVE ================= */
    getHash() {
      return JSON.stringify({
        sender: this.form.sender,
        message: this.form.message,
        image: this.form.sender_image,
      });
    },

    startAutosave() {
      this.lastSavedHash = this.getHash();

      this.autosaveTimer = setInterval(() => {
        const hash = this.getHash();
        if (hash !== this.lastSavedHash) {
          this.autosave();
          this.lastSavedHash = hash;
        }
      }, 5000);
    },

    async autosave() {
      const draftId = this.$route.params.id;

      await this.axios.post(`/api/cards/${draftId}/autosave`, {
        data: this.form,
      });
    },
  },
};
</script>
<style scoped>
.birthday-create {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 32px;
}

/* FORM */
.form {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
}

.form label {
  margin-top: 16px;
  display: block;
  font-weight: 600;
}

.form input,
.form textarea {
  width: 100%;
  margin-top: 6px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
}

/* PREVIEW */
.preview {
  position: relative;
}

.preview-tools {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  z-index: 10;
}

.preview-tools button {
  background: #111;
  color: #fff;
  border-radius: 20px;
  padding: 6px 12px;
  border: none;
}

/* STAGE */
.preview-stage {
  min-height: 420px;
  background: linear-gradient(135deg, #ffdde1, #ee9ca7);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-stage.zoom {
  position: fixed;
  inset: 0;
  z-index: 9999;
  border-radius: 0;
}

/* CARD */
.card {
  background: #fff;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  max-width: 420px;
}

.card img {
  max-width: 160px;
  border-radius: 14px;
}

/* 🎁 */
.gift {
  font-size: 96px;
  cursor: pointer;
  animation: shake 1.5s infinite;
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 1024px) {
  .birthday-create {
    grid-template-columns: 1fr;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .form {
    padding: 16px;
  }

  .preview-tools {
    top: 8px;
    right: 8px;
  }

  .card {
    padding: 16px;
  }

  .gift {
    font-size: 72px;
  }
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
}
</style>
