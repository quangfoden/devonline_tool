<template>
  <nav class="navb" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container">

      <!-- LOGO -->
      <a href="javascript:void(0)"
         class="navbar__logo"
         @click="go('home')">
        <span class="navbar__logo-text">Devonline</span>
        <span class="navbar__logo-accent">Shop</span>
      </a>

      <!-- TOGGLE -->
      <button
        class="navbar__toggle"
        :class="{ 'navbar__toggle--active': mobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <!-- MENU -->
      <ul class="navbar__menu" :class="{ 'navbar__menu--open': mobileMenuOpen }">
        <li v-for="item in menu" :key="item.id" class="navbar__item">
          <a
            href="javascript:void(0)"
            class="navbar__link"
            :class="{ 'navbar__link--active': activeSection === item.id }"
            @click="go(item.id)"
          >
            {{ item.label }}
          </a>
        </li>

        <!-- CTA -->
        <li class="navbar__item navbar__item--cta">
          <a href="javascript:void(0)"
             class="navbar__cta"
             @click="go('templates')">
            Bắt đầu ngay
          </a>
        </li>
      </ul>

    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false,
      activeSection: "home",
      menu: [
        { id: "home", label: "Home" },
        { id: "about", label: "Cách hoạt động" },
        { id: "templates", label: "Tất cả mẫu" },
        { id: "reviews", label: "Reviews" },
      ]
    };
  },

  methods: {
    go(section) {
      this.$emit("go", section);   // ⬅️ emit cho Home.vue
      this.closeMobileMenu();
    },

    handleScroll() {
      this.isScrolled = window.scrollY > 50;

      // active menu (không dùng id, dùng data-section)
      const sections = document.querySelectorAll("[data-section]");
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          this.activeSection = sec.dataset.section;
          break;
        }
      }
    },

    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },

    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
