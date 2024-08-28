<template>
  <div class="menu-content" ref="menuContent">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const menuContent = ref(null as HTMLDivElement);

let transitionendFn: () => void;

watch(
  () => props.visible,
  (newValue) => {
    const el = menuContent.value;
    el.removeEventListener("transitionend", transitionendFn);

    if (newValue) {
      el.style.display = "block";
      const height = el.scrollHeight;
      el.style.height = "0px";
      el.clientHeight;
      el.style.height = `${height}px`;
      el.style.overflow = "hidden";

      transitionendFn = () => {
        el.style.height = "";
        el.style.overflow = "";
        el.removeEventListener("transitionend", transitionendFn);
      };

      el.addEventListener("transitionend", transitionendFn);
    } else {
      el.style.height = `${el.scrollHeight}px`;
      el.style.overflow = "hidden";
      el.clientHeight;
      el.style.height = "0px";

      transitionendFn = () => {
        el.style.height = "";
        el.style.overflow = "";
        el.style.display = "none";
        el.removeEventListener("transitionend", transitionendFn);
      };

      el.addEventListener("transitionend", transitionendFn);
    }
  },
);
</script>

<style scoped lang="scss">
.menu-content {
  display: none;
  transition: height 0.3s ease-in-out;
}
</style>
