<script setup lang="ts">
import Placeholder from "../../layout/Placeholder.vue";
import PrimaryButton from "../../layout/PrimaryButton.vue";
</script>

<template>
  <section class="pl-[8vw] pr-[8vw] p-[140px] hero-bg" id="hero">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-[100px] gap-x-2 justify-items-center lg:justify-items-start"
    >
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-[94px] lg:pb-[94px]"
      >
        <h1
          class="text-blue font-bold md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px]"
        >
          Get More Done with whitepace
        </h1>
        <p class="text-blue leading-[30px] mt-6 mb-[60px]">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <PrimaryButton text="Try Whitepace free" />
      </div>
      <Placeholder width="824px" height="549px" />
    </div>
  </section>
</template>
