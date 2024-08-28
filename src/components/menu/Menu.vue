<template>
  <div class="menu">
    <slot name="header" />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.menu {
  width: 300px;
  height: 100%;
}
</style>
