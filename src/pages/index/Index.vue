<template>
  <div class="main-page">
    <div class="container">
      <header>
        <TreasureLogo class="logo" size="200px" />
        <h1 class="title">臻宝轩</h1>
      </header>
      <main>
        <p class="description">臻宝轩致力于打造一个万物皆可收藏的平台，可以将你收藏的任何东西导入到其中！</p>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TreasureLogo from '@/components/TreasureLogo.vue';
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'shangshouxiaosati';
  src: url('@/fonts/shangshouxiaosati.ttf') format('truetype');
}

.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: -webkit-linear-gradient(top, #43a6d4, #3633dd);

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  :deep(.logo) {
    filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.5));
  }

  .title {
    color: #fff;
  }

  main {
    margin-top: 20px;
  }

  .description {
    width: 250px;
    color: #f3f2f2;
  }
}

h1 {
  font-weight: normal;
  font-family: 'shangshouxiaosati', sans-serif;
}
</style>
