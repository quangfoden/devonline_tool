<!-- components/templates/base/PreviewStage.vue -->
<template>
  <div
    class="stage"
    :class="{ zoom: isZoom }"
    @click.self="isZoom = false"
  >
    <button v-if="isZoom" class="close" @click="isZoom = false">✕</button>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isZoom: false,
    };
  },
  expose: ["toggle"],
  methods: {
    toggle() {
      this.isZoom = !this.isZoom;
    },
  },
};
</script>

<style scoped>
.stage {
  min-height: 420px;
  background: linear-gradient(135deg, #ffdde1, #ee9ca7);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.stage.zoom {
  position: fixed;
  inset: 0;
  z-index: 9999;
  border-radius: 0;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
}
</style>
