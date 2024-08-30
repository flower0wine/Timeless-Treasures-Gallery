<template>
  <div class="link-page">
    <div v-for="(categoryItem, categoryIndex) in linkData" :key="categoryIndex">
      <div class="category-title">{{ categoryItem.name }}</div>
      <div>
        <Tooltip
          :content="siteItem.desc"
          v-for="(siteItem, siteIndex) in categoryItem.sites"
          :key="siteIndex"
        >
          <Link class="site-link-container" :url="siteItem.url">
            <LinkBox
              class="site-link-box"
              :icon-url="getPictureUrl(siteItem.icon)"
              :title="siteItem.name"
              :desc="siteItem.desc"
            />
          </Link>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Link from "@/components/link/Link.vue";
import LinkBox from "@/components/link/LinkBox.vue";
import { getPictureUrl } from "@/utils/tools";
import Tooltip from "@/components/tooltip/Tooltip.vue";
import linkData from "@/data/link.ts";
</script>

<style scoped lang="scss">
.link-page {
  height: 1200px;
}

.site-link-container {
  border: 1px solid #ccc;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #f5f5f5;
    box-shadow: 0 0 10px #ccc;
  }
}

.site-link-box {
  width: 200px;
  height: 70px;
}
</style>
