<template>
  <div class="romantic-container">
    <!-- Pages Section -->
    <section class="form-section">
      <div class="section-header">
        <div class="header-content">
          <span class="header-icon">💝</span>
          <div>
            <h3>Các trang câu hỏi</h3>
            <p class="section-desc">Tạo những câu hỏi lãng mạn kèm hình ảnh đẹp</p>
          </div>
        </div>
        <span class="count-badge">{{ pages.length }}</span>
      </div>

      <div class="pages-list">
        <div v-for="(page, index) in pages" :key="index" class="page-card">
          <div class="card-header">
            <div class="page-number">
              <span class="number-text">{{ index + 1 }}</span>
            </div>
            <button
              @click="removePage(index)"
              class="remove-btn"
              :aria-label="`Xóa trang ${index + 1}`"
            >
              <span>✕</span>
            </button>
          </div>

          <div class="card-content">
            <div class="input-group">
              <label class="input-label">
                <span class="label-icon">💬</span>
                <span>Câu hỏi chính</span>
              </label>
              <input
                :value="page.q"
                @input="updateField(index, 'q', $event.target.value)"
                placeholder="VD: Em có muốn làm valentine của anh không?"
                class="romantic-input"
              />
              <span class="input-hint">Câu hỏi này sẽ hiển thị lớn và nổi bật</span>
            </div>

            <div class="input-group">
              <label class="input-label">
                <span class="label-icon">✨</span>
                <span>Dòng phụ (tùy chọn)</span>
              </label>
              <input
                :value="page.sub"
                @input="updateField(index, 'sub', $event.target.value)"
                placeholder="VD: Anh hứa sẽ luôn yêu thương em..."
                class="romantic-input"
              />
              <span class="input-hint">Thêm lời nhắn ngọt ngào hoặc gợi ý</span>
            </div>

            <div class="input-group">
              <label class="input-label">
                <span class="label-icon">🖼️</span>
                <span>Hình ảnh (tùy chọn)</span>
              </label>
              <div class="image-upload-area">
                <input
                  type="file"
                  accept="image/*"
                  @change="uploadImage($event, index)"
                  class="file-input"
                  :id="`image-${index}`"
                />
                <label :for="`image-${index}`" class="file-label">
                  <div v-if="!page.image" class="upload-placeholder">
                    <span class="upload-icon">📸</span>
                    <span class="upload-text">Nhấn để chọn ảnh</span>
                    <span class="upload-subtext">PNG, JPG hoặc GIF</span>
                  </div>
                  <div v-else class="image-preview-container">
                    <img :src="page.image" class="preview-image" alt="Preview" />
                    <div class="image-overlay">
                      <span class="overlay-text">Nhấn để thay đổi</span>
                    </div>
                  </div>
                </label>
              </div>
              <span class="input-hint">Thêm hình ảnh để trang thêm ý nghĩa</span>
              <span
                v-if="
                  index > 0 || (index === 0 && pages.filter((p) => p.image).length > 1)
                "
                class="fee-hint"
              >
                💰 Ảnh từ thứ 2 trở đi: +10.000đ/ảnh
              </span>
              <span v-if="page.image && imageCount >= 2 && index >= 1" class="fee-badge">
                +10.000đ
              </span>
            </div>
          </div>
        </div>
      </div>

      <button @click="addPage" class="add-btn">
        <span class="btn-icon">+</span>
        <span>Thêm trang mới</span>
      </button>
    </section>

    <!-- Music Section -->
    <section class="form-section music-section">
      <div class="section-header">
        <div class="header-content">
          <span class="header-icon">🎵</span>
          <div>
            <h3>Nhạc nền</h3>
            <p class="section-desc">Chọn bản nhạc lãng mạn cho Valentine của bạn</p>
          </div>
        </div>
      </div>

      <div class="music-content">
        <!-- Preset music -->
        <div class="music-subsection">
          <div class="subsection-header">
            <span class="subsection-icon">🎼</span>
            <div>
              <p class="subsection-title">Nhạc có sẵn</p>
              <p class="subsection-hint">Chọn một trong các bản nhạc đã chuẩn bị</p>
            </div>
          </div>
          <div class="music-grid">
            <button
              v-for="music in presetMusics"
              :key="music.url"
              @click="selectPreset(music.url)"
              :class="['music-btn', selectedMusic === music.url ? 'active-music' : '']"
            >
              <span class="music-icon">{{
                selectedMusic === music.url ? "🎶" : "🎼"
              }}</span>
              <span class="music-name">{{ music.name }}</span>
              <span v-if="selectedMusic === music.url" class="check-icon">✓</span>
            </button>
          </div>
        </div>

        <!-- Upload custom music -->
        <div class="music-subsection">
          <div class="subsection-header">
            <span class="subsection-icon">🎧</span>
            <div>
              <p class="subsection-title">Tải nhạc riêng</p>
              <p class="subsection-hint">Hoặc sử dụng bản nhạc yêu thích của bạn</p>
            </div>
          </div>
          <div class="upload-music-area">
            <input
              type="file"
              accept="audio/*"
              @change="uploadMusic"
              class="file-input"
              id="music-upload"
            />
            <label for="music-upload" class="music-file-label">
              <span class="upload-icon">📁</span>
              <div class="upload-text-group">
                <span class="upload-label-text">Chọn file nhạc</span>
                <span class="upload-label-hint">MP3, WAV, OGG...</span>
              </div>
            </label>
          </div>
        </div>

        <!-- Preview -->
        <div v-if="selectedMusic" class="music-preview">
          <div class="preview-header">
            <span class="preview-icon">🎵</span>
            <span class="preview-title">Đang phát nhạc nền</span>
          </div>
          <div class="audio-container">
            <audio :src="selectedMusic" controls class="audio-player"></audio>
          </div>
          <button @click="removeMusic" class="remove-music-btn">
            <span>🗑️</span>
            <span>Xóa nhạc</span>
          </button>
        </div>
      </div>
    </section>
    <!-- Fee Summary -->
    <div v-if="totalExtraFee > 0" class="fee-summary">
      <div class="fee-header">
        <span class="fee-icon">💰</span>
        <span class="fee-title">Phí phát sinh</span>
      </div>
      <div class="fee-list">
        <div v-if="extraImageCount > 0" class="fee-item">
          <span class="fee-label">🖼️ Ảnh thêm ({{ extraImageCount }} ảnh × 10.000đ)</span>
          <span class="fee-value">+{{ extraImageFee.toLocaleString("vi-VN") }}đ</span>
        </div>
        <div v-if="musicFee > 0" class="fee-item">
          <span class="fee-label">🎵 Nhạc nền</span>
          <span class="fee-value">+10.000đ</span>
        </div>
      </div>
      <div class="fee-total">
        <span>Tổng phí thêm:</span>
        <span class="fee-total-value">+{{ totalExtraFee.toLocaleString("vi-VN") }}đ</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        MUSIC_URL: "",
        pages: [{ q: "", sub: "", image: "" }],
      }),
    },
  },

  emits: ["update:modelValue"],

  computed: {
    pages() {
      return Array.isArray(this.modelValue.pages) ? this.modelValue.pages : [];
    },

    selectedMusic() {
      return this.modelValue.MUSIC_URL || "";
    },
    imageCount() {
      return this.pages.filter((p) => p.image && p.image !== "").length;
    },

    extraImageCount() {
      return Math.max(0, this.imageCount - 1);
    },

    extraImageFee() {
      return this.extraImageCount * 10000;
    },

    musicFee() {
      return this.selectedMusic ? 10000 : 0;
    },

    totalExtraFee() {
      return this.extraImageFee + this.musicFee;
    },
  },

  data() {
    return {
      presetMusics: [
        { name: "Nhạc Valentine 1", url: "/template/AskValentin/music/happy1.mp3" },
        { name: "Nhạc Valentine 2", url: "/template/AskValentin/music/love1.mp3" },
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

    /* ===========================
       ======== PAGES ============
    ============================ */

    addPage() {
      this.emit({
        pages: [...this.pages, { q: "", sub: "", image: "" }],
      });
    },

    updateField(index, field, value) {
      const arr = this.pages.map((p, i) => {
        if (i === index) {
          return {
            ...p,
            [field]: value, // ✔ đúng
          };
        }
        return p;
      });

      this.emit({ pages: arr });
    },

    async removePage(index) {
      const page = this.pages[index];

      if (!page) return;

      // Nếu có ảnh thì gọi API xoá trước
      if (page.image) {
        try {
          await this.axios.post(`/api/cards/${this.$route.params.id}/remove-image`, {
            url: page.image,
          });
        } catch (e) {
          console.error("Xoá ảnh lỗi:", e);
          // Có thể return để không xoá page nếu server lỗi
          // return;
        }
      }

      const arr = [...this.pages];
      arr.splice(index, 1);

      this.emit({ pages: arr });
    },

    /* ===========================
       ======== IMAGE ============
    ============================ */
    async uploadImage(e, index) {
      const file = e.target.files[0];
      if (!file) return;

      const oldImage = this.pages[index]?.image;

      const form = new FormData();
      form.append("image", file);

      try {
        const res = await this.axios.post(
          `/api/cards/${this.$route.params.id}/upload-image`,
          form,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        const arr = [...this.pages];

        // Nếu có ảnh cũ → xoá trên server
        if (oldImage) {
          try {
            await this.axios.post(`/api/cards/${this.$route.params.id}/remove-image`, {
              url: oldImage,
            });
          } catch (e) {
            console.error("Xoá ảnh cũ lỗi", e);
          }
        }

        arr[index].image = res.data.path;
        this.emit({ pages: arr });
      } catch (e) {
        console.error(e);
      }

      e.target.value = "";
    },
    /* ===========================
       ======== MUSIC ============
    ============================ */

    async selectPreset(url) {
      this.emit({ MUSIC_URL: url });
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
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        this.emit({ MUSIC_URL: res.data.path });
      } catch (e) {
        console.error(e);
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
* {
  box-sizing: border-box;
}

.romantic-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", sans-serif;
}

/* ===== SECTION STYLING ===== */
.form-section {
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f5f5f5;
}

.header-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}

.header-icon {
  font-size: 32px;
  line-height: 1;
  flex-shrink: 0;
}

.section-header h3 {
  margin: 0 0 4px 0;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
}

.section-desc {
  margin: 0;
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}

.count-badge {
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 13px;
  box-shadow: 0 2px 6px rgba(255, 107, 157, 0.25);
  flex-shrink: 0;
  min-width: 32px;
  text-align: center;
}

/* ===== PAGE CARDS ===== */
.pages-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.page-card {
  background: #fafafa;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e8e8e8;
  transition: all 0.2s ease;
}

.page-card:hover {
  border-color: #ffb6c1;
  background: #fff;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 2px 6px rgba(255, 107, 157, 0.25);
}

.number-text {
  display: block;
}

.remove-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: #ff4d6d;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.remove-btn:hover {
  background: #ff4d6d;
  color: white;
  transform: scale(1.05);
}

.remove-btn:active {
  transform: scale(0.95);
}

/* ===== INPUT STYLING ===== */
.card-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  margin-bottom: 2px;
}

.label-icon {
  font-size: 16px;
  line-height: 1;
}

.romantic-input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.2s ease;
  background: white;
  font-family: inherit;
  color: #1a1a1a;
}

