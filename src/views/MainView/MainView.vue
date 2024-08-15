<script setup lang="ts">
import MainHeader from "../../components/MainHeader/MainHeader.vue";
import MainFooter from "../../components/MainFooter/MainFooter.vue";
</script>

<template>
  <div class="main-view">
    <main-header class="m-h" />
    <router-view class="container" />
    <main-footer class="m-f" />
  </div>
</template>

<style lang="scss" scoped>
.main-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  .m-h {
    width: 100%;
  }
  .container {
    height: 100%;
    overflow: auto;
    margin: 0 auto;
    padding: var(--large-spacing) var(--spacing);
    box-sizing: border-box;
    width: 100%;
    max-width: 1000px;
    -webkit-scrollbar: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
</style>
