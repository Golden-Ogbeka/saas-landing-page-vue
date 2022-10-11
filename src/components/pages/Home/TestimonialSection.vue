<script lang="ts" setup>
import TextBg from "../../layout/TextBg.vue";
import TestimonialSlider from "./TestimonialSlider.vue";
</script>

<template>
  <section id="pricing" class="pl-[8vw] pr-[8vw] p-[100px]">
    <div class="flex flex-col justify-center items-center">
      <h2
        class="font-bold lg:text-[72px] md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px] text-center mb-[60px]"
      >
        See what our
        <span class="relative"> trusted <TextBg /></span>users Say
      </h2>
    </div>
    <TestimonialSlider />
  </section>
</template>
