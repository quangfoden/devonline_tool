<template>
  <div class="card-form">
    <!-- WISH MESSAGES -->
    <h3>Lời chúc</h3>

    <div v-for="(wish, index) in wishes" :key="index" class="wish-item">
      <input
        :value="wish"
        @input="updateWish(index, $event.target.value)"
        placeholder="Nhập lời chúc..."
      />
      <button @click="removeWish(index)">✕</button>
    </div>

    <button @click="addWish">+ Thêm lời chúc</button>

    <hr />

    <!-- IMAGE UPLOAD -->
    <h3>Ảnh hiệu ứng</h3>

    <input type="file" multiple @change="uploadImages" />

    <div class="image-preview">
      <div
        v-for="(img, index) in images"
        :key="img"
        class="image-item"
        :class="{ paid: index > 0 }">
        <img :src="img" />

        <span v-if="index > 0" class="price-tag">+10k</span>

        <button @click="removeImage(index)">✕</button>
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
        WISH_MESSAGES: [],
        imageSources: [],
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
      } catch (e) {
        console.error("Upload ảnh lỗi", e);
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
  },
};
</script>

<style scoped>
.card-form {
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  max-width: 720px;
  margin: 0 auto;
}

h3 {
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 12px;
}

/* ===== WISH ITEM ===== */
.wish-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.wish-item input {
  flex: 1;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-size: 14px;
  transition: all 0.2s ease;
}

.wish-item input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.wish-item button {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: #f1f5f9;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wish-item button:hover {
  background: #fee2e2;
  color: #dc2626;
}

/* add wish */
.card-form > button {
  margin-top: 6px;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background: #eef2ff;
  color: #4f46e5;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.card-form > button:hover {
  background: #e0e7ff;
  transform: translateY(-1px);
}

hr {
  margin: 20px 0;
  border: none;
  border-top: 1px dashed #e5e7eb;
}

/* ===== IMAGE UPLOAD ===== */
input[type="file"] {
  margin-bottom: 12px;
  font-size: 13px;
}

.image-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 12px;
}
.price-tag {
  position: absolute;
  bottom: 6px;
  left: 6px;
  background: rgba(79, 70, 229, 0.9);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 999px;
  pointer-events: none;
}

.image-item.paid {
  outline: 2px solid #6366f1;
}

.image-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
}

.image-item:hover {
  transform: translateY(-2px);
}

.image-item img {
  width: 100%;
  height: 90px;
  object-fit: cover;
  display: block;
}

/* remove image button */
.image-item button {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s ease;
}

.image-item:hover button {
  opacity: 1;
}

.image-item button:hover {
  background: #dc2626;
}
</style>
