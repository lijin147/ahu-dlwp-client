<template>
    <div class="breadcrumb-container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index" :to="{ path: item.path }" :class="{ 'pointer-class': true }">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="user-info">
        <el-avatar src="https://tse2-mm.cn.bing.net/th/id/OIP-C.oRs6Dw2uD96WTOkyF1JJwQHaEO?rs=1&pid=ImgDetMain" size="big"></el-avatar>
        <el-dropdown v-model="dropdownVisible" trigger="hover">
        <span class="el-dropdown-link">
            <span class="username-span">{{ username }}</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const dataArray = [
    { name: '1', path: '/1' },
    { name: '2', path: '/2' },
    { name: '3', path: '/3' }
  ];
  const breadcrumbItems = ref(dataArray);
  const username = 'John Doe';
  const dropdownVisible = ref(false);
  </script>
  
  <style lang="scss" scoped>
  .breadcrumb-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-info {
    display: none;
    display: flex;
    align-items: center;
   .el-dropdown-link {
      cursor: pointer;
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
      .username-span{
        border: none;
        outline: none;
      }
    }
    > *:not(:first-child) {
      margin-left: 10px;
    };
  }
  .pointer-class {
    cursor: pointer;
  }
  </style>