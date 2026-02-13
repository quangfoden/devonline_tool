<template>
  <div class="romantic-container">
    <!-- Date Section -->
    <section class="form-section">
      <div class="section-header">
        <div class="header-content">
          <span class="header-icon">📅</span>
          <div>
            <h3>Ngày kỷ niệm</h3>
            <p class="section-desc">Chọn ngày đặc biệt của hai bạn</p>
          </div>
        </div>
      </div>

      <div class="input-group">
        <label class="input-label">
          <span class="label-icon">💝</span>
          <span>Ngày tháng năm</span>
        </label>
        <input
          type="date"
          :value="dateValue"
          @input="updateDate($event.target.value)"
          class="romantic-input date-input"
        />
        <span class="input-hint">Ngày đầu tiên gặp gỡ, ngày yêu nhau, hay ngày cưới...</span>
      </div>
    </section>

    <!-- Names Section -->
    <section class="form-section">
      <div class="section-header">
        <div class="header-content">
          <span class="header-icon">💑</span>
          <div>
            <h3>Tên hai người</h3>
            <p class="section-desc">Tên của bạn và người ấy</p>
          </div>
        </div>
      </div>

      <div class="names-grid">
        <div class="input-group">
          <label class="input-label">
            <span class="label-icon">👨</span>
            <span>Tên người thứ nhất</span>
          </label>
          <input
            :value="names[0] || ''"
            @input="updateName(0, $event.target.value)"
            placeholder="VD: Quang"
            class="romantic-input"
            maxlength="20"
          />
        </div>

        <div class="input-group">
          <label class="input-label">
            <span class="label-icon">👩</span>
            <span>Tên người thứ hai</span>
          </label>
          <input
            :value="names[1] || ''"
            @input="updateName(1, $event.target.value)"
            placeholder="VD: Linh"
            class="romantic-input"
            maxlength="20"
          />
        </div>
      </div>
    </section>

    <!-- Lines Section -->
    <section class="form-section">
      <div class="section-header">
        <div class="header-content">
          <span class="header-icon">✍️</span>
          <div>
            <h3>Lời nhắn tình yêu</h3>
            <p class="section-desc">Viết những dòng chữ từ trái tim bạn</p>
          </div>
        </div>
        <span class="count-badge">{{ lines.length }}</span>
      </div>

      <div class="lines-note">
        <span class="note-icon">💡</span>
        <span class="note-text">Gợi ý: 7-8 dòng sẽ tạo hiệu ứng đẹp và cân đối nhất</span>
      </div>

      <div class="lines-list">
        <div v-for="(line, index) in lines" :key="index" class="line-item">
          <div class="line-header">
            <div class="line-number">
              <span class="number-text">{{ index + 1 }}</span>
            </div>
            <button
              @click="removeLine(index)"
              class="remove-btn"
              :aria-label="`Xóa dòng ${index + 1}`"
              :disabled="lines.length <= 1"
            >
              <span>✕</span>
            </button>
          </div>

          <div class="input-group">
            <textarea
              :value="line"
              @input="updateLine(index, $event.target.value)"
              :placeholder="`Dòng ${index + 1}: VD: Từ ngày gặp em...`"
              class="romantic-textarea"
              rows="2"
              maxlength="100"
            ></textarea>
            <div class="char-count">
              {{ line.length }}/100 ký tự
            </div>
          </div>
        </div>
      </div>

      <button @click="addLine" class="add-btn">
        <span class="btn-icon">+</span>
        <span>Thêm dòng mới</span>
      </button>

      <div v-if="lines.length < 7" class="suggestion-hint">
        <span class="hint-icon">📝</span>
        <span>Thêm {{ 7 - lines.length }} dòng nữa để đạt độ dài lý tưởng</span>
      </div>
      <div v-else-if="lines.length > 8" class="warning-hint">
        <span class="hint-icon">⚠️</span>
        <span>Quá nhiều dòng có thể làm giảm hiệu ứng. Nên giữ 7-8 dòng!</span>
      </div>
    </section>

    <!-- Music Section -->
    <section class="form-section music-section">
      <div class="section-header">
        <div class="header-content">
          <span class="header-icon">🎵</span>
          <div>
            <h3>Nhạc nền</h3>
            <p class="section-desc">Chọn bản nhạc lãng mạn cho kỷ niệm của bạn</p>
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
              <p class="subsection-hint">Hoặc sử dụng bản nhạc yêu thích của bạn (+10.000đ)</p>
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
    <div v-if="musicFee > 0" class="fee-summary">
      <div class="fee-header">
        <span class="fee-icon">💰</span>
        <span class="fee-title">Phí phát sinh</span>
      </div>
      <div class="fee-list">
        <div class="fee-item">
          <span class="fee-label">🎵 Nhạc nền tùy chỉnh</span>
          <span class="fee-value">+10.000đ</span>
        </div>
      </div>
      <div class="fee-total">
        <span>Tổng phí thêm:</span>
        <span class="fee-total-value">+{{ musicFee.toLocaleString("vi-VN") }}đ</span>
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
        date: "",
        lines: [""],
        names: ["", ""],
        MUSIC_URL: "",
      }),
    },
  },

  emits: ["update:modelValue"],

  computed: {
    dateValue() {
      return this.modelValue.date || "";
    },

    lines() {
      return Array.isArray(this.modelValue.lines) && this.modelValue.lines.length > 0
        ? this.modelValue.lines
        : [""];
    },

    names() {
      return Array.isArray(this.modelValue.names) && this.modelValue.names.length === 2
        ? this.modelValue.names
        : ["", ""];
    },

    selectedMusic() {
      return this.modelValue.MUSIC_URL || "";
    },

   
    musicFee() {
      return this.selectedMusic ? 10000 : 0;
    },
  },

  data() {
    return {
      presetMusics: [
        { name: "Nhạc Tình Yêu 1", url: "/template/LoveTimeline/music/love1.mp3" },
        { name: "Nhạc Tình Yêu 2", url: "/template/LoveTimeline/music/love2.mp3" },
        { name: "Nhạc Tình Yêu 3", url: "/template/LoveTimeline/music/love3.mp3" },
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
       ======== DATE =============
    ============================ */
    updateDate(value) {
      this.emit({ date: value });
    },

    /* ===========================
       ======== NAMES ============
    ============================ */
    updateName(index, value) {
      const arr = [...this.names];
      arr[index] = value;
      this.emit({ names: arr });
    },

    /* ===========================
       ======== LINES ============
    ============================ */
    addLine() {
      this.emit({
        lines: [...this.lines, ""],
      });
    },

    updateLine(index, value) {
      const arr = [...this.lines];
      arr[index] = value;
      this.emit({ lines: arr });
    },

    removeLine(index) {
      if (this.lines.length <= 1) return; // Giữ ít nhất 1 dòng

      const arr = [...this.lines];
      arr.splice(index, 1);
      this.emit({ lines: arr });
    },

    /* ===========================
       ======== MUSIC ============
    ============================ */
    async selectPreset(url) {
      // Nếu đang dùng nhạc custom, xóa trên server
      if (this.selectedMusic && !this.presetMusics.some((m) => m.url === this.selectedMusic)) {
        try {
          await this.axios.post(`/api/cards/${this.$route.params.id}/remove-music`, {
            url: this.selectedMusic,
          });
        } catch (e) {
          console.error("Xóa nhạc cũ lỗi", e);
        }
      }

      this.emit({ MUSIC_URL: url });
    },

    async uploadMusic(e) {
      const file = e.target.files[0];
      if (!file) return;

      const oldMusic = this.selectedMusic;

      const form = new FormData();
      form.append("music", file);

      try {
        const res = await this.axios.post(
          `/api/cards/${this.$route.params.id}/upload-music`,
          form,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        // Nếu có nhạc cũ và là nhạc custom → xóa
        if (oldMusic && !this.presetMusics.some((m) => m.url === oldMusic)) {
          try {
            await this.axios.post(`/api/cards/${this.$route.params.id}/remove-music`, {
              url: oldMusic,
            });
          } catch (e) {
            console.error("Xóa nhạc cũ lỗi", e);
          }
        }

        this.emit({ MUSIC_URL: res.data.path });
      } catch (e) {
        console.error(e);
      }

      e.target.value = "";
    },

    async removeMusic() {
      const oldMusic = this.selectedMusic;

      // Xóa UI trước
      this.emit({ MUSIC_URL: "" });

      // Nếu là nhạc custom → xóa trên server
      if (oldMusic && !this.presetMusics.some((m) => m.url === oldMusic)) {
        try {
          await this.axios.post(`/api/cards/${this.$route.params.id}/remove-music`, {
            url: oldMusic,
          });
        } catch (e) {
          console.error("Xóa nhạc lỗi", e);
          // rollback nếu lỗi
          this.emit({ MUSIC_URL: oldMusic });
        }
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

/* ===== INPUT STYLING ===== */
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

.date-input {
  cursor: pointer;
}

.date-input::-webkit-calendar-picker-indicator {
  cursor: pointer;
  font-size: 16px;
}

.input-hint {
  font-size: 12px;
  color: #888;
  line-height: 1.4;
  margin-top: -2px;
}

/* ===== NAMES GRID ===== */
.names-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

/* ===== LINES STYLING ===== */
.lines-note {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%);
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #bbdefb;
}

.note-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.note-text {
  font-size: 13px;
  color: #1565c0;
  font-weight: 500;
  line-height: 1.4;
}

.lines-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.line-item {
  background: #fafafa;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e8e8e8;
  transition: all 0.2s ease;
}

.line-item:hover {
  border-color: #ffb6c1;
  background: #fff;
}

.line-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.line-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(255, 107, 157, 0.25);
}

.remove-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: #ff4d6d;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.remove-btn:hover:not(:disabled) {
  background: #ff4d6d;
  color: white;
  transform: scale(1.05);
}

.remove-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.romantic-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.2s ease;
  background: white;
  font-family: inherit;
  color: #1a1a1a;
  resize: vertical;
  min-height: 60px;
}

.romantic-textarea:focus {
  outline: none;
  border-color: #ff6b9d;
  box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.08);
}

.romantic-textarea::placeholder {
  color: #999;
}

.char-count {
  font-size: 11px;
  color: #999;
  text-align: right;
}

/* ===== HINTS ===== */
.suggestion-hint,
.warning-hint {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 12px;
  margin-top: 8px;
}

.suggestion-hint {
  background: #f0f8ff;
  color: #1565c0;
  border: 1px solid #bbdefb;
}

.warning-hint {
  background: #fff3cd;
  color: #856404;
  border: 1px solid #ffc107;
}

.hint-icon {
  font-size: 16px;
  flex-shrink: 0;
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

.file-input {
  display: none;
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

.upload-icon {
  font-size: 24px;
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
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

  .names-grid {
    grid-template-columns: 1fr;
  }

  .line-item {
    padding: 14px;
  }

  .romantic-input,
  .romantic-textarea {
    font-size: 15px;
  }

  .music-grid {
    grid-template-columns: 1fr;
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

  .lines-note {
    padding: 10px 12px;
  }

  .music-file-label {
    width: 100%;
    justify-content: center;
  }
}
</style>