<template>
  <TopBar />
  <HeroSectione id="home" />
  <AboutSection id="about" />
  <TemPlateSection id="templates" />
  <ReviewSection id="reviews"/>
  <CtaSection/>
  <FooterSection2 />
</template>
<script>
import TopBar from "@components/home/partials/TopBar.vue";
import HeroSectione from "@components/home/sections/home/HeroSectione.vue";
import AboutSection from "@components/home/sections/home/AboutSection.vue";
import TemPlateSection from "@components/home/sections/home/TemPlateSection.vue";
import ReviewSection from "@components/home/sections/home/ReviewSection.vue";
import CtaSection from "@components/home/sections/home/CtaSection.vue";
import FooterSection2 from "@components/home/sections/FooterSection2.vue";

export default {
  components: {
    TopBar,
    HeroSectione,
    AboutSection,
    TemPlateSection,
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
