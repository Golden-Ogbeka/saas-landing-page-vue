<script lang="ts" setup>
import Logo from "../../assets/brand/logo.png";
import MenuIcon from "../../assets/icons/menu.png";
import { RouterLink } from "vue-router";
import PrimaryButton from "./PrimaryButton.vue";
import ChevronDown from "../../assets/icons/chevron-down.png";

const links: {
  label: string;
  href: string;
}[] = [
  {
    label: "Products",
    href: "#products",
  },
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Resources",
    href: "#resources",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];
</script>

<template>
  <nav class="pl-[8vw] pr-[8vw] p-4">
    <div class="flex flex-row items-center justify-between">
      <RouterLink to="/">
        <img :src="Logo" />
      </RouterLink>
      <div class="flex items-center flex-row flex-wrap">
        <ul
          class="items-center flex-row flex-wrap gap-8 pr-[75.5px] hidden xl:flex"
        >
          <li v-for="link in links" :key="link.label">
            <a
              :href="link.href"
              class="font-secondary font-medium text-blue hover:brightness-75 duration-150 flex flex-row items-center gap-[10px]"
            >
              {{ link.label }}
              <img :src="ChevronDown" alt="" />
            </a>
          </li>
        </ul>
        <button
          class="bg-secondary w-[126px] h-[60px] rounded-lg duration-150 hover:drop-shadow font-medium text-darkBlue hidden lg:block"
        >
          Login
        </button>
        <div class="ml-6 hidden lg:block">
          <PrimaryButton text="Try Whitepace free" />
        </div>

        <img :src="MenuIcon" alt="Menu" class="ml-5 xl:hidden" />
      </div>
    </div>
  </nav>
</template>
