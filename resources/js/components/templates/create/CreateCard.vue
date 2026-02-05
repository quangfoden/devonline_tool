<template>
  <div class="create-page" v-if="template">
    <div class="editor">
      <FormRenderer
        :schema="template.schema"
        v-model="formData"
      />
    </div>

    <div class="preview">
      <component
        :is="template.view"
        :template="template"
        :data="formData"
      />
    </div>
  </div>
</template>
<script>
import FormRenderer from '@components/templates/form/FormRenderer.vue'

import BirthdayMinimal from '@components/templates/BirthdayMinimal.vue'
import WeddingElegant from '@components/templates/WeddingElegant.vue'

export default {
  components: {
    FormRenderer,
    BirthdayMinimal,
    WeddingElegant
  },
  data() {
    return {
      template: null,
      formData: {}
    }
  },
  mounted() {
    axios.get(`/api/template/${this.$route.params.slug}/create`)
      .then(res => {
        this.template = res.data.template
        this.formData = { ...res.data.preview_data }
      })
  }
}
</script>
