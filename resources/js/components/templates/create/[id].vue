<template>
  <div>
    <component
      v-if="createComponent"
      :is="createComponent"
      :schema="schema"
      v-model="formData"
    />

    <div v-else>
      Đang tải mẫu...
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      createComponent: null,
      schema: [],
      formData: {}
    }
  },

  async created() {
    const draftId = this.$route.params.id

    const res = await this.axios.get(`/api/cards/${draftId}`)

    this.schema = res.data.template.schema
    this.formData = res.data.card.data || {}

    const viewPath = res.data.template.view

    const module = await import(`@components/templates/create/${viewPath}.vue`)
    this.createComponent = module.default
  }
}
</script>
