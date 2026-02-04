<template>
  <TopBar />
  <HeroSectione id="home" class="gsap-fade-up" />
  <AboutSection id="about" class="gsap-fade-left" />
  <TemPlateSection id="templates" class="gsap-fade-right" />
  <StatsSection class="gsap-zoom" />
  <ReviewSection id="reviews" class="gsap-fade-up" />
  <CtaSection class="gsap-zoom" />
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
    return {
    }
  },

};
</script>
