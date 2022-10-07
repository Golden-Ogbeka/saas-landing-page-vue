<script lang="ts" setup>
import ArrowRight from "../../assets/icons/arrow-right.png";

interface Props {
  text: string;
  showIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showIcon: true,
});
</script>

<template>
  <button
    class="bg-primary w-[227px] h-[60px] rounded-lg duration-150 hover:drop-shadow-lg font-medium text-white flex flex-row items-center gap-[10px] justify-center"
  >
    {{ props.text }}

    <img v-if="props.showIcon" :src="ArrowRight" alt="" />
  </button>
</template>
