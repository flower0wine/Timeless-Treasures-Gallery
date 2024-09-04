<template>
  <img
    v-if="visible"
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
import { nextTick, ref, watch } from "vue";

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

const visible = ref(true);

watch(
  () => props.src,
  () => {
    visible.value = false;
    nextTick(() => {
      visible.value = true;
    });
  },
);
</script>

<style scoped lang="scss"></style>
