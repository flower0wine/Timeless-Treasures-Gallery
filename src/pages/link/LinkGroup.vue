<template>
  <div class="link-group">
    <div
      class="link-group-item"
      v-for="(item, index) in props.groupItem.children"
      :key="index"
    >
      <LinkCategory :category-item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ILinkItem } from "@/data/link";
import LinkCategory from "@/pages/link/LinkCategory.vue";

const props = defineProps({
  groupItem: {
    type: Object as PropType<ILinkItem>,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>
