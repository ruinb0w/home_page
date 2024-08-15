<script setup lang="ts">
import { TAB_LIST } from "@/config";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { genGetTabStyle, useHoverTab } from "./lib";

const route = useRoute();
const currentColor = computed(() => {
  return TAB_LIST.find((item) => item.path === route.path)?.color;
});
const hoverTab = useHoverTab();
const getTabStyle = genGetTabStyle(hoverTab.hoverTabPath, route);
</script>

<template>
  <div class="main-header">
    <div class="title">
      ruinb
      <div class="bold" :style="`color:${currentColor}`">0</div>
      w
    </div>
    <div class="tab-list">
      <router-link
        class="tab no-decoration"
        v-for="item in TAB_LIST"
        :key="item.path"
        :style="getTabStyle(item)"
        :to="item.path"
        @mouseenter="hoverTab.setHoverTabPath(item.path)"
        @mouseleave="hoverTab.clearHoverTabPath"
      >
        {{ item.title }}
      </router-link>
    </div>
    <div class="seperator" :style="`background:${currentColor}`"></div>
  </div>
</template>

<style lang="scss" scoped>
.main-header {
  background: var(--dark-bg-color);
  .title {
    display: flex;
    color: #fff;
    font-size: 2rem;
    justify-content: center;
    padding: 10px;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
  .tab-list {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    .tab {
      color: #fff;
      padding: var(--spacing) var(--large-spacing);
      border-radius: var(--small-spacing) var(--small-spacing) 0 0;
      margin: 0 var(--spacing);
    }
  }
  .seperator {
    height: var(--spacing);
  }
}
</style>
