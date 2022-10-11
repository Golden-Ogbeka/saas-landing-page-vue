<script lang="ts" setup>
import Placeholder from "../../layout/Placeholder.vue";
import PrimaryButton from "../../layout/PrimaryButton.vue";
import TextBg from "../../layout/TextBg.vue";
import WorkTogetherImage from "../../../assets/images/work-together.png";
</script>

<template>
  <div class="pl-[8vw] pr-[8vw] pb-[140px] project-bg">
    <section id="products" class="pt-[140px]">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-y-[100px] gap-x-[60px] justify-items-center lg:justify-items-start"
      >
        <div
          class="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-[68px] lg:pb-[68px]"
        >
          <h2
            class="font-bold lg:text-[72px] md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px]"
          >
            Project <span class="relative">Management <TextBg /></span>
          </h2>
          <p class="leading-[30px] mt-6 mb-[60px]">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <PrimaryButton text="Get Started" />
        </div>
        <Placeholder width="748px" height="547px" />
      </div>
    </section>
    <section id="solutions" class="pt-[100px]">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-y-[100px] gap-x-[100px] justify-items-center lg:justify-items-start"
      >
        <img
          :src="WorkTogetherImage"
          alt="Work Together"
          class="row-start-2 lg:row-auto"
        />
        <div
          class="flex flex-col items-center justify-center lg:items-start text-center lg:text-left"
        >
          <h2
            class="font-bold lg:text-[72px] md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px]"
          >
            Work
            <span class="relative"
              >together<TextBg :style="{ bottom: '4px' }"
            /></span>
          </h2>
          <p class="leading-[30px] mt-6 mb-[60px]">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <PrimaryButton text="Try it now" />
        </div>
      </div>
    </section>
  </div>
</template>
