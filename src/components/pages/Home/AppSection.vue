<script lang="ts" setup>
import PrimaryButton from "../../layout/PrimaryButton.vue";
import AppsImage from "../../../assets/images/apps.png";
</script>

<template>
  <section id="app" class="pl-[8vw] pr-[8vw] p-[140px] bg-darkBlue app-bg">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-[100px] gap-x-[98px] justify-items-center lg:justify-items-start items-center"
    >
      <img :src="AppsImage" alt="Apps" />
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-[49px] lg:pb-[49px]"
      >
        <h2
          class="font-bold lg:text-[72px] md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px] text-white"
        >
          Work with Your Favorite Apps Using whitepace
        </h2>
        <p class="leading-[30px] mt-6 mb-[60px] text-white">
          Whitepace teams up with your favorite software. Integrate with over
          1000+ apps with Zapier to have all the tools you need for your project
          success.
        </p>
        <PrimaryButton text="Read more" />
      </div>
    </div>
  </section>
</template>
