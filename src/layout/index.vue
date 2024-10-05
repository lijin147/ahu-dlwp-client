<template>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside class="aside" :style="{height: height + 'px',minHeight : minHeight + 'px'}"><Aside/></el-aside>
          <el-main>
            <Header/>
            <Main/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script setup>
    //导入左侧导航
    import Aside from "./aside/index.vue"
    import Header from './header/index.vue'
    import Main from './main/index.vue'
    import { ref,onMounted } from 'vue';  
    const height = ref(0)
    const minHeight = ref(0)

    onMounted (() => {
      getHeight();
      //监听页面缩放事件
      minHeight.value = document.documentElement.clientHeight
    })
    //获取文档高度
    function getHeight(){
      height.value = document.documentElement.clientHeight;
    }
</script>

<style lang="scss" scoped>
.aside {
  background: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: skyblue;
    z-index: 1;
  }
}
</style>