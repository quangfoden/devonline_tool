<template>
  <div class="card-form">
    <!-- HEADER -->
    <div class="form-header">
      <div class="header-icon">✨</div>
      <h2>Tùy chỉnh thiệp</h2>
      <p>Thêm lời chúc, hình ảnh và nhạc nền để thiệp thêm ý nghĩa</p>
    </div>

    <!-- WISH MESSAGES SECTION -->
    <section class="form-section">
      <div class="section-header">
        <div class="section-title">
          <span class="section-icon">💌</span>
          <h3>Lời chúc</h3>
        </div>
        <span v-if="wishes.length > 0" class="count-badge">{{ wishes.length }}</span>
      </div>

      <div class="wishes-container">
        <transition-group name="wish-list">
          <div v-for="(wish, index) in wishes" :key="`wish-${index}`" class="wish-item">
            <div class="wish-number">{{ index + 1 }}</div>
            <input
              :value="wish"
              @input="updateWish(index, $event.target.value)"
              placeholder="Viết lời chúc của bạn..."
              class="wish-input"
              maxlength="200"
            />
            <button @click="removeWish(index)" class="remove-btn" title="Xóa">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </transition-group>

        <button @click="addWish" class="add-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>Thêm lời chúc mới</span>
        </button>
      </div>
    </section>

    <!-- IMAGE UPLOAD SECTION -->
    <section class="form-section">
      <div class="section-header">
        <div class="section-title">
          <span class="section-icon">🎨</span>
          <h3>Hình ảnh</h3>
        </div>
        <span v-if="images.length > 0" class="count-badge">{{ images.length }}</span>
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
          <svg class="upload-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M24 14V34M14 24H34" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" stroke-width="3"/>
          </svg>
          <div class="upload-text">
            <strong>Tải ảnh lên</strong>
            <small>JPG, PNG, GIF · Tối đa 10MB</small>
          </div>
        </label>
      </div>

      <transition-group name="image-grid" tag="div" class="image-grid" v-if="images.length > 0">
        <div
          v-for="(img, index) in images"
          :key="img"
          class="image-card"
        >
          <img :src="img" :alt="`Ảnh ${index + 1}`" loading="lazy" />
          
          <div class="image-badge" :class="{ free: index === 0, paid: index > 0 }">
            {{ index === 0 ? 'Miễn phí' : '+10K' }}
          </div>

          <button @click="removeImage(index)" class="image-remove-btn" title="Xóa ảnh">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 3L3 11M3 3L11 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <div class="image-overlay">
            <span class="image-index">#{{ index + 1 }}</span>
          </div>
        </div>
      </transition-group>

      <div v-if="images.length > 1" class="info-note">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8 7V11M8 5V5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span>Ảnh đầu tiên miễn phí, mỗi ảnh thêm +10.000₫</span>
      </div>
    </section>

    <!-- MUSIC SECTION -->
    <section class="form-section">
      <div class="section-header">
        <div class="section-title">
          <span class="section-icon">🎵</span>
          <h3>Nhạc nền</h3>
        </div>
        <span v-if="selectedMusic" class="price-badge">+10K</span>
      </div>

      <!-- Preset Music -->
      <div class="music-options">
        <div
          v-for="music in presetMusics"
          :key="music.url"
          class="music-option"
          :class="{ active: selectedMusic === music.url }"
          @click="selectPreset(music.url)"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 6V14C15 15.1046 14.1046 16 13 16C11.8954 16 11 15.1046 11 14C11 12.8954 11.8954 12 13 12C13.3506 12 13.6872 12.0602 14 12.1707V8L8 9.33333V15C8 16.1046 7.10457 17 6 17C4.89543 17 4 16.1046 4 15C4 13.8954 4.89543 13 6 13C6.35064 13 6.68721 13.0602 7 13.1707V7L15 5V6Z" fill="currentColor"/>
          </svg>
          <span>{{ music.name }}</span>
        </div>
      </div>

      <div class="divider">
        <span>hoặc</span>
      </div>

      <!-- Upload Music -->
      <div class="upload-area compact">
        <input
          type="file"
          accept="audio/*"
          @change="uploadMusic"
          id="music-upload"
          class="file-input"
        />
        <label for="music-upload" class="upload-label compact">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 15V3M12 3L8 7M12 3L16 7M3 17V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Tải nhạc từ thiết bị (MP3 · Max 10MB)</span>
        </label>
      </div>

      <!-- Music Preview -->
      <transition name="fade">
        <div v-if="selectedMusic" class="music-preview">
          <div class="audio-player">
            <audio :src="selectedMusic" controls controlsList="nodownload" />
          </div>
          <button class="remove-music-btn" @click="removeMusic">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>Xóa nhạc</span>
          </button>
        </div>
      </transition>
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
        { name: "Một năm mới bình an (dài)", url: "/template/HappyNewYeah/music/happy.mp3" },
        { name: "Ngắm pháo hoa cùng nhau", url: "/template/HappyNewYeah/music/happy1.mp3" },
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

      this.emit({
        MUSIC_URL: null,
      });

      try {
        await this.axios.post(`/api/cards/${this.$route.params.id}/remove-music`, {
          url: oldMusic,
        });
      } catch (e) {
        console.error("Xóa nhạc lỗi", e);
        this.emit({
          MUSIC_URL: oldMusic,
        });
      }
    },
  },
};
</script>

