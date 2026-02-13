<template>
  <nav class="navb" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container">
      <!-- LOGO -->
      <a href="javascript:void(0)" class="navbar__logo" @click="go('home')">
        <span class="navbar__logo-text">Devonline</span>
        <span class="navbar__logo-accent">Shop</span>
      </a>

      <!-- TOGGLE -->
      <button
        class="navbar__toggle"
        :class="{ 'navbar__toggle--active': mobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>

      <!-- MENU -->
      <ul class="navbar__menu" :class="{ 'navbar__menu--open': mobileMenuOpen }">
        <li v-for="(item, idex) in menu" :key="idex" class="navbar__item">
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
          <a href="javascript:void(0)" class="navbar__cta" @click="go('templates')">
           {{ $t('top_bar.cta.start_now') }}
          </a>
        </li>
      </ul>
      <div class="top_langs text-right">
        <div id="langSwitch">
          <div class="value" @click="toggleActiveLangOpts">
            <img :src="`/images/lang/${lang}.png`" :alt="lang" />
            <span>{{ lang }}</span>
            <i class="fa fa-chevron-down"></i>
          </div>
          <div class="options">
            <div
              class="item"
              v-for="(val, idx) in $config.languages"
              :key="idx"
              :data-value="val"
              :class="{ active: lang === val }"
              @click="setCurrentLang(val)"
            >
              <img :src="`/images/lang/${val}.png`" :alt="val" />
              <span>{{ val }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { i18n } from "../../../app";
import router from "@resources/js/router/index";

export default {
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false,
      activeSection: "home",
      generalSettings: {},
      lang: i18n.global.locale,
      // menu: [
      //   { id: "home", label: "Home" },
      //   { id: "about", label: "Cách hoạt động" },
      //   { id: "templates", label: "Tất cả mẫu" },
      //   { id: "reviews", label: "Reviews" },
      // ],
    };
  },
  computed: {
    menu() {
      return [
        { id: "home", label: this.$t("top_bar.menu_text.home") },
        { id: "about", label: this.$t("top_bar.menu_text.about") },
        { id: "templates", label: this.$t("top_bar.menu_text.templates") },
        { id: "reviews", label: this.$t("top_bar.menu_text.reviews") },
      ];
    },
  },
  created() {
    this.generalSettings = JSON.parse(localStorage.getItem("general"));
    this.setBodyClass();
    this.setHeader();
  },

  methods: {
    setBodyClass() {
      $("body").addClass("home");
    },

    toggleActiveLangOpts() {
      $("#langSwitch .value").toggleClass("active");
      $("#langSwitch .options").toggleClass("active");
    },

    setCurrentLang(val) {
      $("#langSwitch .value").toggleClass("active");
      $("#langSwitch .options").toggleClass("active");
      const me = this;
      this.$nextTick(() => {
        me.lang = val;
        localStorage.setItem("lang", me.lang);
        router.push({
          name: me.$route.name,
          params: {
            lang: me.lang,
          },
        });
        i18n.global.locale = me.lang;
        this.setHeader();
      });
    },

    setHeader() {
      $("title").text(this.generalSettings?.site_title?.split(`[:${this.lang}]`)[1]);
      $('link[rel="shortcut icon"]').attr("href", this.generalSettings?.favicon);
    },

    go(section) {
      this.$emit("go", section); // ⬅️ emit cho Home.vue
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
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
