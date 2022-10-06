<script lang="ts" setup>
defineProps<{
  width: string;
  height: string;
}>();
</script>

<template>
  <div
    class="bg-lightBlue max-w-full max-h-[367px] md:max-h-full xl:min-w-full"
    :style="{ width, height }"
  />
</template>
