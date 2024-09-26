<template>
  <div class="star-card">
    <header>{{ props.title }}</header>
    <main>{{ props.content }}</main>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.star-card {
  width: 250px;
  padding: 14px 20px;
  backdrop-filter: blur(2px);
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  background-image: -webkit-linear-gradient(top, #f6df00, #cc810b);

  header {
    font-size: 24px;
    margin-bottom: 10px;
  }
}
</style>
