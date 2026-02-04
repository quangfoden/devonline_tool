<script>
import ScrollToTopButton from '@components/home/sections/ScrollToTopButton.vue';
import { initScrollAnimations } from "@/utils/scrollAnimations.js";

export default {
  components: {
    ScrollToTopButton
  },

  mounted() {
    initScrollAnimations();
  }
}
</script>
<template>
  <router-view></router-view>
  <ScrollToTopButton />
</template>
