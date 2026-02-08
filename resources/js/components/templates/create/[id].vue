<template>
  <div class="base-create">
    <component v-if="createComponent" :is="createComponent" v-model="formData" />

    <div v-else class="loading">Đang tải mẫu...</div>
    <p class="autosave-status">
      {{ autosaveText }}
    </p>
    <button class="publish-btn" @click="publish">Publish</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createComponent: null,
      card: null,
      formData: {},
      autosaveTimer: null,
      saving: false,
      lastSavedAt: null,
      draftId: null,
    };
  },

  computed: {
    autosaveText() {
      if (this.saving) return "Đang lưu...";
      if (this.lastSavedAt) return "Đã lưu ✔";
      return "Chưa lưu";
    },
  },

  async created() {
    this.draftId = this.$route.params.id;

    const res = await this.axios.get(`/api/cards/${this.draftId}`);

    this.card = res.data;
    this.formData = res.data.data || {};

    const viewPath = res.data.template.view;

    const module = await import(`@components/templates/create/${viewPath}/index.vue`);

    this.createComponent = module.default;
  },

  watch: {
    formData: {
      deep: true,
      handler() {
        this.debounceAutosave();
      },
    },
  },

  methods: {
    debounceAutosave() {
      clearTimeout(this.autosaveTimer);

      this.autosaveTimer = setTimeout(() => {
        this.autosave();
      }, 1000);
    },

    async autosave() {
      if (this.saving) return;

      this.saving = true;

      try {
        await this.axios.post(`/api/cards/${this.draftId}/autosave`, {
          data: this.formData,
        });

        this.lastSavedAt = new Date();
      } catch (e) {
        console.error("Autosave lỗi", e);
      } finally {
        this.saving = false;
      }
    },

    async publish() {
      try {
        const res = await this.axios.post(`/api/cards/${this.draftId}/publish`);

        this.publicUrl = res.data.public_url;
        this.qrUrl = res.data.qr_url;

        alert("🎉 Xuất bản thành công!");
      } catch (e) {
        console.error("Publish lỗi", e);
        alert("Có lỗi khi publish");
      }
    },
  },
};
</script>
