<template>
  <div class="link-container">
    <a :href="props.url" target="_blank">
      <slot></slot>
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.link-container {
  display: inline-block;
}
</style>
