<template>
  <div class="card-form">
    <!-- HEADER -->
    <div class="form-header">
      <h2>✨ Tùy chỉnh mẫu của bạn</h2>
      <p>Thêm lời chúc và hình ảnh để thêm ý nghĩa</p>
    </div>

    <!-- WISH MESSAGES SECTION -->
    <section class="form-section">
      <div class="section-header">
        <div class="wr">
        <h3>💌 Lời chúc</h3>
        <small class="note"> (Những dòng chữ sẽ hiển thị trong màn hình) </small>
        </div>
        <span class="count-badge">{{ wishes.length }}</span>
      </div>

      <div class="wishes-container">
        <div v-for="(wish, index) in wishes" :key="index" class="wish-item">
          <div class="wish-number">{{ index + 1 }}</div>
          <input
            :value="wish"
            @input="updateWish(index, $event.target.value)"
            placeholder="Viết lời chúc ý nghĩa..."
            class="wish-input"
          />
          <button @click="removeWish(index)" class="remove-btn" title="Xóa lời chúc">
            ✕
          </button>
        </div>

        <button @click="addWish" class="add-btn">
          <span class="btn-icon">+</span>
          <span>Thêm lời chúc</span>
        </button>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- IMAGE UPLOAD SECTION -->
    <section class="form-section">
      <div class="section-header">
        <div class="wr">
        <h3>🎨 Ảnh hiệu ứng</h3>
        <small class="note">(Những hình ảnh sẽ hiển thị trong màn hình)</small>
        </div>
        <span class="count-badge">{{ images.length }}</span>
      </div>

      <div class="upload-area">
        <input
          type="file"
          multiple
          accept="image/*"
          @change="uploadImages"
          id="image-upload"
          class="file-input"
        />
        <label for="image-upload" class="upload-label">
          <div class="upload-icon">📸</div>
          <div class="upload-text">
            <strong>Chọn ảnh từ thiết bị</strong>
            <small>Hỗ trợ JPG, PNG, GIF • Tối đa 10MB/ảnh</small>
          </div>
        </label>
      </div>

      <div v-if="images.length > 0" class="image-grid">
        <div
          v-for="(img, index) in images"
          :key="img"
          class="image-card"
          :class="{ 'is-paid': index > 0 }"
        >
          <img :src="img" :alt="`Ảnh ${index + 1}`" />

          <div v-if="index === 0" class="image-badge free">Miễn phí</div>
          <div v-else class="image-badge paid">+10.000₫</div>

          <button @click="removeImage(index)" class="image-remove-btn" title="Xóa ảnh">
            ✕
          </button>

          <div class="image-overlay">
            <span class="image-index">#{{ index + 1 }}</span>
          </div>
        </div>
      </div>

      <div v-if="images.length > 1" class="pricing-note">
        <span class="note-icon">ℹ️</span>
        Ảnh đầu tiên miễn phí, mỗi ảnh tiếp theo +10.000₫
      </div>
    </section>

    <!-- MUSIC SECTION -->
    <section class="form-section">
      <div class="section-header">
       <div class="wr">
        <h3>🎵 Nhạc nền</h3>
        <small class="note">(Nhạc sẽ phát trong trang)</small>
       </div>
        <span v-if="selectedMusic" class="music-price-badge"> +10.000₫ </span>
      </div>

      <!-- Chọn nhạc có sẵn -->
      <div class="music-presets">
        <div
          v-for="music in presetMusics"
          :key="music.url"
          class="music-item"
          :class="{ active: selectedMusic === music.url }"
          @click="selectPreset(music.url)"
        >
          🎶 {{ music.name }}
        </div>
      </div>

      <div class="music-divider">Hoặc</div>

      <!-- Upload nhạc -->
      <div class="upload-area">
        <input
          type="file"
          accept="audio/*"
          @change="uploadMusic"
          id="music-upload"
          class="file-input"
        />
        <label for="music-upload" class="upload-label">
          <div class="upload-icon">🎧</div>
          <div class="upload-text">
            <strong>Tải nhạc từ thiết bị</strong>
            <small>Hỗ trợ MP3 • Tối đa 10MB</small>
          </div>
        </label>
      </div>

      <!-- Preview -->
      <div v-if="selectedMusic" class="music-preview">
        <audio :src="selectedMusic" controls />

        <button class="remove-music-btn" @click="removeMusic">✕ Tắt nhạc</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        WISH_MESSAGES: [],
        imageSources: [],
        MUSIC_URL: null,
      }),
    },
  },

  emits: ["update:modelValue"],

  computed: {
    wishes() {
      return this.modelValue.WISH_MESSAGES || [];
    },
    images() {
      return this.modelValue.imageSources || [];
    },
    selectedMusic() {
      return this.modelValue.MUSIC_URL || null;
    },
  },

  data() {
    return {
      presetMusics: [
        { name: "Một năm mới bình an", url: "/template/HappyNewYeah/music/happy2.mp3" },
        {
          name: "Một năm mới bình an (dài)",
          url: "/template/HappyNewYeah/music/happy.mp3",
        },
        {
          name: "Ngắm pháo hoa cùng nhau",
          url: "/template/HappyNewYeah/music/happy1.mp3",
        },
      ],
    };
  },

  methods: {
    emit(data) {
      this.$emit("update:modelValue", {
        ...this.modelValue,
        ...data,
      });
    },

    // ===== WISHES =====
    addWish() {
      this.emit({
        WISH_MESSAGES: [...this.wishes, ""],
      });
    },

    updateWish(index, value) {
      const arr = [...this.wishes];
      arr[index] = value;
      this.emit({ WISH_MESSAGES: arr });
    },

    removeWish(index) {
      const arr = [...this.wishes];
      arr.splice(index, 1);
      this.emit({ WISH_MESSAGES: arr });
    },

    // ===== IMAGES =====
    async uploadImages(e) {
      const files = Array.from(e.target.files);
      if (!files.length) return;

      const form = new FormData();

      files.forEach((file) => {
        form.append("images[]", file);
      });

      try {
        const res = await this.axios.post(
          `/api/cards/${this.$route.params.id}/upload-images`,
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.emit({
          imageSources: [...this.images, ...res.data.paths],
        });

        this.$swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Tải ảnh lên thành công!",
          showConfirmButton: false,
          timer: this.$config.notificationTimer ?? 1000,
          timerProgressBar: true,
          customClass: {
            popup: "my-toast",
            title: "my-toast-title",
          },
        });
      } catch (err) {
        if (err.response && err.response.status === 422) {
          const errors = err.response.data.errors;

          const firstError = Object.values(errors)[0][0];

          this.$swal.fire({
            toast: true,
            position: "center-center",
            icon: "error",
            title: firstError,
            showConfirmButton: false,
            timer: this.$config.notificationTimer ?? 1000,
            timerProgressBar: true,
            customClass: {
              popup: "my-toast",
              title: "my-toast-title",
            },
          });
        } else {
          console.error("Lỗi tải ảnh lên", err);
          this.$swal.fire({
            toast: true,
            position: "center-center",
            icon: "error",
            title: "Lỗi tải ảnh lên. Vui lòng thử lại.",
            showConfirmButton: false,
            timer: this.$config.notificationTimer ?? 1000,
            timerProgressBar: true,
            customClass: {
              popup: "my-toast",
              title: "my-toast-title",
            },
          });
        }
      }

      e.target.value = "";
    },

    async removeImage(index) {
      const imageUrl = this.images[index];

      const arr = [...this.images];
      arr.splice(index, 1);
      this.emit({ imageSources: arr });

      try {
        await this.axios.post(`/api/cards/${this.$route.params.id}/remove-image`, {
          url: imageUrl,
        });
      } catch (e) {
        console.error("Xoá ảnh lỗi", e);
        this.emit({ imageSources: this.images });
      }
    },

    // ===== MUSIC =====
    async selectPreset(url) {
      try {
        await this.axios.post(`/api/cards/${this.$route.params.id}/select-preset-music`, {
          music: url,
        });

        this.emit({
          MUSIC_URL: url,
        });
      } catch (e) {
        console.error(e);
      }
    },

    async uploadMusic(e) {
      const file = e.target.files[0];
      if (!file) return;

      const form = new FormData();
      form.append("music", file);

      try {
        const res = await this.axios.post(
          `/api/cards/${this.$route.params.id}/upload-music`,
          form,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        this.emit({
          MUSIC_URL: res.data.path,
        });

        this.$swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Tải nhạc thành công!",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (err) {
        this.$swal.fire({
          icon: "error",
          title: "Lỗi tải nhạc",
        });
      }

      e.target.value = "";
    },

    async removeMusic() {
      const oldMusic = this.selectedMusic;

      // Xóa UI trước cho mượt
      this.emit({
        MUSIC_URL: null,
      });

      try {
        await this.axios.post(`/api/cards/${this.$route.params.id}/remove-music`, {
          url: oldMusic,
        });
      } catch (e) {
        console.error("Xóa nhạc lỗi", e);

        // rollback nếu lỗi
        this.emit({
          MUSIC_URL: oldMusic,
        });
      }
    },
  },
};
</script>

