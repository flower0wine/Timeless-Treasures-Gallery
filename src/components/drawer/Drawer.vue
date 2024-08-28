<template>
  <Teleport to="body">
    <Transition :name="transitionName">
      <div class="drawer" v-show="modelValue" :style="computedStyle">
        <slot name="header">
          <div class="drawer-header">{{ props.title }}</div>
        </slot>

        <div class="close-btn" v-if="showClose" @click="handleClose">
          <CloseIcon />
        </div>

        <slot name="default"></slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import CloseIcon from "@/components/svg/CloseIcon.vue";
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "300px",
  },
  position: {
    type: String,
    default: "left",
    validator: (value: string) => {
      if (value === "left" || value === "right") {
        return true;
      }
      console.warn(`Invalid position value: ${value}, use "left" or "right"`);
      return false;
    },
  },
  indent: {
    type: [Number, String],
    default: 0,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const transitionName = computed(() => {
  return props.position === "left" ? "slide-left" : "slide-right";
});

const computedStyle = computed(() => {
  let indent: string;

  if (typeof props.indent === "number") {
    indent = `${props.indent}px`;
  } else {
    indent = props.indent as string;
  }

  function getStyleByPosition(isLeft: boolean) {
    return {
      transform: `translateX(${isLeft ? "-" : ""}${props.width} ${isLeft ? "-" : "+"} ${indent})`,
      boxShadow: `${isLeft ? "" : "-"}2px 0 8px rgba(0, 0, 0, 0.1)`,
    };
  }

  return {
    width: props.width,
    ...getStyleByPosition(props.position === "left"),
  };
});

function handleClose() {
  emits("update:modelValue", false);
}
</script>

<style scoped lang="scss">
.drawer {
  position: fixed;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: #fff;

  :deep(.close-btn) {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 6px;
    border-radius: 50%;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    svg {
      width: 24px;
      height: 24px;
      cursor: pointer;
      fill: #5d5d5d;
      vertical-align: -4px;
    }
  }
}

.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter {
  transform: translateX(-100%);
}

.slide-right-enter {
  transform: translateX(100%);
}

.slide-left-leave-to,
.slide-right-enter {
  transform: translateX(0);
}
</style>
