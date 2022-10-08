<script lang="ts" setup>
import Placeholder from "../../layout/Placeholder.vue";
import PrimaryButton from "../../layout/PrimaryButton.vue";
import TextBg from "../../layout/TextBg.vue";
</script>

<template>
  <section id="resources" class="pl-[8vw] pr-[8vw] p-[140px]">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-[100px] gap-x-[98px] justify-items-center lg:justify-items-start"
    >
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-[49px] lg:pb-[49px]"
      >
        <h2
          class="font-bold lg:text-[72px] md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px]"
        >
          Customize it to your
          <span class="relative"
            >needs<TextBg :style="{ bottom: '8px' }"
          /></span>
        </h2>
        <p class="leading-[30px] mt-6 mb-[60px]">
          Customize the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <PrimaryButton text="Let’s Go" />
      </div>
      <Placeholder width="686px" height="479px" />
    </div>
  </section>
</template>
