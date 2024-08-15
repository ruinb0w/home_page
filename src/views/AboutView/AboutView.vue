<script setup lang="ts">
import TitleBlock from "@/components/TitleBlock/TitleBlock.vue";
import { SKILLS } from "./lib";
</script>

<template>
  <div class="about-view">
    <title-block title="desc">
      This site use to share something that I get from internet, and some gadgets of mine.
    </title-block>
    <title-block title="me">
      I graduated from CUIT with a degree in Atmospheric Science, and I spent a year working at
      LinCang Airport. Now, I am a full-stack engineer, and I love building web applications.
    </title-block>
    <title-block title="skills">
      <div class="skill-list">
        <div class="skill-box" v-for="skill in SKILLS" :key="skill.title">
          <div class="box-title">{{ skill.title }}</div>
          <div class="topic-list">
            <div class="topic" v-for="topic in skill.topics" :key="topic.title">
              <div class="title">{{ topic.title }}</div>
              <div class="level">{{ topic.level }}</div>
            </div>
          </div>
        </div>
      </div>
    </title-block>
    <title-block title="announce">
      If something on my site is offensive, please contact me.
    </title-block>
    <title-block title="contact">
      <div class="box">
        <div class="item">mail: <a href="mailto:ruinb0w@qq.com">ruinb0w@qq.com</a></div>
        <div class="item">telegram: <a href="https://t.me/ruinb0w">ruinb0w</a></div>
      </div>
    </title-block>
    <title-block title="references">
      <div class="box">
        <a class="item no-decoration" href="https://github.com/ruinb0w"
          ><i class="iconfont icon-github-fill"></i
        ></a>
        <a class="item no-decoration" href="http://space.bilibili.com/7768892#!/index"
          ><i class="iconfont icon-bilibili-line"></i
        ></a>
        <a class="item no-decoration" href="https://juejin.cn/user/167588958834718"
          ><i class="iconfont icon-juejin-logo"></i
        ></a>
      </div>
    </title-block>
  </div>
</template>

<style lang="scss" scoped>
.about-view {
  .skill-list {
    display: flex;
    justify-content: space-around;
    overflow: auto;
    .skill-box {
      .box-title {
        font-weight: bold;
      }
      .topic-list {
        .topic {
          display: flex;
          align-items: center;
          &::before {
            content: "";
            width: 0.5rem;
            height: 0.5rem;
            background: var(--dark-bg-color);
            margin-right: 0.5rem;
            border-radius: 50%;
          }
          .title {
            width: 6rem;
            margin-right: 0.5rem;
          }
          .level {
            color: var(--light-font-color);
          }
        }
      }
    }
  }
  .box {
    display: flex;
    .item {
      margin-right: var(--spacing);
    }
    a {
      color: rgb(244, 179, 59);
    }
  }
  .iconfont {
    font-size: 2rem;
  }
}
</style>
