<script setup lang="ts">
function contentChange(e: any) {
  console.log("contentChange", e.target.innerText);
}
</script>

<template>
  <div class="home-view">
    <div class="main-content">
      <div class="white">&lt;</div>
      <div class="puzzle" contenteditable @input="contentChange">hello-world</div>
      <div class="white">/&gt;</div>
    </div>
    <div class="tips">
      <div class="p">&gt; Welcome to my site, please sit and relax.</div>
      <div class="p">&gt; This site includes some resources from internet,</div>
      <div class="p">&gt; and some gadgets of mine.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .main-content {
    font-size: 3rem;
    background: var(--dark-bg-color);
    color: #3b8aab;
    padding: var(--spacing);
    border-radius: var(--spacing);
    display: flex;
    align-items: center;
    animation: blacktoblue 0.5s;
    .white {
      color: #fff;
      margin: 0 1rem;
      animation: blacktowhite 0.5s;
      font-size: 2rem;
    }
  }
  .tips {
    margin-top: var(--exlarge-spacing);
  }
}

@keyframes blacktoblue {
  0% {
    color: var(--dark-bg-color);
  }
  100% {
    color: #3b8aab;
  }
}
@keyframes blacktowhite {
  0% {
    color: var(--dark-bg-color);
  }
  100% {
    color: #fff;
  }
}
</style>
