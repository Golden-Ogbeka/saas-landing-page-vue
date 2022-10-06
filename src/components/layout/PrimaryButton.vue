<script lang="ts" setup>
defineProps<{
  text: string;
  style?: {};
}>();
</script>

<template>
  <button
    :style="style"
    class="bg-primary w-[227px] h-[60px] rounded-lg duration-150 hover:drop-shadow-md font-medium text-white"
  >
    {{ text }}
  </button>
</template>