<style scoped>
/* ===== VARIABLES ===== */
:root {
  --primary: #8b2f3c;
  --primary-light: #c35b6e;
  --accent: #ffe5e9;
  --surface: #ffffff;
  --background: #fafafa;
  --border: #e5e7eb;
  --text: #1f2937;
  --text-light: #6b7280;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 25px rgba(139, 47, 60, 0.1);
  --radius: 16px;
  --radius-sm: 12px;
  --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== CARD FORM ===== */
.card-form {
  background: var(--surface);
  padding: 32px;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  max-width: 720px;
  margin: 0 auto;
}

/* ===== HEADER ===== */
.form-header {
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.header-icon {
  font-size: 48px;
  margin-bottom: 12px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.form-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
}

.form-header p {
  font-size: 15px;
  color: var(--text-light);
  margin: 0;
  line-height: 1.5;
}

/* ===== SECTION ===== */
.form-section {
  margin-bottom: 32px;
}

.form-section:last-child {
  margin-bottom: 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-icon {
  font-size: 24px;
}

.section-title h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}

.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: var(--primary);
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
}

.price-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  background: var(--primary);
  color: white;
  font-size: 13px;
  font-weight: 600;
  border-radius: 12px;
}

/* ===== WISHES ===== */
.wishes-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.wish-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background: var(--background);
  border-radius: var(--radius-sm);
  border: 2px solid transparent;
  transition: var(--transition);
}

.wish-item:hover {
  background: var(--surface);
  border-color: var(--accent);
}

.wish-item:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(139, 47, 60, 0.1);
}

.wish-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--primary);
  color: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  flex-shrink: 0;
}

.wish-input {
  flex: 1;
  padding: 8px 12px;
  border: none;
  background: transparent;
  font-size: 15px;
  color: var(--text);
  outline: none;
}

.wish-input::placeholder {
  color: var(--text-light);
}

.remove-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-light);
  cursor: pointer;
  transition: var(--transition);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn:hover {
  background: var(--primary);
  color: white;
}

/* ===== ADD BUTTON ===== */
.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px 20px;
  margin-top: 4px;
  border-radius: var(--radius-sm);
  border: 2px dashed var(--border);
  background: transparent;
  color: var(--primary);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.add-btn:hover {
  border-color: var(--primary);
  background: var(--accent);
}

.add-btn svg {
  stroke: currentColor;
}

/* ===== FILE UPLOAD ===== */
.upload-area {
  margin-bottom: 16px;
}

.upload-area.compact {
  margin-bottom: 0;
}

.file-input {
  display: none;
}

.upload-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  border-radius: var(--radius-sm);
  border: 2px dashed var(--border);
  background: var(--background);
  cursor: pointer;
  transition: var(--transition);
}

.upload-label.compact {
  padding: 16px;
  gap: 12px;
}

.upload-label:hover {
  border-color: var(--primary);
  background: var(--accent);
}

.upload-icon {
  stroke: var(--primary);
  flex-shrink: 0;
}

.upload-label.compact svg {
  width: 24px;
  height: 24px;
}

.upload-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}

.upload-label.compact .upload-text {
  flex-direction: row;
  gap: 0;
  text-align: center;
}

.upload-text strong {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
}

.upload-text small {
  font-size: 13px;
  color: var(--text-light);
}

