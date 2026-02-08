<template>
  <div class="card-form">

    <!-- WISH MESSAGES -->
    <h3>Lời chúc</h3>

    <div
      v-for="(wish, index) in wishes"
      :key="index"
      class="wish-item"
    >
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
      >
        <img :src="img" />
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
      const files = [...e.target.files];

      const uploaded = [];

      for (const file of files) {
        const form = new FormData();
        form.append("file", file);

        const res = await axios.post("/api/upload", form);
        uploaded.push(res.data.url); // ví dụ /storage/xxx.jpg
      }

      this.emit({
        imageSources: [...this.images, ...uploaded],
      });
    },

    removeImage(index) {
      const arr = [...this.images];
      arr.splice(index, 1);
      this.emit({ imageSources: arr });
    },
  },
};

</script>

<style scoped>
.wish-item,
.image-item {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.image-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

</style>