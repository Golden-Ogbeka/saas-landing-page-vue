<script lang="ts" setup>
import TextBg from "../../layout/TextBg.vue";
import "../../../styles/background.css";
import PrimaryButton from "../../layout/PrimaryButton.vue";
</script>

<template>
  <section id="work-section" class="pl-[8vw] pr-[8vw] p-[100px] work-section">
    <div class="flex flex-col justify-center items-center">
      <h3
        class="font-bold lg:text-[72px] md:text-[64px] md:leading-[77px] text-4xl sm:text-[54px] text-center text-white"
      >
        Your work, everywhere
        <span class="relative z-10">
          you are
          <TextBg :style="{ bottom: 0, left: '-20px' }" type="alternate"
        /></span>
      </h3>
      <p
        class="leading-[30px] mt-6 mb-[60px] text-center max-w-[1064px] text-white"
      >
        Access your notes from your computer, phone or tablet by synchronizing
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </p>
      <PrimaryButton text="Try Taskey" />
    </div>
  </section>
</template>