.upload-label.compact span {
  font-size: 14px;
  color: var(--text);
}

/* ===== IMAGE GRID ===== */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.image-card {
  position: relative;
  border-radius: var(--radius-sm);
  overflow: hidden;
  aspect-ratio: 1;
  box-shadow: var(--shadow);
  transition: var(--transition);
  border: 2px solid transparent;
}

.image-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-badge {
  position: absolute;
  bottom: 8px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(8px);
  z-index: 2;
}

.image-badge.free {
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary);
}

.image-badge.paid {
  background: var(--primary);
  color: white;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(139, 47, 60, 0.8);
  opacity: 0;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.image-index {
  color: white;
  font-size: 20px;
  font-weight: 700;
}

.image-remove-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;
  opacity: 0;
  transition: var(--transition);
  z-index: 3;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-card:hover .image-remove-btn {
  opacity: 1;
}

.image-remove-btn:hover {
  background: var(--primary);
  transform: scale(1.1);
}

/* ===== INFO NOTE ===== */
.info-note {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: var(--accent);
  border-radius: var(--radius-sm);
  font-size: 14px;
  color: var(--text);
}

.info-note svg {
  stroke: var(--primary);
  flex-shrink: 0;
}

/* ===== MUSIC OPTIONS ===== */
.music-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 16px;
}

.music-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: var(--radius-sm);
  border: 2px solid var(--border);
  background: var(--background);
  cursor: pointer;
  transition: var(--transition);
  font-size: 14px;
  color: var(--text);
}

.music-option:hover {
  border-color: var(--primary);
  background: var(--accent);
}

.music-option.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.music-option svg {
  flex-shrink: 0;
}

.music-option span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ===== DIVIDER ===== */
.divider {
  text-align: center;
  margin: 16px 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: calc(50% - 40px);
  height: 1px;
  background: var(--border);
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  font-size: 13px;
  color: var(--text-light);
  font-weight: 500;
  padding: 0 16px;
  background: var(--surface);
}

/* ===== MUSIC PREVIEW ===== */
.music-preview {
  margin-top: 16px;
  padding: 16px;
  background: var(--background);
  border-radius: var(--radius-sm);
}

.audio-player {
  margin-bottom: 12px;
}

.audio-player audio {
  width: 100%;
  height: 40px;
  border-radius: 8px;
}

.remove-music-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid var(--primary);
  background: transparent;
  color: var(--primary);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: var(--transition);
}

.remove-music-btn:hover {
  background: var(--primary);
  color: white;
}

/* ===== ANIMATIONS ===== */
.wish-list-enter-active,
.wish-list-leave-active {
  transition: all 0.3s ease;
}

.wish-list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.wish-list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.image-grid-enter-active,
.image-grid-leave-active {
  transition: all 0.3s ease;
}

.image-grid-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.image-grid-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .card-form {
    padding: 24px 20px;
  }

  .form-header h2 {
    font-size: 24px;
  }

  .header-icon {
    font-size: 40px;
  }

  .section-icon {
    font-size: 20px;
  }

  .section-title h3 {
    font-size: 16px;
  }

  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
  }

  .music-options {
    grid-template-columns: 1fr;
  }

  .upload-label {
    padding: 20px 16px;
  }

  .upload-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .card-form {
    padding: 20px 16px;
  }

  .form-header {
    margin-bottom: 24px;
    padding-bottom: 20px;
  }

  .form-header h2 {
    font-size: 22px;
  }

  .form-header p {
    font-size: 14px;
  }

  .form-section {
    margin-bottom: 24px;
  }

  .wish-number {
    width: 28px;
    height: 28px;
    font-size: 13px;
  }

  .wish-input {
    font-size: 14px;
  }

  .remove-btn {
    width: 28px;
    height: 28px;
  }

  .add-btn {
    padding: 10px 16px;
    font-size: 14px;
  }

  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 8px;
  }

  .upload-label {
    flex-direction: column;
    padding: 16px;
    gap: 12px;
  }

  .upload-label.compact {
    flex-direction: row;
  }

  .upload-text {
    text-align: center;
  }

  .upload-text strong {
    font-size: 14px;
  }

  .upload-text small {
    font-size: 12px;
  }

  .music-option {
    padding: 10px;
    font-size: 13px;
  }

  .info-note {
    padding: 10px 12px;
    font-size: 13px;
  }
}
</style>