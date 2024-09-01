<template>
  <div class="menu-item" @click="throttleHandleMenuClick">
    <slot name="icon"></slot>

    <slot name="content" v-if="props.contentVisible">
      <div class="menu-item-title">{{ props.title }}</div>
    </slot>

    <slot name="action" v-if="props.closeIconVisible">
      <div class="menu-item-action">
        <DownIcon class="down-icon" :class="{ open: menuOpen }" />
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import DownIcon from "@/components/svg/DownIcon.vue";
import { ref, watch } from "vue";
import { throttle } from "lodash";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  closeIconVisible: {
    type: Boolean,
    default: true,
  },
  contentVisible: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(["menu-click"]);

const menuOpen = ref(false);

const throttleHandleMenuClick = throttle(handleMenuClick, 300);

watch(
  () => props.closeIconVisible,
  () => {
    if (props.closeIconVisible) {
      menuOpen.value = false;
    }
  },
);

function handleMenuClick(event: MouseEvent) {
  menuOpen.value = !menuOpen.value;
  emits("menu-click", event);
}
</script>

<style scoped lang="scss">
.menu-item {
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  justify-items: center;
  align-items: center;
  height: 50px;
}

.menu-item-action {
  .down-icon {
    width: 20px;
    height: 20px;
    vertical-align: -3px;
    transition: transform 0.3s ease-in-out;

    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>
