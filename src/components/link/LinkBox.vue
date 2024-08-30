<template>
  <div class="link-box">
    <slot name="link">
      <div class="link-content">
        <slot name="icon">
          <TreasureImg :src="props.iconUrl" />
        </slot>

        <div class="link-info">
          <slot name="title">
            <div class="link-title">{{ props.title }}</div>
          </slot>

          <slot name="desc">
            <div class="link-desc">{{ props.desc }}</div>
          </slot>
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import TreasureImg from "@/components/TreasureCircleImg.vue";

const props = defineProps({
  iconUrl: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.link-content {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;

  .link-info {
    flex: 1;
    overflow: hidden;
  }

  .link-title,
  .link-desc {
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .link-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  .link-desc {
    font-size: 14px;
    color: #666;
  }
}
</style>
