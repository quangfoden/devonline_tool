<!-- components/templates/birthday/BirthdayForm.vue -->
<template>
  <div class="form">
    <h2>🎂 Thông tin thiệp</h2>

    <label>Người chúc</label>
    <input v-model="form.sender" placeholder="Anh yêu 💕" />

    <label>Lời chúc</label>
    <textarea v-model="form.message" />

    <label>Ảnh người chúc</label>
    <input type="file" multiple accept="image/*" @change="uploadImage" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Object,
  },
  emits: ["update:modelValue"],

  computed: {
    form: {
      get() {
        return this.modelValue;
      },
      set(v) {
        this.$emit("update:modelValue", v);
      },
    },
  },

  methods: {
    async uploadImage(e) {
      const file = e.target.files[0];
      if (!file) return;

      const fd = new FormData();
      fd.append("image", file);

      const id = this.$route.params.id;
      const res = await axios.post(`/api/cards/${id}/upload-image`, fd);

      this.form = {
        ...this.form,
        sender_image: res.data.path,
      };
    },
  },
};
</script>

<style scoped>
.form {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
}
label {
  display: block;
  margin-top: 16px;
  font-weight: 600;
}
input,
textarea {
  width: 100%;
  margin-top: 6px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
}
</style>
