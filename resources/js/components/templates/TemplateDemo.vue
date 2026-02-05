<template>
    <section class="demo">
        <div v-if="loading" class="demo__loading">
            Đang tải bản demo...
        </div>

        <div v-else-if="template">
            <!-- Preview -->
            <component v-if="template" :key="template.slug" :is="template.view" :template="template"
                :renderData="renderData" />

            <!-- Actions -->
            <div class="demo__actions">
                <button class="btn btn--outline" @click="goBack">
                    ← Quay lại
                </button>

                <button class="btn btn--primary" @click="chooseTemplate">
                    Chọn mẫu này
                </button>
            </div>
        </div>
    </section>
</template>
<script>
import BirthdayMinimal from '@components/templates/BirthdayMinimal.vue'
import WeddingElegant from '@components/templates/WeddingElegant.vue'
export default {
    components: {
        BirthdayMinimal,
        WeddingElegant
    },
    data() {
        return {
            template: null,
            renderData: null,
            loading: true
        };
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
            } catch (e) {
                console.error("Không tìm thấy template", e);
                this.$router.push("/");
            } finally {
                this.loading = false;
            }
        },

        chooseTemplate() {
            this.$router.push(`/create/${this.template.slug}`);
        },

        goBack() {
            this.$router.back();
        }
    }
};
</script>
