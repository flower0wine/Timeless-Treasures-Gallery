<template>
  <slot
    v-bind="{
      setRef,
      onMouseenter: handleMouseEnter,
      onMouseleave: handleMouseLeave,
    }"
  />
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="tooltipVisible"
        class="treasure-tooltip"
        ref="tooltipRef"
        :style="{
          top: position.top + 'px',
          left: position.left + 'px',
          color: props.color,
          '--background-color': props.backgroundColor,
        }"
      >
        <slot name="content">
          {{ props.content }}
        </slot>
        <div class="arrow" :class="`${props.placement}`"></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref, useSlots, watch } from "vue";
import { getElementOffsetLeft, getElementOffsetTop } from "@/utils/element";
import { warn } from "@/utils/tools";

interface Component {
  $el: HTMLElement;
}

/* const slots = useSlots();

if (!slots.default) {
  throw new Error("Tooltip component must have a default slot");
}

const defaultSlots = slots.default();

if (defaultSlots.length > 1) {
  warn(
    "Tooltip component should only have one default slot, the first one will be used",
  );
}

const defaultSlot = defaultSlots[0]; */

const tooltipVisible = ref(false);

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  placement: {
    type: String,
    default: "top",
    validator: (value: string) => {
      return ["top", "bottom", "left", "right"].includes(value);
    },
  },
  color: {
    type: String,
    default: "#fff",
  },
  backgroundColor: {
    type: String,
    default: "#000",
  },
});

const defaultSlotRef = ref<Component>(null as Component);
const tooltipRef = ref<HTMLDivElement>(null as HTMLDivElement);

const position = reactive({
  top: 0,
  left: 0,
});

function calculatePosition() {
  const defaultSlotEl = defaultSlotRef.value.$el;
  const elInfo = defaultSlotEl.getBoundingClientRect();
  const tooltipInfo = tooltipRef.value.getBoundingClientRect();

  const elInfoTop = getElementOffsetTop(defaultSlotEl);
  const elInfoLeft = getElementOffsetLeft(defaultSlotEl);

  if (props.placement === "top") {
    position.top = elInfoTop - tooltipInfo.height - 10;
    position.left = elInfoLeft + elInfo.width / 2 - tooltipInfo.width / 2;
  } else if (props.placement === "bottom") {
    position.top = elInfoTop + elInfo.height + 10;
    position.left = elInfoLeft + elInfo.width / 2 - tooltipInfo.width / 2;
  } else if (props.placement === "left") {
    position.top = elInfoTop + elInfo.height / 2 - tooltipInfo.height / 2;
    position.left = elInfoLeft - tooltipInfo.width - 10;
  } else if (props.placement === "right") {
    position.top = elInfoTop + elInfo.height / 2 - tooltipInfo.height / 2;
    position.left = elInfoLeft + elInfo.width + 10;
  }
}

function setRef(el: Element) {
  defaultSlotRef.value = el as Component;
}

function handleMouseEnter() {
  tooltipVisible.value = true;
}

function handleMouseLeave() {
  tooltipVisible.value = false;
}

watch([() => props.placement, () => props.content, tooltipVisible], () => {
  if (tooltipVisible.value) {
    nextTick(() => {
      calculatePosition();
    });
  }
});

onMounted(() => {
  /* if (!defaultSlot) {
    warn(
      "No available DOM elements were obtained under the default slot of Tooltip",
    );
  } */
});
</script>

<style scoped lang="scss">
.treasure-tooltip {
  position: absolute;
  z-index: 9999;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: var(--background-color);

  .arrow.top {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid var(--background-color);
    bottom: -5px;
    left: 50%;
    margin-left: -5px;
  }

  .arrow.bottom {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--background-color);
    top: -5px;
    left: 50%;
    margin-left: -5px;
  }

  .arrow.left {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid var(--background-color);
    top: 50%;
    margin-top: -5px;
    right: -5px;
  }

  .arrow.right {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid var(--background-color);
    top: 50%;
    margin-top: -5px;
    left: -5px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
