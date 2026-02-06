<!-- components/templates/birthday/index.vue -->
<template>
  <BaseCreate @reset="reset">
    <template #form>
      <BirthdayForm v-model="form" />
    </template>

    <template #preview>
      <BirthdayPreview :data="form" />
    </template>
  </BaseCreate>
</template>

<script>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
import BaseCreate from "@components/templates/create/base/BaseCreate.vue";
import BirthdayForm from "@components/templates/create/BirthdayMinimal/BirthdayForm.vue";
import BirthdayPreview from "@components/templates/create/BirthdayMinimal/BirthdayPreview.vue";
import { useAutosave } from "@components/templates/create/base/useAutosave";

export default {
  components: {
    BaseCreate,
    BirthdayForm,
    BirthdayPreview,
  },

  props: {
    modelValue: Object,
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const form = reactive({ ...props.modelValue });
    const route = useRoute();

    useAutosave(form, route.params.id);

    watch(form, (v) => emit("update:modelValue", v), { deep: true });

    function reset() {
      Object.keys(form).forEach((k) => (form[k] = ""));
    }

    return { form, reset };
  },
};
</script>
