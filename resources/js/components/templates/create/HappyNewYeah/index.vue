<template>
  <div class="template-create">
    <!-- EDITOR -->
    <div class="editor">
      <h3>Chỉnh sửa nội dung</h3>

      <!-- Messages -->
      <div v-if="schemaMap.messages">
        <h4>{{ schemaMap.messages.label }}</h4>

        <div v-for="(item, index) in localData.messages" :key="index" class="item">
          <input v-model="item.text" placeholder="Nhập lời chúc" />
          <button @click="removeMessage(index)">✕</button>
        </div>

        <button
          v-if="localData.messages.length < schemaMap.messages.max"
          @click="addMessage"
        >
          + Thêm lời chúc
        </button>
      </div>
    </div>

    <!-- PREVIEW -->
    <div class="preview">
      <iframe
        ref="frame"
        :src="templateSrc"
        sandbox="allow-same-origin allow-scripts"
        @load="postPreview()"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "HappyNewYeahCreate",

  props: {
    modelValue: Object,
    schema: Object,
    template: Object,
  },

  emits: ["update:modelValue"],

  data() {
    return {
      localData: {
        messages: [],
        images: [],
        music: null,
      },
    };
  },

  computed: {
    schemaMap() {
      const map = {};
      this.schema.fields.forEach((f) => (map[f.key] = f));
      return map;
    },

    templateSrc() {
      return `/template/${this.template.view}/index.html`;
    },
  },

  mounted() {
    // init data từ base
    this.localData = JSON.parse(JSON.stringify(this.modelValue || {}));

    this.$refs.frame.addEventListener("load", () => {
      this.postPreview();
    });
  },

  watch: {
    localData: {
      deep: true,
      handler() {
        this.postPreview();
        this.$emit("update:modelValue", this.localData);
      },
    },
  },

  methods: {
    addMessage() {
      if (!Array.isArray(this.localData.messages)) {
        this.localData.messages = [];
      }
      this.localData.messages.push({
        x: 50,
        y: 50,
        text: "",
      });
    },

    removeMessage(index) {
      this.localData.messages.splice(index, 1);
    },

    normalizeData() {
      return {
        messages: Array.isArray(this.localData.messages)
          ? this.localData.messages.map((m) => m.text).filter(Boolean)
          : null,

        images: this.localData.images || null,
      };
    },

    postPreview() {
      const frame = this.$refs.frame;
      if (!frame?.contentWindow) return;

      const payload = JSON.parse(JSON.stringify(this.normalizeData()));
      frame.contentWindow.postMessage(
        {
          type: "templatePreviewData",
          data: payload,
        },
        "*"
      );
    },
  },
};
</script>

<style scoped>
.template-create {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
}

.editor {
  width: 35%;
  padding: 16px;
  border-right: 1px solid #eee;
}

.preview {
  width: 65%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

iframe {
  width: 90%;
  height: 90%;
  border: none;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .template-create {
    flex-direction: column;
  }
  .editor,
  .preview {
    width: 100%;
    height: 50vh;
  }
}
</style>
