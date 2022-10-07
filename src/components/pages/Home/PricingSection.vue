<script lang="ts" setup>
import TextBg from "../../layout/TextBg.vue";
import PricingSlider from "./PricingSlider.vue";
</script>

<template>
  <section id="resources" class="pl-[8vw] pr-[8vw] p-[100px]">
    <div class="flex flex-col justify-center items-center">
      <h2
        class="font-bold lg:text-[72px] md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px] text-center"
      >
        Choose
        <span class="relative">
          Your Plan <TextBg :style="{ bottom: '4px' }"
        /></span>
      </h2>
      <p class="leading-[30px] mt-6 mb-[10px] text-center max-w-[979px]">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
    </div>
    <PricingSlider />
  </section>
</template>
