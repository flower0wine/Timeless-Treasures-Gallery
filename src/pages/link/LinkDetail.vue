<template>
  <div class="site-detail">
    <div class="line-one">
      <div class="site-icon">
        <TreasureImg size="150px" :src="props.site.icon" />
      </div>
      <div class="site-info">
        <div class="site-name">{{ props.site.name }}</div>
        <div class="site-desc">{{ props.site.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TreasureImg from "@/components/TreasureImg.vue";

const props = defineProps({
  site: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.site-detail {
  padding: 15px 25px;
  border-radius: 6px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  background: -webkit-linear-gradient(top, #ffffff, #f5f5f5);

  .line-one {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    .site-icon {
      flex-shrink: 0;
    }
  }
}

.site-info {
  flex-shrink: 0;
  max-width: 200px;

  .site-name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .site-desc {
    color: #666;
  }
}

:deep(.site-icon) {
  img {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.4));
  }
}
</style>
