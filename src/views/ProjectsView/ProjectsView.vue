<script setup lang="ts">
import ProjectCard from "./components/ProjectCard/ProjectCard.vue";
import { PROJECTS } from "./lib";
</script>

<template>
  <div class="projects-view">
    <div class="list">
      <project-card v-for="item in PROJECTS" :key="item.title" :options="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-view {
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 180px);
    grid-gap: var(--spacing);
  }
}
</style>
