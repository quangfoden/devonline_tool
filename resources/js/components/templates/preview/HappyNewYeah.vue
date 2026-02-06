<template>
  <div class="happy-new-year-preview preview-template flex-center">
    <iframe
      ref="frame"
      :src="src"
      :style="{ width: '100%', maxWidth: '90vw', height: '80vh', border: '0' }"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "HappyNewYeahPreview",
  props: {
    previewData: { type: Object, default: () => ({}) },
    src: { type: String, default: "/template/HappyNewYeah/index.html" },
    height: { type: String, default: "100vh" },
  },
  mounted() {
    this.postPreview = this.postPreview.bind(this);
    const frame = this.$refs.frame;
    if (frame) {
      frame.addEventListener("load", () => {
        this.postPreview();
      });
    }
  },
  watch: {
    previewData: {
      deep: true,
      handler() {
        this.postPreview();
      },
    },
  },
  methods: {
    postPreview() {
      const frame = this.$refs.frame;
      if (!frame || !frame.contentWindow) return;
      try {
        frame.contentWindow.postMessage(
          { type: "templatePreviewData", data: this.previewData },
          "*"
        );
      } catch (err) {
        // ignore
      }
    },
  },
};
</script>

<style scoped>
/* Tùy chỉnh thêm cho iframe nếu cần */
iframe {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Tạo hiệu ứng đổ bóng cho đẹp */
  border-radius: 8px; /* Bo góc nhẹ */
}
</style>
