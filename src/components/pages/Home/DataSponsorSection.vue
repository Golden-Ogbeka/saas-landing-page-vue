<script lang="ts" setup>
import PrimaryButton from "../../layout/PrimaryButton.vue";
import TextBg from "../../layout/TextBg.vue";
import DataImage from "../../../assets/images/data-image.png";
import AppleIcon from "../../../assets/images/sponsors/apple.png";
import GoogleIcon from "../../../assets/images/sponsors/google.png";
import MicrosoftIcon from "../../../assets/images/sponsors/microsoft.png";
import SlackIcon from "../../../assets/images/sponsors/slack.png";
</script>

<template>
  <div class="pl-[8vw] pr-[8vw]">
    <section id="data" class="pb-[140px] pt-[140px]">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-y-[100px] gap-x-[98px] justify-items-center lg:justify-items-start items-center"
      >
        <div
          class="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h2
            class="font-bold lg:text-[72px] md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px]"
          >
            100%
            <span class="relative">your data<TextBg /></span>
          </h2>
          <p class="leading-[30px] mt-6 mb-[60px]">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <PrimaryButton text="Read more" />
        </div>
        <img :src="DataImage" alt="Data" />
      </div>
    </section>
    <section id="sponsors" class="pb-[140px] pt-[140px]">
      <h3
        class="font-bold lg:text-[72px] md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px] text-center mb-[100px]"
      >
        Our
        <span class="relative">sponsors<TextBg /></span>
      </h3>
      <div
        class="grid lg:grid-flow-col gap-[100px] justify-items-center lg:justify-items-stretch items-center"
      >
        <div>
          <img :src="AppleIcon" alt="Apple" />
        </div>
        <div>
          <img :src="MicrosoftIcon" alt="Microsoft" />
        </div>
        <div>
          <img :src="SlackIcon" alt="Slack" />
        </div>
        <div>
          <img :src="GoogleIcon" alt="Google" />
        </div>
      </div>
    </section>
  </div>
</template>