<style scoped>
.card-form {
  background: var(--color-surface);
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 12px 48px rgba(139, 47, 60, 0.08);
  max-width: 650px;
  margin: 0 auto;
  border: 1px solid var(--color-border);
}

/* ===== HEADER ===== */
.form-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--color-accent-light);
}

.form-header h2 {
  font-size: 28px;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.form-header p {
  font-size: 15px;
  color: var(--color-text-light);
  font-weight: 500;
}

/* ===== SECTION ===== */
.form-section {
  margin-bottom: 32px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.section-header h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 8px;
}

.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 28px;
  padding: 0 10px;
  background: var(--gradient-accent);
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 700;
  border-radius: 14px;
  border: 1px solid var(--color-accent);
}

.section-divider {
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-border) 20%,
    var(--color-border) 80%,
    transparent
  );
  margin: 40px 0;
}

/* ===== WISHES CONTAINER ===== */
.wishes-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wish-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px;
  background: var(--color-background);
  border-radius: 16px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.wish-item:hover {
  border-color: var(--color-accent);
}

.wish-item:focus-within {
  border-color: var(--color-primary);
  background: var(--color-surface);
  box-shadow: 0 4px 16px rgba(139, 47, 60, 0.08);
}

.wish-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--gradient-primary);
  color: white;
  font-weight: 700;
  font-size: 14px;
  border-radius: 12px;
  flex-shrink: 0;
}

