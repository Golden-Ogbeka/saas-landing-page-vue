<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { defineComponent } from "vue";
import TestimonialCard from "./TestimonialCard.vue";
import testimonies from "./testimonies";
import ArrowLeft from "../../../assets/icons/arrow-left-blue.png";
import ArrowRight from "../../../assets/icons/arrow-right-blue.png";

export default defineComponent({
  name: "Testimonial Slider",
  components: {
    Carousel,
    Slide,
    Pagination,
    TestimonialCard,
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
    testimonies,
    currentSlide: 0,
    ArrowLeft,
    ArrowRight,
  }),
  methods: {
    next() {
      this.currentSlide = this.currentSlide + 1;
    },
    prev() {
      this.currentSlide = this.currentSlide - 1;
    },
  },
});
</script>

<template>
  <carousel
    :items-to-show="1"
    :breakpoints="breakpoints"
    v-model="currentSlide"
    ref="carousel"
    :wrap-around="true"
  >
    <template #slides="{ currentSlide }">
      <slide v-for="testimony in testimonies" :key="testimony.id">
        <TestimonialCard
          :testimony="testimony"
          :active="currentSlide === testimony.id - 1"
        />
      </slide>
    </template>

    <template #addons>
      <pagination class="mt-16 lg:hidden" />
    </template>
  </carousel>
  <div class="justify-center items-center gap-[100px] mt-5 hidden lg:flex">
    <button
      @click="prev"
      class="w-[75px] h-[75px] flex justify-center items-center bg-[#E6F1FE] rounded-full"
      style="box-shadow: 0px 4px 50px -15px rgba(0, 0, 0, 0.15)"
    >
      <img :src="ArrowLeft" alt="Previous" />
    </button>
    <button
      @click="next"
      class="w-[75px] h-[75px] flex justify-center items-center bg-[#E6F1FE] rounded-full"
      style="box-shadow: 0px 4px 50px -15px rgba(0, 0, 0, 0.15)"
    >
      <img :src="ArrowRight" alt="Next" />
    </button>
  </div>
</template>
