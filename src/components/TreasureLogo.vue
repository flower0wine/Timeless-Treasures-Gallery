<template>
  <div class="logo">
    <img
      class="lazyload"
      :style="{ width: props.size, height: props.size }"
      :data-src="getPictureUrl('/treasure.png')"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { getPictureUrl } from "@/utils/tools";

const props = defineProps({
  size: {
    type: String,
    default: "30px",
  },
});
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
}
</style>
