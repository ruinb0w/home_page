<script setup lang="ts"></script>

<template>
  <div class="main-footer">
    <div class="copy-left">©️</div>
    ruinb0w
  </div>
</template>

<style lang="scss" scoped>
.main-footer {
  display: flex;
  align-items: center;
  background: var(--dark-bg-color);
  color: #fff;
  padding: var(--small-spacing);
  .copy-left {
    margin-left: auto;
    transform: rotate(180deg);
  }
}
</style>
