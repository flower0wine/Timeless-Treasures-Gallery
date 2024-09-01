<template>
  <div class="treasure-box">
    <div class="container">
      <TreasureMenu :menus="MENU_DATA" :menu-visible="menuVisible" />
      <div class="treasure-content" :class="{ 'menu-close': !menuVisible }">
        <div class="treasure-header">
          <div class="site-info" v-if="menuVisible">
            <a href="/">
              <TreasureLogo />
            </a>
          </div>
          <div class="menu-btn" @click="handleMenuBtnClick">
            <MenuIcon />
          </div>
        </div>
        <div class="treasure-body">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/common.scss";
import MenuIcon from "@/components/svg/MenuIcon.vue";
import TreasureLogo from "@/components/TreasureLogo.vue";
import { ref } from "vue";
import { MENU_DATA } from "@/menu";
import TreasureMenu from "@/components/menu/TreasureMenu.vue";

const menuVisible = ref(true);

function handleMenuBtnClick() {
  menuVisible.value = !menuVisible.value;
}
</script>

<style lang="scss" scoped>
$menuCloseWidth: 55px;
$menuOpenWidth: 300px;
$treasureHeaderHeight: 60px;

.treasure-box {
  display: flex;
  min-height: 100vh;

  > .container {
    flex: 1;
    display: flex;
  }

  .treasure-content {
    margin-left: #{$menuOpenWidth};
    width: calc(100% - #{$menuOpenWidth});
    height: 100%;
    transition: margin-left 0.4s ease-in-out;

    &.menu-close {
      margin-left: #{$menuCloseWidth};
      width: calc(100% - #{$menuCloseWidth});
    }
  }

  :deep(.menu-list) {
    height: calc(100% - 60px);
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }
}

.treasure-content {
  .treasure-body {
    height: calc(100% - #{$treasureHeaderHeight});
    padding: 20px;
  }
}

.treasure-header {
  position: sticky;
  top: 0;
  z-index: 10;
  height: 60px;
  background-color: #fff;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;

  & > div:nth-child(n + 2) {
    margin-left: 20px;
  }
}

.menu-btn {
  svg {
    width: 24px;
    height: 24px;
    fill: #333;
  }
}
</style>
