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
            <div :id="item.code">{{ item.title }}</div>
          </template>
        </TabBar>
        <div class="more">查看更多>></div>
      </div>
    </div>

    <div class="site-links" v-if="siteLinks">
      <!--detail 属性为 true，将使用自定义组件来展示网站信息-->
      <Tooltip
        v-bind="getTooltipOption(siteItem.detail)"
        :content="siteItem.desc"
        v-for="siteItem in siteLinks"
        :key="siteItem.code"
      >
        <template v-if="siteItem.detail" #content>
          <LinkDetail
            :site="{
              name: siteItem.title,
              src: siteItem.url,
              desc: siteItem.desc,
              icon: siteItem.icon,
            }"
          />
        </template>
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
              :icon-url="siteItem.icon"
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
import { LinkItem } from "@/data/link.ts";
import icons from "@/data/svg";
import { computed, ref, shallowRef, watch } from "vue";
import Tooltip from "@/components/tooltip/Tooltip.vue";
import TabBar from "@/components/tab/TabBar.vue";
import { useRoute } from "vue-router";
import LinkDetail from "@/pages/link/LinkDetail.vue";

const route = useRoute();

const props = defineProps<{
  categoryItem: LinkItem;
}>();

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

function getTooltipOption(useDetail: boolean) {
  if (useDetail) {
    return {
      tooltipClass: "",
      color: "",
      backgroundColor: "",
    };
  } else {
    return {
      tooltipClass: "link-tooltip",
      color: "#fff",
      backgroundColor: "#000",
    };
  }
}

function handleTabBarChange(newIndex: number) {
  activeIndex.value = newIndex;
}
</script>

<style lang="scss">
.link-tooltip {
  max-width: 300px;
  text-align: center;
  font-size: 14px;
}
</style>

<style scoped lang="scss">
.tab-bar-container {
  display: flex;
  justify-content: space-between;

  :deep(.tab-bar-item) {
    font-size: 14px;
  }
}

.site-link-container {
  border: 1px solid #ccc;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translate(-2px, -4px);
    background-color: #f5f5f5;
    box-shadow: 2px 2px 6px #ccc;
  }
}

.site-link-box {
  height: 100%;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}
</style>
