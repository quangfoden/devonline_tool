<template>
  <TopBar @go="scrollTo" />

  <HeroSectione ref="home" data-section="home" />
  <AboutSection ref="about" data-section="about" />
  <TemPlateSection id="templates" ref="templates" data-section="templates" />
  <ReviewSection ref="reviews" data-section="reviews" />

  <CtaSection />
  <FooterSection2 />
</template>
<script>
import TopBar from "@components/home/partials/TopBar.vue";
import HeroSectione from "@components/home/sections/home/HeroSectione.vue";
import AboutSection from "@components/home/sections/home/AboutSection.vue";
import TemPlateSection from "@components/home/sections/home/TemPlateSection.vue";
import StatsSection from "@components/home/sections/home/StatsSection.vue";
import ReviewSection from "@components/home/sections/home/ReviewSection.vue";
import CtaSection from "@components/home/sections/home/CtaSection.vue";
import FooterSection2 from "@components/home/sections/FooterSection2.vue";

export default {
  components: {
    TopBar,
    HeroSectione,
    AboutSection,
    TemPlateSection,
    StatsSection,
    ReviewSection,
    CtaSection,
    FooterSection2,
  },

  data() {
    return {};
  },
  methods: {
    scrollTo(section) {
      const target = this.$refs[section];
      if (!target) return;

      target.$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>
