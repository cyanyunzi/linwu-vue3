<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="black"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1" style="width: 218.4px">
      <template #title>
        <el-icon><location /></el-icon>
        <span>菜单组1</span>
      </template>
      <el-menu-item index="1-1">菜单1</el-menu-item>
      <el-menu-item index="1-2">菜单2</el-menu-item>
      <el-menu-item index="1-3">菜单3</el-menu-item>
      <el-sub-menu index="1-4">
        <template #title>菜单4</template>
        <el-menu-item index="1-4-1">菜单4-1</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-sub-menu index="1" style="width: 218.4px">
      <template #title>
        <el-icon><location /></el-icon>
        <span>菜单组2</span>
      </template>
      <el-menu-item index="2-1">菜单11</el-menu-item>
      <el-menu-item index="2-2">菜单22</el-menu-item>
      <el-menu-item index="2-3">菜单33</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>菜单44</template>
        <el-menu-item index="2-4-1">菜单44-1</el-menu-item>
      </el-sub-menu>
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


<style>
.el-menu-item:hover{
  background-color: #00e1ff;
}
</style>