<template>
  <div class="base-create">
    <component
      v-if="createComponent"
      :is="createComponent"
      v-model="formData"
      :schema="schema"
      :template="template"
    />

    <div v-else class="loading">
      Đang tải mẫu...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createComponent: null,
      schema: null,
      template: null,
      formData: {}
    }
  },

  async created() {
    const draftId = this.$route.params.id

    const res = await this.axios.get(`/api/cards/${draftId}`)

    this.schema   = res.data.template.schema
    this.template = res.data.template
    this.formData = res.data.card.data || {}

    const viewPath = res.data.template.view

    const module = await import(
      `@components/templates/create/${viewPath}/index.vue`
    )

    this.createComponent = module.default
  }
}
</script>
