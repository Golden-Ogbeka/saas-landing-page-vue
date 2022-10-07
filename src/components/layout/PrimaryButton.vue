<script lang="ts" setup>
import ArrowRight from "../../assets/icons/arrow-right.png";

defineProps<{
  text: string;
  style?: {};
}>();
</script>

<template>
  <button
    :style="style"
    class="bg-primary w-[227px] h-[60px] rounded-lg duration-150 hover:drop-shadow-lg font-medium text-white flex flex-row items-center gap-[10px] justify-center"
  >
    {{ text }}
    <img :src="ArrowRight" alt="" />
  </button>
</template>
