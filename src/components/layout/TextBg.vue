<script lang="ts" setup>
import TextImage from "../../assets/images/text-bg.png";
import TextImageBlue from "../../assets/images/text-bg-blue.png";

interface Props {
  type?: "normal" | "alternate";
}

const props = withDefaults(defineProps<Props>(), {
  type: "normal",
});
</script>

<template>
  <img
    :src="props.type === 'normal' ? TextImage : TextImageBlue"
    alt=""
    class="absolute right-0 left-0 bottom-[-5px] z-[-1]"
  />
</template>
