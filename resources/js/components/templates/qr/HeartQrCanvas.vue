<template>
  <div class="qr-box">
    <canvas ref="canvas" width="260" height="260"></canvas>

    <button class="btn secondary" @click="download">📥 Tải QR</button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  qrUrl: String,
  style: String,
});

const canvas = ref(null);
let ctx;

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

const draw = async () => {
  if (!props.qrUrl || !ctx) return;

  const size = 260;

  const [qrImg, maskImg] = await Promise.all([
    loadImage(props.qrUrl),
    loadImage(
      props.style === "heart" ? "/masks/heart-mask.png" : "/masks/square-mask.png"
    ),
  ]);

  ctx.clearRect(0, 0, size, size);

  // vẽ QR
  ctx.drawImage(qrImg, 0, 0, size, size);

  // cắt theo mask
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(maskImg, 0, 0, size, size);

  ctx.globalCompositeOperation = "source-over";
};

onMounted(() => {
  ctx = canvas.value.getContext("2d");
  draw();
});

// 🔥 FIX QUAN TRỌNG: watch CẢ url + style
watch(
  () => [props.qrUrl, props.style],
  () => draw(),
  { immediate: true }
);

const download = () => {
  const link = document.createElement("a");
  link.download = `qr-${props.style}.png`;
  link.href = canvas.value.toDataURL("image/png");
  link.click();
};
</script>

<style scoped>
canvas {
  background: white;
  border-radius: 22px;
}
</style>
