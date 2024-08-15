<script setup lang="ts">
import type { Project } from "../../lib";

defineProps<{ options: Project }>();
</script>

<template>
  <router-link class="project-card" :to="`/projects/project/${options.id}`">
    <img :src="options.cover" class="cover" />
    <div class="status">{{ options.status }}</div>
    <div class="title">{{ options.title }}</div>
  </router-link>
</template>

<style lang="scss" scoped>
.project-card {
  background: var(--dark-bg-color);
  padding: var(--spacing);
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  .cover {
    width: 100%;
    height: 150px;
    background: #fff;
    object-fit: contain;
    padding: var(--spacing);
    box-sizing: border-box;
  }
  .status {
    color: #fff;
    /* color: rgb(235, 74, 85); */
  }
  .title {
    background: #fff;
    padding: var(--small-spacing);
    font-weight: bold;
  }
}
</style>