.wish-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  background: transparent;
  font-size: 15px;
  color: var(--color-text);
  font-weight: 500;
  outline: none;
}

.wish-input::placeholder {
  color: var(--color-text-light);
  font-weight: 400;
}

.remove-btn {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  border: none;
  background: var(--color-accent-light);
  color: var(--color-primary);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.remove-btn:hover {
  background: var(--color-primary);
  color: white;
  transform: rotate(90deg);
}

/* ===== ADD BUTTON ===== */
.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 20px;
  margin-top: 8px;
  border-radius: 16px;
  border: 2px dashed var(--color-border);
  background: var(--color-background);
  color: var(--color-primary);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-btn:hover {
  border-color: var(--color-primary);
  background: var(--color-accent-light);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 20px;
  font-weight: 700;
}

/* ===== FILE UPLOAD ===== */
.upload-area {
  margin-bottom: 24px;
}

.file-input {
  display: none;
}

.upload-label {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border-radius: 20px;
  border: 3px dashed var(--color-border);
  background: var(--gradient-hero);
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-label:hover {
  border-color: var(--color-primary);
  background: var(--color-accent-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(139, 47, 60, 0.1);
}

.upload-icon {
  font-size: 40px;
  flex-shrink: 0;
}

.upload-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.upload-text strong {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
}

.upload-text small {
  font-size: 13px;
  color: var(--color-text-light);
  font-weight: 500;
}

/* ===== IMAGE GRID ===== */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.image-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1;
  box-shadow: 0 4px 16px rgba(139, 47, 60, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid transparent;
}

.image-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 32px rgba(139, 47, 60, 0.2);
}

.image-card.is-paid {
  border-color: var(--color-primary);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ===== IMAGE BADGE ===== */
.image-badge {
  position: absolute;
  bottom: 8px;
  left: 8px;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(8px);
  z-index: 2;
}

.image-badge.free {
  background: rgba(255, 255, 255, 0.95);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.image-badge.paid {
  background: var(--color-primary);
  color: white;
  box-shadow: 0 4px 12px rgba(139, 47, 60, 0.3);
}

/* ===== IMAGE OVERLAY ===== */
.image-overlay {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  background: linear-gradient(135deg, rgba(139, 47, 60, 0.8), rgba(195, 91, 110, 0.6));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.image-index {
  color: white;
  font-size: 24px;
  font-weight: 800;
}

/* ===== REMOVE IMAGE BUTTON ===== */
.image-remove-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 3;
  backdrop-filter: blur(4px);
}

.image-card:hover .image-remove-btn {
  opacity: 1;
}

.image-remove-btn:hover {
  background: var(--color-primary);
  transform: rotate(90deg) scale(1.1);
}

/* ===== PRICING NOTE ===== */
.pricing-note {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: var(--color-accent-light);
  border-left: 4px solid var(--color-primary);
  border-radius: 12px;
  font-size: 14px;
  color: var(--color-text);
  font-weight: 500;
}

.note-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.music-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.music-item {
  padding: 10px 16px;
  border-radius: 12px;
  border: 2px solid var(--color-border);
  cursor: pointer;
  transition: 0.3s;
}

.music-item:hover {
  border-color: var(--color-primary);
}

.music-item.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.music-divider {
  text-align: center;
  margin: 16px 0;
  font-weight: 600;
  color: var(--color-text-light);
}

.music-preview {
  margin-top: 16px;
}

.music-price-badge {
  background: var(--color-primary);
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(139, 47, 60, 0.25);
}

.remove-music-btn {
  margin-top: 12px;
  padding: 8px 16px;
  border-radius: 12px;
  border: 2px solid var(--color-primary);
  background: var(--color-surface);
  color: var(--color-primary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-music-btn:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .form-section {
    margin-bottom: 0;
  }

  .card-form {
    padding: 24px 20px;
    border-radius: 20px;
    margin-bottom: 10px;
  }

  .form-header h2 {
    font-size: 24px;
  }

  .form-header p {
    font-size: 14px;
  }

  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 12px;
  }

  .upload-label {
    padding: 20px;
    gap: 12px;
  }

  .upload-icon {
    font-size: 32px;
  }

  .upload-text strong {
    font-size: 15px;
  }

  .upload-text small {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .card-form {
    padding: 20px 16px;
  }

  .wish-number {
    width: 32px;
    height: 32px;
    font-size: 13px;
  }

  .wish-input {
    font-size: 14px;
    padding: 10px 12px;
  }

  .remove-btn {
    width: 32px;
    height: 32px;
  }
}
</style>
