<template>
  <div class="link-group">
    <h1 class="link-group-title" :id="props.groupItem.code">
      <span>{{ props.groupItem.title }}</span>
    </h1>
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

<style scoped lang="scss">
.link-group-title {
  margin-bottom: 20px;
  user-select: none;

  span {
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    white-space: nowrap;
    background-image: -webkit-linear-gradient(right, #e7cd02, #7407d3);
  }
}
</style>
