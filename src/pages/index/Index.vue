<template>
  <div class="main-page">
    <div class="container">
      <header>
        <TreasureLogo class="logo" size="200px" />
        <h1 class="title">臻宝轩</h1>
      </header>
      <main>
        <div class="description">
          臻宝轩致力于打造一个万物皆可收藏的平台，可以将你收藏的任何东西导入到其中！
        </div>
        <EntryLink class="links" :entry-links="entryLinks" />
        <div class="star-card-list">
          <StarCard
            class="star-card-item"
            v-for="(star, index) in starList"
            :key="index"
            :title="star.title"
            :content="star.content"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TreasureLogo from "@/components/TreasureLogo.vue";
import EntryLink from "@/pages/index/EntryLink.vue";
import { entryLinks, starList } from "@/pages/index/config";
import StarCard from "@/pages/index/StarCard.vue";
</script>

<style scoped lang="scss">
@font-face {
  font-family: "shangshouxiaosati";
  src: url("@/fonts/shangshouxiaosati.ttf") format("truetype");
}

.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 30px;
  background-image: -webkit-linear-gradient(top, #e2b510, #d2bf0a);

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  :deep(.logo) {
    filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.5));
  }

  .title {
    color: #fff;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 20px;
  }

  .description {
    width: 250px;
    color: #fff;
  }

  .links {
    margin: 20px 0;

    :deep(.link-item) {
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translate(-2px, -2px);
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
      }
    }
  }

  .star-card-list {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, 250px);
    width: 100%;
    max-width: 810px;

    .star-card-item {
      cursor: default;

      :deep(header) {
        font-family: "shangshouxiaosati", sans-serif;
      }
    }
  }
}

h1 {
  font-weight: normal;
  font-family: "shangshouxiaosati", sans-serif;
}
</style>
