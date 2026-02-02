<script>
import ScrollToTopButton from '@components/home/sections/ScrollToTopButton.vue';

export default {
  components: {
    ScrollToTopButton
  }
}
</script>
<template>
    <router-view></router-view>
    <ScrollToTopButton />
</template>
