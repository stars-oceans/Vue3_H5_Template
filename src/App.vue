<script setup></script>

<template>
  <div class="banner"></div>
  <div  class="box">box</div>
  <div class="content">
    <div class="tab_box">
      <div class="tab">
        <router-link to="/" active-class="active-link">Home</router-link>
        <router-link to="/about" active-class="active-link">About</router-link>
        <router-link to="/about" active-class="active-link">About</router-link>
        <router-link to="/about" active-class="active-link">About</router-link>
      </div>
    </div>
    
    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<style>

.box{
  width: 600px;
  height: 200px;
  background-color: red;
  margin-bottom: 200px;
}
* {
  margin: 0;
  padding: 0;
}


/* 隐藏整个页面的滚动条 */
html {
  scrollbar-width: none; /* Firefox */
  overflow: -moz-scrollbars-none; /* 老版本的 Firefox */
}

html::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

body {
  -ms-overflow-style: none; /* IE, Edge */
}
</style>
<style lang="less" scoped>
.banner {
  width: 100vw;
  height: 500px;
  background-color: #3399ff;
}
.content {
  z-index: 99;
  position: relative;
  top: -20px;

  background-color: rgb(242, 242, 242);
  border-radius: 20px;
  padding: 10px;
  .tab_box {
    width: 100%;
    height: 100px;
    overflow: scroll;
    .tab {
      display: flex;
      align-items: center;
      width: 130vw;
      height: 100px;
      a {
        margin: 0 20px;
        display: block;
        width: 200px;
        height: 100px;
        border-radius: 50px;
        text-align: center;
        line-height: 100px;
        color: black;
        font-size: 20px;
      }
    }
  }
}

.tab_box {
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
}

.tab_box::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.active-link {
  background-color: #3399ff; /* 选中时的背景颜色 */
  color: white !important; /* 选中时的文字颜色 */
  /* 其他激活状态的样式 */
}
</style>