.romantic-input:focus {
  outline: none;
  border-color: #ff6b9d;
  box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.08);
}

.romantic-input::placeholder {
  color: #999;
}

.input-hint {
  font-size: 12px;
  color: #888;
  line-height: 1.4;
  margin-top: -2px;
}

/* ===== IMAGE UPLOAD ===== */
.image-upload-area {
  position: relative;
}

.file-input {
  display: none;
}

.file-label {
  display: block;
  cursor: pointer;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  border: 2px dashed #ddd;
  border-radius: 12px;
  background: white;
  transition: all 0.2s ease;
}

.upload-placeholder:hover {
  border-color: #ff6b9d;
  background: #fff5f7;
}

.upload-icon {
  font-size: 40px;
  margin-bottom: 8px;
}

.upload-text {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.upload-subtext {
  font-size: 12px;
  color: #888;
}

.image-preview-container {
  position: relative;
  display: inline-block;
  border-radius: 12px;
  overflow: hidden;
}

.preview-image {
  display: block;
  max-width: 100%;
  width: 200px;
  height: auto;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  border-radius: 12px;
}

.image-preview-container:hover .image-overlay {
  opacity: 1;
}

.overlay-text {
  color: white;
  font-size: 13px;
  font-weight: 600;
}

/* ===== BUTTONS ===== */
.add-btn {
  width: 100%;
  padding: 14px 24px;
  border: 2px dashed #ff6b9d;
  border-radius: 12px;
  background: #fff5f7;
  color: #ff6b9d;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.add-btn:hover {
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
  color: white;
  border-color: #ff6b9d;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.25);
}

.add-btn:active {
  transform: translateY(0);
}

.btn-icon {
  font-size: 20px;
  font-weight: 400;
}

/* ===== MUSIC SECTION ===== */
.music-section {
  background: linear-gradient(135deg, #fafcff 0%, #fff 100%);
}

.music-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.music-subsection {
  padding: 18px;
  background: white;
  border-radius: 14px;
  border: 1px solid #e8e8e8;
}

.subsection-header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
}

.subsection-icon {
  font-size: 24px;
  line-height: 1;
  flex-shrink: 0;
}

.subsection-title {
  margin: 0 0 2px 0;
  font-weight: 600;
  color: #333;
  font-size: 15px;
  line-height: 1.3;
}

.subsection-hint {
  margin: 0;
  font-size: 12px;
  color: #888;
  line-height: 1.4;
}

.music-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 10px;
}

