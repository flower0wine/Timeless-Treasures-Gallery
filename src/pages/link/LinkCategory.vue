<template>
  <div class="link-category">
    <div class="category-header">
      <div class="category-title" :id="props.categoryItem.code">
        <span class="category-icon">
          <Component :is="iconComponents[props.categoryItem.icon]" />
        </span>
        <span>{{ props.categoryItem.title }}</span>
      </div>
      <div class="tab-bar-container">
        <TabBar
          :active-index="activeIndex"
          :list="props.categoryItem.children"
          @change="handleTabBarChange"
        >
          <template #default="{ item }">
            {{ item.title }}
          </template>
        </TabBar>
        <div class="more">查看更多>></div>
      </div>
    </div>

    <div class="site-links" v-if="siteLinks">
      <Tooltip
        :content="siteItem.desc"
        v-for="siteItem in siteLinks"
        :key="siteItem.code"
      >
        <template #default="{ onMouseenter, onMouseleave, setRef }">
          <Link
            class="site-link-container"
            :url="siteItem.url"
            :ref="setRef"
            @mouseenter="onMouseenter"
            @mouseleave="onMouseleave"
          >
            <LinkBox
              class="site-link-box"
              :icon-url="getPictureUrl(siteItem.icon)"
              :title="siteItem.title"
              :desc="siteItem.desc"
            />
          </Link>
        </template>
      </Tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import Link from "@/components/link/Link.vue";
import LinkBox from "@/components/link/LinkBox.vue";
import { getPictureUrl } from "@/utils/tools";
import { ILinkItem } from "@/data/link.ts";
import icons from "@/data/svg";
import { computed, PropType, ref, shallowRef, watch } from "vue";
import Tooltip from "@/components/tooltip/Tooltip.vue";
import TabBar from "@/components/tab/TabBar.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  categoryItem: {
    type: Object as PropType<ILinkItem>,
    required: true,
  },
});

const activeIndex = ref<number>(0);

const siteLinks = computed(() => {
  return props.categoryItem.children?.[activeIndex.value].children;
});

const iconComponents = shallowRef(icons);

watch(
  () => route.query.code,
  (newCode) => {
    const children = props.categoryItem.children;
    if (children) {
      const index = children.findIndex((item) => item.code === newCode);

      if (index >= 0) {
        activeIndex.value = index;
      }
    }
  },
);

function handleTabBarChange(newIndex: number) {
  activeIndex.value = newIndex;
}
</script>

<style scoped lang="scss">
.tab-bar-container {
  display: flex;
  justify-content: space-between;
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

.category-header {
  .category-title {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 50px;
    margin-bottom: 20px;
    color: #fff;
    background-color: #da4545;

    .category-icon {
      :deep(svg) {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        fill: #fff;
        vertical-align: -4px;
      }
    }
  }

  .more {
    font-size: 14px;
    color: #999;
    cursor: pointer;

    &:hover {
      color: #da4545;
    }
  }
}

.site-links {
  margin: 20px 0;
}
</style>
