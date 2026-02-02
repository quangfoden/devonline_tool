<script>
export default {
  name: 'ScrollToTopButton',
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    },
    scrollToTop() {
      const start = window.scrollY;
      const duration = 1000; // 1 giây
      const startTime = performance.now();

      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const scroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeOutCubic(progress);
        
        window.scrollTo(0, start - start * ease);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  }
};
</script>

<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top"
      title="Lên đầu trang"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
  z-index: 999;
}

.scroll-to-top:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

.scroll-to-top:active {
  transform: translateY(-1px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
