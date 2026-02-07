<template>
  <section class="demo">
    <div v-if="loading" class="demo__loading">Đang tải bản demo...</div>

    <div v-else-if="template" class="preview-demo">
      <!-- Preview -->
      <component
        v-if="template"
        :key="template.slug"
        :is="createComponent"
        :template="template"
        :data="renderData"
      />

      <!-- Actions -->
      <div class="demo__actions">
        <button class="btn btn--outline" @click="goBack">← Quay lại</button>

        <button class="btn btn--primary" @click="chooseTemplate(template.id)">
          Chọn mẫu này
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      template: null,
      renderData: null,
      loading: true,
      loadingSpam: false,
      createComponent: null,
    };
  },
  computed: {
    isProcessing() {
      return this.$store.state.isProcessing;
    },
  },
  async mounted() {
    const slug = this.$route.params.slug;
    await this.fetchTemplate(slug);
  },

  methods: {
    async fetchTemplate(slug) {
      try {
        const res = await this.axios.get(`/api/template/${slug}`);
        this.template = res.data.template;
        this.renderData = res.data.data;

        const viewPath = res.data.template.view;

        const module = await import(`@components/templates/preview/${viewPath}/preview.vue`);
        this.createComponent = module.default;
      } catch (e) {
        console.error("Không tìm thấy template", e);
        this.$router.push("/");
      } finally {
        this.loading = false;
      }
    },

    async chooseTemplate(templateId) {
      if (this.isProcessing || this.loadingSpam) return;
      this.loadingSpam = true;
      try {
        const draftId = await this.$store.dispatch("createCardDraft", templateId);

        if (draftId) {
          this.$router.push(`/create/${draftId}`);
        }
      } catch (error) {
        console.error("Lỗi khi tạo draft:", error);
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      } finally {
        this.loadingSpam = false;
      }
    },

    goBack() {
      this.$router.back();
    },
  },
};
</script>
