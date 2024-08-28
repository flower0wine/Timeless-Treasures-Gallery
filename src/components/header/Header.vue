<template>
  <div class="treasure-header">
    <div class="site-info">
      <a href="/">
        <div class="logo">
          <img src="@/assets/treasure.png" alt="" />
        </div>
      </a>
    </div>
    <div class="menu-btn">
      <MenuIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuIcon from "@/components/svg/MenuIcon.vue";
</script>

<style lang="scss" scoped>
.treasure-header {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.logo img {
  width: 30px;
  height: 30px;
}

:deep(.menu-btn) {
  svg {
    width: 24px;
    height: 24px;
    fill: #333;
  }
}
</style>
