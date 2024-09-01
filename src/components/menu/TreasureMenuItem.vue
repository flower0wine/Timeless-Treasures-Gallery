<template>
  <RouterLink
    :to="{
      name: props.menuItem.route,
    }"
  >
    <MenuItem
      :content-visible="props.menuVisible"
      :close-icon-visible="
        props.menuVisible && Boolean(props.menuItem.children)
      "
      @click="handleCategoryItemClick(props.menuItem.code)"
      @menu-click="handleMenuItemClick"
    >
      <template v-if="props.menuItem.icon" #icon>
        <TreasureCircleImg
          size="35px"
          :src="getPictureUrl(props.menuItem.icon)"
        />
      </template>
      <template #content>
        <div class="menu-title">{{ props.menuItem.title }}</div>
      </template>
    </MenuItem>

    <MenuContent v-if="props.menuItem.children" :visible="menuContentVisible">
      <TreasureMenuItem
        v-for="(child, index) in props.menuItem.children"
        :key="index"
        :menu-item="child"
        :menu-index="index"
        :menu-visible="props.menuVisible"
        :layer="props.layer + 1"
        @menu-click="handleTreasureMenuItemClick"
        v-bind="$attrs"
      />
    </MenuContent>
  </RouterLink>
</template>

<script setup lang="ts">
import MenuItem from "@/components/menu/MenuItem.vue";
import { getPictureUrl } from "@/utils/tools";
import TreasureCircleImg from "@/components/TreasureCircleImg.vue";
import MenuContent from "@/components/menu/MenuContent.vue";
import { MenuLinkItem } from "@/menu";
import { type PropType, ref, watch } from "vue";

const props = defineProps({
  menuItem: {
    type: Object as PropType<MenuLinkItem>,
    required: true,
  },
  menuIndex: {
    type: Number,
    required: true,
  },
  menuVisible: {
    type: Boolean,
    required: true,
  },
  layer: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["menuClick"]);

const menuContentVisible = ref(false);

watch(
  () => props.menuVisible,
  (visible) => {
    if (!visible && props.menuItem.children) {
      menuContentVisible.value = false;
    }
  },
);

function handleMenuItemClick() {
  menuContentVisible.value = !menuContentVisible.value;

  handleTreasureMenuItemClick({
    index: [],
    item: [],
  });
}

function handleTreasureMenuItemClick({ index, item }) {
  emit("menuClick", {
    index: [props.menuIndex, ...index],
    item: [props.menuItem, ...item],
  });
}

function handleCategoryItemClick(code: string) {
  console.log("handleCategoryItemClick", code);
  const el = document.getElementById(code);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
</script>

<style scoped lang="scss">
.menu-title {
  font-size: 18px;
  justify-self: left;
  margin-left: 10px;
  color: #484848;
  white-space: nowrap;
}
</style>