.music-btn {
  padding: 12px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  background: white;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  position: relative;
}

.music-btn:hover {
  border-color: #87ceeb;
  background: #f0f8ff;
  transform: translateY(-1px);
}

.active-music {
  background: linear-gradient(135deg, #87ceeb 0%, #5dade2 100%);
  color: white;
  border-color: #87ceeb;
  box-shadow: 0 2px 8px rgba(135, 206, 235, 0.3);
}

.music-icon {
  font-size: 18px;
  line-height: 1;
}

.music-name {
  flex: 1;
  text-align: left;
}

.check-icon {
  font-size: 16px;
  font-weight: 700;
}

.upload-music-area {
  margin-top: 4px;
}

.music-file-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.music-file-label:hover {
  border-color: #87ceeb;
  background: #f0f8ff;
}

.upload-text-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.upload-label-text {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  line-height: 1.2;
}

.upload-label-hint {
  font-size: 11px;
  color: #888;
  line-height: 1.2;
}

.music-preview {
  padding: 18px;
  background: white;
  border-radius: 14px;
  border: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.preview-icon {
  font-size: 20px;
}

.preview-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.audio-container {
  width: 100%;
}

.audio-player {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  outline: none;
}

.remove-music-btn {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: #fff0f0;
  color: #ff4d6d;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  font-size: 13px;
}

.remove-music-btn:hover {
  background: #ff4d6d;
  color: white;
}

.remove-music-btn:active {
  transform: scale(0.97);
}


/* ===== FEE SUMMARY ===== */
.fee-summary {
  background: linear-gradient(135deg, #fff8e7 0%, #fff3cd 100%);
  border: 1.5px solid #ffc107;
  border-radius: 16px;
  padding: 18px 20px;
  margin-top: 4px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

.fee-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.fee-icon {
  font-size: 20px;
}

.fee-title {
  font-size: 15px;
  font-weight: 700;
  color: #8a6200;
}

.fee-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
}

.fee-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #5a4000;
}

.fee-value {
  font-weight: 600;
  color: #e67e00;
}

.fee-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px dashed #ffc107;
  font-size: 15px;
  font-weight: 700;
  color: #6b4c00;
}

.fee-total-value {
  font-size: 17px;
  color: #d4500a;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .romantic-container {
    padding: 16px 12px;
  }

  .form-section {
    padding: 20px 16px;
    border-radius: 16px;
    margin-bottom: 16px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .count-badge {
    align-self: flex-start;
  }

  .section-header h3 {
    font-size: 18px;
  }

  .section-desc {
    font-size: 12px;
  }

  .header-icon {
    font-size: 28px;
  }

  .page-card {
    padding: 16px;
  }

  .page-number {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  .romantic-input {
    font-size: 15px;
    padding: 11px 14px;
  }

  .input-hint {
    font-size: 11px;
  }

  .music-grid {
    grid-template-columns: 1fr;
  }

  .add-btn {
    padding: 13px 20px;
    font-size: 14px;
  }

  .music-subsection {
    padding: 16px;
  }

  .subsection-icon {
    font-size: 22px;
  }

  .subsection-title {
    font-size: 14px;
  }

  .music-btn {
    padding: 11px 14px;
  }
}

@media (max-width: 480px) {
  .romantic-container {
    padding: 12px 8px;
  }

  .form-section {
    padding: 16px 12px;
  }

  .section-header h3 {
    font-size: 17px;
  }

  .header-icon,
  .subsection-icon {
    font-size: 24px;
  }

  .preview-image {
    width: 100%;
    max-width: 100%;
  }

  .upload-placeholder {
    padding: 28px 16px;
  }

  .upload-icon {
    font-size: 36px;
  }

  .card-content {
    gap: 18px;
  }

  .input-group {
    gap: 6px;
  }

  .music-file-label {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 360px) {
  .romantic-input {
    font-size: 14px;
    padding: 10px 12px;
  }

  .music-btn {
    font-size: 13px;
    padding: 10px 12px;
  }

  .add-btn {
    font-size: 13px;
    padding: 12px 16px;
  }
}
</style>
