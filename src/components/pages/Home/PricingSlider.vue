<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { defineComponent } from "vue";
import PricingCard from "./PricingCard.vue";
import RecommendedPricingCard from "./RecommendedPricingCard.vue";

export default defineComponent({
  name: "Pricing Slider",
  components: {
    Carousel,
    Slide,
    Pagination,
    PricingCard,
    RecommendedPricingCard,
  },
  data: () => ({
    breakpoints: {
      // 700px and up
      850: {
        itemsToShow: 1.5,
        snapAlign: "center",
      },
      // 1152 and up
      1152: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      1500: {
        itemsToShow: 2.5,
        snapAlign: "center",
      },
      1720: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
  }),
});
</script>

<template>
  <carousel :items-to-show="1" :breakpoints="breakpoints">
    <slide key="1"> <PricingCard type="Free" cost="$0" /> </slide>
    <slide key="2">
      <RecommendedPricingCard type="Personal" cost="$11.99"
    /></slide>
    <slide key="3"> <PricingCard type="Organization" cost="$49.99" /> </slide>

    <template #addons>
      <pagination class="xl:hidden mt-16" />
    </template>
  </carousel>
</template>
