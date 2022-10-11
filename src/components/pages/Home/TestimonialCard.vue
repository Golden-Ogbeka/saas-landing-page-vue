<script lang="ts" setup>
import StarIcon from "../../../assets/icons/star.png";
defineProps<{
  testimony: {
    image: string;
    comment: string;
    id: number;
    rating: number;
    name: string;
    role: string;
  };
  active: boolean;
}>();
</script>

<template>
  <div
    :class="
      active
        ? ' bg-white pt-[60px] pb-[60px] pl-10 pr-[82px] rounded-[10px] flex flex-col items-start max-w-[472px] mb-10 duration-200'
        : ' bg-primary pt-[60px] pb-[60px] pl-10 pr-[82px] rounded-[10px] flex flex-col items-start max-w-[472px] mb-10 text-white duration-200'
    "
    style="box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.08)"
  >
    <img :src="testimony.image" :alt="testimony.name" />
    <p class="text-lg text-left mt-[35px]">"{{ testimony.comment }}"</p>
    <div
      class="mt-[49px] flex flex-row items-start mb-1 justify-between w-full"
    >
      <span class="font-bold">{{ testimony.name }}</span>
      <div class="flex flex-row gap-[7px]">
        <img
          :src="StarIcon"
          alt=""
          v-for="(rating, index) in testimony.rating"
          :key="index"
        />
      </div>
    </div>
    <span>Founder, XYZ Company</span>
  </div>
</template>
