<template>
  <div class="entry-link">
    <a
      class="link-item"
      :href="item.url"
      v-for="(item, index) in props.entryLinks"
      :key="index"
      target="_blank"
    >
      <TreasureImg :src="item.icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import TreasureImg from "@/components/TreasureImg.vue";
import { PropType } from "vue";

interface EntryLink {
  icon: string;
  url: string;
}

const props = defineProps({
  entryLinks: {
    type: Array as PropType<EntryLink[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>
