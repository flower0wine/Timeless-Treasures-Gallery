<template>
  <div class="link-page">
    <div v-for="(categoryItem, categoryIndex) in linkData" :key="categoryIndex">
      <LinkGroup :group-item="categoryItem" />
    </div>
  </div>
</template>

<script setup lang="ts">
import linkData from "@/data/link.ts";
import LinkGroup from "@/pages/link/LinkGroup.vue";
</script>

<style scoped lang="scss">
.link-page {
  height: 1200px;
}
</style>
