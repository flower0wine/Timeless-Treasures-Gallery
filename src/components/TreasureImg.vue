<template>
  <img
    class="lazyload"
    :class="{ circle: props.circle }"
    src="@/assets/treasure.png"
    :style="{ width: props.size, height: props.size }"
    :data-src="getPictureUrl(props.src)"
    alt
  />
</template>

<script setup lang="ts">
import { getPictureUrl } from "@/utils/tools";

const props = defineProps({
  size: {
    type: String,
    default: "30px",
  },
  src: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss"></style>
