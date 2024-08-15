<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="title-block">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-block {
  margin-bottom: 20px;
  .title {
    font-weight: bold;
    font-size: var(--large-font);
  }
  .content {
    margin-top: 10px;
  }
}
</style>
