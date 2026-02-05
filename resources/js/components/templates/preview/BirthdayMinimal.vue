<template>
    <div class="card-preview">
        <h1 class="card-title">{{ data.title }}</h1>

        <p class="card-message">
            {{ data.message }}
        </p>

        <div v-if="data.images && data.images.length" class="card-images">
            <img v-for="(img, i) in data.images" :key="i" :src="img" />
        </div>

        <audio v-if="data.music" controls :src="data.music"></audio>
    </div>
</template>


<script>
export default {
    props: {
        template: Object,
        data: Object
    },
    mounted() {
        setTimeout(() => {
            console.log("Rendering template:", this.template.slug, "with data:", this.data);

        }, 1000);
    }
};
</script>
