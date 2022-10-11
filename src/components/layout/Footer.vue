<script lang="ts" setup>
import Logo from "../../assets/brand/logo-alt.png";
import PrimaryButton from "./PrimaryButton.vue";
import WorldIcon from "../../assets/icons/world.png";
import ChevronDownIcon from "../../assets/icons/chevron-down-white.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import TwitterIcon from "../../assets/icons/twitter.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
</script>

<template>
  <footer class="pl-[8vw] pr-[8vw] pb-8 pt-[140px] bg-darkBlue">
    <div
      class="grid lg:grid-flow-col gap-[100px] lg:gap-[60px] justify-items-center lg:justify-items-stretch"
    >
      <div
        class="flex flex-col gap-[15px] text-[#F7F7EE] items-center text-center lg:items-start lg:text-left"
      >
        <div>
          <img :src="Logo" alt="Logo" />
        </div>
        <p class="lg:max-w-[240px] text-lg">
          whitepace was created for the new ways we live and work. We make a
          better workspace around the world
        </p>
      </div>
      <div class="text-white text-center lg:text-left">
        <h6 class="font-bold text-lg mb-[15px]">Product</h6>
        <ul class="gap-[15px] flex flex-col">
          <li>
            <a href="#hero">Overview</a>
          </li>
          <li>
            <a href="#hero">Pricing</a>
          </li>
          <li>
            <a href="#hero">Customer stories</a>
          </li>
        </ul>
      </div>
      <div class="text-white text-center lg:text-left">
        <h6 class="font-bold text-lg mb-[15px]">Resources</h6>
        <ul class="gap-[15px] flex flex-col">
          <li>
            <a href="#hero">Blog</a>
          </li>
          <li>
            <a href="#hero">Guides &amp; tutorials</a>
          </li>
          <li>
            <a href="#hero">Help center</a>
          </li>
        </ul>
      </div>
      <div class="text-white text-center lg:text-left">
        <h6 class="font-bold text-lg mb-[15px]">Company</h6>
        <ul class="gap-[15px] flex flex-col">
          <li>
            <a href="#hero">About us</a>
          </li>
          <li>
            <a href="#hero">Careers</a>
          </li>
          <li>
            <a href="#hero">Media kit</a>
          </li>
        </ul>
      </div>
      <div
        class="text-white items-center text-center lg:items-start lg:text-left flex flex-col gap-[23px]"
      >
        <h6 class="font-bold text-[28px]">Try It Today</h6>
        <p class="lg:max-w-[259px] max-w-[201px]">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <PrimaryButton text="Start today" />
      </div>
    </div>
    <hr
      className="mt-[67.07px] mb-[32.93px] border-none bg-[#2E4E73] h-[1px] hidden lg:block"
    />
    <div
      class="flex flex-row items-center lg:justify-between flex-wrap justify-center text-white"
    >
      <div
        class="flex md:flex-row justify-center md:justify-between lg:justify-start lg:gap-[60px] w-full lg:w-auto mt-[100px] lg:mt-0 flex-wrap lg:flex-nowrap gap-5 flex-col items-center"
      >
        <aside class="flex items-center gap-[6px] flex-row cursor-pointer">
          <img :src="WorldIcon" alt="World" />
          <span>English</span>
          <img :src="ChevronDownIcon" alt="Arrow" />
        </aside>
        <a href="#"> Terms &amp; privacy </a>
        <a href="#"> Security </a>
        <a href="#"> Status </a>
        <span> ©2021 Whitepace LLC. </span>
      </div>
      <hr
        className="mt-5 mb-5 border-none bg-[#2E4E73] h-[1px] lg:hidden w-full"
      />
      <div class="flex items-center gap-8">
        <a href="#">
          <img :src="FacebookIcon" alt="Facebook" />
        </a>
        <a href="#">
          <img :src="TwitterIcon" alt="Twitter" />
        </a>
        <a href="#">
          <img :src="LinkedinIcon" alt="Linkedin" />
        </a>
      </div>
    </div>
  </footer>
</template>
