<template>
  <div class="treasure-menu">
    <Menu :class="{ close: !props.menuVisible }">
      <template #header>
        <div class="menu-header">
          <Transition name="fade">
            <div class="img-header" v-if="props.menuVisible">
              <img
                class="header-border lazyload"
                :data-src="getPictureUrl('menu-border.png')"
                alt=""
              />
              <div class="header-title">臻宝轩</div>
            </div>
            <TreasureLogo v-else />
          </Transition>
        </div>
      </template>

      <div class="menu-list">
        <TreasureMenuItem
          v-for="(menuItem, menuIndex) in props.menus"
          :key="menuIndex"
          :menu-item="menuItem"
          :menu-index="menuIndex"
          :menu-visible="props.menuVisible"
          v-bind="$attrs"
          @menu-click="handleTreasureMenuItemClick"
        />
      </div>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/menu/Menu.vue";
import TreasureLogo from "@/components/TreasureLogo.vue";
import { MenuLinkItem } from "@/menu";
import { getPictureUrl } from "@/utils/tools";
import TreasureMenuItem from "@/components/menu/TreasureMenuItem.vue";

const props = defineProps<{
  menus: Array<MenuLinkItem>;
  menuVisible: boolean;
}>();

const emit = defineEmits(["menuClick"]);

function handleTreasureMenuItemClick({ index, item }) {
  emit("menuClick", { index, item });
}
</script>

<style scoped lang="scss">
$menuCloseWidth: 55px;
$menuOpenWidth: 300px;

.treasure-menu {
  user-select: none;

  :deep(.menu) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    flex-shrink: 0;
    width: #{$menuOpenWidth};
    transition: width 0.4s ease-in-out;
    background-color: #fff;

    &.close {
      width: #{$menuCloseWidth};
    }
  }

  :deep(.menu-item) {
    overflow: hidden;

    &:hover {
      background-color: #f5f5f5;
    }

    .down-icon {
      fill: #878787;
    }
  }

  .layer-two-menu-item {
    padding-left: 20px;
  }

  .category-item {
    padding: 10px 0 10px 40px;
    font-size: 16px;
    color: #333;
    cursor: pointer;
  }
}

.menu-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  user-select: none;

  .header-border {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
  }

  .header-title {
    font-size: 24px;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    letter-spacing: 5px;
    white-space: nowrap;
    background-image: -webkit-linear-gradient(right, #e7cd02, #7407d3);
  }
}

.fade-enter-active {
  transition: opacity 0.3s 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
