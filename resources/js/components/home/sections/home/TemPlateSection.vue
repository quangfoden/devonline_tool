// TemPlateSection.vue
<template>
  <section class="templates">
    <div class="templates__container">
      <div class="templates__header gsap-fade-up">
        <h2 class="templates__title">Chọn mẫu bạn yêu thích</h2>
        <p class="templates__subtitle">
          Các mẫu được thiết kế sẵn, phù hợp cho nhiều mục đích sử dụng khác nhau
        </p>
      </div>
      <div v-if="loading" class="templates__loading">Đang tải mẫu...</div>
      <div v-else class="templates__grid">
        <div
          v-for="template in visibleTemplates"
          :key="template.id"
          class="template-card gsap-fade-up"
        >
          <div class="template-card__image">
            <div
              v-if="!template.thumbnail"
              class="template-card__thumbnail"
              :style="{ background: template.gradient }"
            >
              <div class="template-card__preview-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
            </div>

            <div v-else class="template-card__thumbnail">
              <img :src="template.thumbnail" :alt="template.name" loading="lazy" />
            </div>

            <div class="template-card__overlay">
              <button class="template-card__preview-btn" @click="preview(template)">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Xem nhanh
              </button>
            </div>
          </div>

          <div class="template-card__content">
            <h3 class="template-card__name">{{ template.name }}</h3>
            <div class="template-card__used">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path
                  fill="currentColor"
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                />
              </svg>
              <span>({{ template.usedTotal }})</span>
            </div>
            <p class="template-card__description">{{ template.description }}</p>

            <div class="template-card__actions">
              <button
                class="template-card__btn template-card__btn--preview"
                @click="preview(template)"
              >
                Xem trước
              </button>
              <button
                class="template-card__btn template-card__btn--choose"
                @click="choose(template.id)"
              >
                Chọn mẫu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="remainingCount > 0" class="templates__more">
        <button class="load-more-btn" @click="showMore" :disabled="loading">
          Xem tất cả
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      templates: [],
      loading: true,
      loadingSpam: false,
      visibleCount: 6,
    };
  },
  computed: {
    isProcessing() {
      return this.$store.state.isProcessing;
    },
    visibleTemplates() {
      return this.templates.slice(0, this.visibleCount);
    },
    remainingCount() {
      return Math.max(0, this.templates.length - this.visibleCount);
    },
  },
  mounted() {
    this.fetchTemplates();
  },
  methods: {
    async fetchTemplates() {
      try {
        const res = await this.axios.get("/api/templates");
        this.templates = res.data.map((t) => ({
          ...t,
          gradient: this.randomGradient(),
          usedTotal: 400 + (t.used_count || 0),
        }));
      } catch (e) {
        console.error("Lỗi load templates", e);
      } finally {
        this.loading = false;
      }
    },

    randomGradient() {
      const gradients = [
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      ];
      return gradients[Math.floor(Math.random() * gradients.length)];
    },

    preview(template) {
      // this.$router.push(`/demo/${template.slug}`)
      if (template.preview_url) {
        window.open(template.preview_url, "_blank");
      }
    },
    async choose(templateId) {
      if (this.loadingSpam || this.isProcessing) return;
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
    showMore() {
      // tăng thêm 6 mỗi lần, hoặc hiện toàn bộ nếu ít hơn
      this.visibleCount = Math.min(this.templates.length, this.visibleCount + 6);
    },
  },
};
</script>

<style scoped>
.templates__more {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}

.load-more-btn {
  padding: 12px 26px;
  border-radius: 999px;
  background: var(--gradient-primary);
  color: #fff;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;
  cursor: pointer;

  box-shadow: 0 10px 28px rgba(139, 47, 60, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25);

  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}

.load-more-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
  box-shadow: 0 14px 36px rgba(139, 47, 60, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.load-more-btn:active {
  transform: translateY(0);
  box-shadow: 0 8px 18px rgba(139, 47, 60, 0.28), inset 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Disabled */
.load-more-btn:disabled {
  background: var(--gradient-accent);
  color: var(--color-text-light);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}
</style>
