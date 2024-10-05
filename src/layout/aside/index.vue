<template>

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>主页</span>
            </template>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>工作</span>
            </template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
                <el-icon><document /></el-icon>
                <span>待开发</span>
            </template>
            <el-menu-item index="3-1">待开发</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
                <el-icon><setting /></el-icon>
                <span>个人设置</span>
            </template>
            <el-menu-item index="4-1">
                <template #title>个人设置 1</template>
            </el-menu-item>
            </el-sub-menu>
        </el-menu>
  </template>
  
  <script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>