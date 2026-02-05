<template>
    <div>
        <div v-for="field in schema" :key="field.key">
            <component :is="resolveField(field.type)" v-model="modelValue[field.key]" :field="field" />
        </div>
    </div>
</template>
<script>
import TextInput from '@components/fields/TextInput.vue'
// import TextareaInput from '@components/fields/TextareaInput.vue'
// import ImageInput from '@components/fields/ImageInput.vue'
// import MusicInput from '@components/fields/MusicInput.vue'

export default {
    props: {
        schema: Array,
        modelValue: Object
    },
    emits: ['update:modelValue'],
    components: {
        TextInput,
        // TextareaInput,
        // ImageInput,
        // MusicInput
    },
    methods: {
        resolveField(type) {
            return {
                text: 'TextInput',
                textarea: 'TextareaInput',
                images: 'ImageInput',
                music: 'MusicInput'
            }[type]
        }
    }
}
</script>
