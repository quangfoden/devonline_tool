<template>
  <section class="hero">
    <div class="hero__background">
      <div class="hero__gradient"></div>
      <div class="hero__pattern"></div>
    </div>

    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          <span
            class="hero__title-line"
            :class="{ 'hero__title-line--visible': animate }"
          >
            {{ $t("hero_sec.title_line_1") }}
          </span>

          <span
            class="hero__title-line hero__title-line--accent"
            :class="{ 'hero__title-line--visible': animate }"
          >
            {{ $t("hero_sec.title_line_2") }}
          </span>
        </h1>

        <p
          class="hero__description"
          :class="{ 'hero__description--visible': animate }"
        >
          {{ $t("hero_sec.description") }}
        </p>

        <div
          class="hero__actions"
          :class="{ 'hero__actions--visible': animate }"
        >
          <a href="#templates" class="hero__btn hero__btn--primary">
            {{ $t("hero_sec.btn_primary") }}
            <svg
              class="hero__btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a href="#templates" class="hero__btn hero__btn--secondary">
            {{ $t("hero_sec.btn_secondary") }}
          </a>
        </div>
      </div>

      <div
        class="hero__visual"
        :class="{ 'hero__visual--visible': animate }"
      >
        <div class="hero__card hero__card--1"></div>
        <div class="hero__card hero__card--2"></div>
        <div class="hero__card hero__card--3"></div>
      </div>
    </div>

    <div class="hero__scroll">
      <span class="hero__scroll-text">
        {{ $t("hero_sec.scroll_text") }}
      </span>
      <div class="hero__scroll-indicator"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animate: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.animate = true;
    }, 100);
  },
};
</script>
