<template>
  <el-tag :checked="checked"
          v-for="tag in tags"
          :key="tag.name"
          closable
          round
          :type="tag.type"
  >
    {{ tag.name }}
  </el-tag>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const tags = ref([
  { name: "个人中心", type: "" },
  { name: "权限列表", type: "" },
  { name: "修改密码", type: "" },
  { name: "详情页", type: "" },
  { name: "修改页", type: "" },
  { name: "删除页", type: "" },
  { name: "分页列表", type: "" }
]);
</script>


<style>
.el-tag:focus{
  background-color: red;
}


</style>