<template>
  <div class="field">
    <label>{{ field.label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'field']
}
</script>
