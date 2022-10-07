<script lang="ts" setup>
import CheckIcon from "../../../assets/icons/check-blue.png";
import PrimaryButton from "../../layout/PrimaryButton.vue";

defineProps<{
  type: string;
  cost: string;
}>();

const features: string[] = [
  "Sync unlimited devices",
  "10 GB monthly uploads",
  "200 MB max. note size",
  "Customize Home dashboard and access extra widgets",
  "Connect primary Google Calendar account",
  "Add due dates, reminders, and notifications to your tasks",
];
</script>

<template>
  <div
    class="pt-20 pb-20 pl-11 pr-11 rounded-[10px] flex flex-col items-start max-w-[472.33px] text-darkBlue mb-10 mt-10"
    style="box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.08)"
  >
    <p class="font-semibold text-2xl mb-[25px]">{{ type }}</p>
    <p class="font-bold text-4xl mb-[25px]">{{ cost }}</p>
    <p class="font-medium text-lg mb-[25px] text-left">
      Keep home and family on track
    </p>
    <ul class="flex flex-col gap-7">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex flex-row items-center gap-[19px] text-left"
      >
        <img :src="CheckIcon" alt="" />
        {{ feature }}
      </li>
    </ul>
    <PrimaryButton
      text="Get Started"
      :showIcon="false"
      class="w-[166px] mt-[25px]"
    />
  </div>
</template>
