<template>
  <transition name="fade-slide">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top"
      title="Lên đầu trang"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  name: "ScrollToTopButton",
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    },
    scrollToTop() {
      const start = window.scrollY;
      const duration = 800;
      const startTime = performance.now();

      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const animate = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        window.scrollTo(0, start * (1 - eased));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  background: linear-gradient(135deg, #ff8fb1, #ff5d8f);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 10px 25px rgba(255, 93, 143, 0.35);
  z-index: 999;

  transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
}

.scroll-to-top:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 14px 30px rgba(255, 93, 143, 0.45);
}

.scroll-to-top:active {
  transform: translateY(-2px) scale(0.98);
}

/* Animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

@media (max-width: 768px) {
  .scroll-to-top {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
  }
}
</style>
