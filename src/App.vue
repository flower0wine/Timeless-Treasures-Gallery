<template>
  <div class="treasure-box">
    <div class="container">
      <Menu :class="{ close: !menuVisible }">
        <template #header>
          <div class="menu-header">
            <Transition name="fade">
              <div class="img-header" v-if="menuVisible">
                <img
                  class="header-border"
                  src="@/assets/menu-border.png"
                  alt=""
                />
                <div class="header-title">臻宝轩</div>
              </div>
              <TreasureLogo v-else />
            </Transition>
          </div>
        </template>
        <div class="menu-list">
          <template v-for="(item, index) in MENU_ORIGIN" :key="index">
            <MenuItem
              :content-visible="menuVisible"
              :close-icon-visible="menuVisible && Boolean(item.children)"
              @menu-click="
                menuItemVisibleList[index] = !menuItemVisibleList[index]
              "
            >
              <template #icon>
                <img
                  :src="getMenuIconPath(item.icon)"
                  class="menu-icon"
                  alt=""
                />
              </template>
              <template #content>
                <div class="menu-title">{{ item.title }}</div>
              </template>
            </MenuItem>
            <MenuContent
              v-if="item.children"
              :visible="menuItemVisibleList[index]"
            >
              13
            </MenuContent>
          </template>
        </div>
      </Menu>
      <div class="treasure-header">
        <div class="site-info" v-if="menuVisible">
          <a href="/">
            <TreasureLogo />
          </a>
        </div>
        <div class="menu-btn" @click="menuVisible = !menuVisible">
          <MenuIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/common.scss";
import Menu from "@/components/menu/Menu.vue";
import MenuIcon from "@/components/svg/MenuIcon.vue";
import TreasureLogo from "@/components/TreasureLogo.vue";
import { ref } from "vue";
import MenuItem from "@/components/menu/MenuItem.vue";
import MenuContent from "@/components/menu/MenuContent.vue";
import { MENU_ORIGIN } from "@/menu";

const menuVisible = ref(true);
const menuItemVisibleList = ref(Array(MENU_ORIGIN.length).fill(false));

function getMenuIconPath(name: string) {
  return new URL(`./assets/${name}`, import.meta.url).href;
}
</script>

<style lang="scss" scoped>
.treasure-box {
  display: flex;
  min-height: 100vh;

  > .container {
    flex: 1;
    display: flex;
  }

  :deep(.menu) {
    z-index: 1;
    flex-shrink: 0;
    transition: width 0.4s ease-in-out;

    &.close {
      width: 55px;
    }
  }

  :deep(.treasure-header) {
    flex-grow: 1;
  }

  .menu-list {
    height: 100%;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
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

.treasure-header {
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

.menu-icon {
  width: 35px;
  height: 35px;
}

.menu-title {
  font-size: 18px;
  justify-self: left;
  margin-left: 10px;
  color: #484848;
  white-space: nowrap;
}

.menu-list {
  user-select: none;

  :deep(.menu-item) {
    overflow: hidden;

    &:hover {
      background-color: #f5f5f5;
    }

    .down-icon {
      fill: #878787;
    }
  }
}
</style>
