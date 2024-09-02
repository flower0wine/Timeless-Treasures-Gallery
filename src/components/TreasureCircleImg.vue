<template>
  <TreasureImg :class="{ circle: props.circle }" v-bind="props" />
</template>

<script setup lang="ts">
import TreasureImg from "@/components/TreasureImg.vue";

const props = defineProps({
  size: {
    type: String,
    default: "30px",
  },
  src: {
    type: String,
    default: "",
  },
  circle: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped lang="scss">
.circle {
  border-radius: 50%;
}
</style>
