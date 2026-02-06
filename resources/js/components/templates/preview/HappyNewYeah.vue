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
    src: { type: String, default: "/template/HappyNewYeah/index.html" },
    height: { type: String, default: "100vh" },
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
