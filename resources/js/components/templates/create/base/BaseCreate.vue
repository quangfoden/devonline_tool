<!-- components/templates/base/BaseCreate.vue -->
<template>
  <div class="layout">
    <!-- FORM -->
    <slot name="form" />

    <!-- PREVIEW -->
    <div class="preview">
      <div class="tools">
        <button @click="toggleZoom">🔍 Phóng to</button>
        <button @click="$emit('reset')">🔄 Reset</button>
      </div>

      <PreviewStage ref="stage">
        <slot name="preview" />
      </PreviewStage>
    </div>
  </div>
</template>

<script>
import PreviewStage from "@components/templates/create/base/PreviewStage.vue";

export default {
  components: { PreviewStage },
  emits: ["reset"],
  methods: {
    toggleZoom() {
      this.$refs.stage.toggle();
    },
  },
};
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 32px;
}

.preview {
  position: relative;
}

.tools {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  z-index: 10;
}

.tools button {
  background: #111;
  color: #fff;
  border-radius: 20px;
  padding: 6px 12px;
  border: none;
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
