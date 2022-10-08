<template>
  <el-form ref="ruleFormRef" :model="result" :rules="rules" label-width="80px" style="max-width: 700px" disabled>
    <el-form-item label="菜单名称" prop="name">
      <el-input v-model="result.name" />
    </el-form-item>

    <el-form-item label="菜单编码" prop="code">
      <el-input v-model="result.code" />
    </el-form-item>

    <el-form-item label="菜单路径" prop="path">
      <el-input v-model="result.path" />
    </el-form-item>

    <el-form-item label="上级菜单">
      <el-input v-model="result.parentName" />
    </el-form-item>

    <el-form-item label="菜单图标">
      <el-input v-model="result.icon" />
    </el-form-item>
  </el-form>

</template>

<script lang="ts" setup>
import { MenuService } from "@/api/dict/MenuApi";
import { reactive } from "vue";
import { MenuResp } from "@/model/MenuModel";

const result = reactive(new MenuResp());

function selectById(id: string) {
  MenuService.selectDetail(id).then(resp => {
    Object.assign(result, resp);
  });
}

defineExpose({ selectById });


</script>

<style scoped>

</style>