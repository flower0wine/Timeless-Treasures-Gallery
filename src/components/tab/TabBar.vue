<template>
  <div class="tab-bar">
    <div
      class="tab-bar-item"
      :class="{ active: index === innerActiveIndex }"
      v-for="(item, index) in props.list"
      :key="index"
      @click="handleClickTabItem(index)"
      ref="tabItems"
    >
      <slot v-bind="{ item, index }"></slot>
    </div>
    <div class="tab-bar-bg" :style="tabBarBgStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  activeIndex: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["change"]);

const tabItems = ref<HTMLDivElement[]>([]);

const innerActiveIndex = ref(0);

const tabBarBgStyle = reactive({
  width: "",
  transform: "",
});

watch(
  () => props.activeIndex,
  (newVal: number) => {
    calculateTabBarBgStyle(newVal);
  },
);

function calculateTabBarBgStyle(index: number) {
  innerActiveIndex.value = index;
  const tabItem = tabItems.value[index];

  if (tabItem) {
    let left = 0;
    for (let i = 0; i < index; i++) {
      left += tabItems.value[i].offsetWidth;
    }

    const width = tabItem.offsetWidth;
    tabBarBgStyle.width = `${width}px`;
    tabBarBgStyle.transform = `translateX(${left}px)`;
  }
}

function emitChange(index: number) {
  const oldIndex = innerActiveIndex.value;
  innerActiveIndex.value = index;
  emits("change", index, oldIndex);
}

function handleClickTabItem(index: number = 0) {
  innerActiveIndex.value = index;

  calculateTabBarBgStyle(index);
  emitChange(index);
}

onMounted(() => {
  handleClickTabItem();
});
</script>

<style lang="scss" scoped>
.tab-bar {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 40px;
  padding: 3px;
  color: #333;
  background-color: #d2d2d2;
}

.tab-bar-item {
  position: relative;
  z-index: 1;
  padding: 5px 10px;
  border-radius: 40px;
  color: #919191;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #da4545;
  }

  &.active {
    color: #fff;
  }
}

.tab-bar-bg {
  position: absolute;
  top: 3px;
  left: 3px;
  height: calc(100% - 6px);
  border-radius: 40px;
  background-color: #da4545;
  transition: all 0.3s ease-in-out;
}
</style>
