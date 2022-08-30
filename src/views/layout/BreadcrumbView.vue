<template>
  <el-breadcrumb :separator-icon="ArrowRight">

    <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item>会员中心</el-breadcrumb-item>
    <el-breadcrumb-item>我的积分</el-breadcrumb-item>
    <el-breadcrumb-item>积分详情</el-breadcrumb-item>

  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
</script>


