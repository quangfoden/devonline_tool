<template>
    <div class="card-preview">
        <h1 class="card-title">{{ renderData.title }}</h1>

        <p class="card-message">
            {{ renderData.message }}
        </p>

        <div v-if="renderData.images && renderData.images.length" class="card-images">
            <img v-for="(img, i) in renderData.images" :key="i" :src="img" />
        </div>

        <audio v-if="renderData.music" controls :src="renderData.music"></audio>
    </div>
</template>


<script>
export default {
    props: {
        template: Object,
        renderData: Object
    },
    mounted() {
        setTimeout(() => {
            console.log("Rendering template:", this.template.slug, "with data:", this.renderData);

        }, 1000);
    }
};
</script>
