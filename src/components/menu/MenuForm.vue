<template>
  <el-form ref="ruleFormRef" :model="addReq" :rules="addRules" label-width="80px" style="max-width: 700px">
    <el-form-item label="菜单名称" prop="name">
      <el-input v-model="addReq.name" placeholder="请输入菜单名称" maxlength="10" show-word-limit />
    </el-form-item>

    <el-form-item label="菜单编码" prop="code">
      <el-input v-model="addReq.code" placeholder="请输入菜单名称" maxlength="10" show-word-limit />
    </el-form-item>

    <el-form-item label="菜单路径" prop="path">
      <el-input v-model="addReq.path" placeholder="请输入菜单路径" maxlength="10" show-word-limit />
    </el-form-item>

    <el-form-item label="上级菜单">
      <MenuTreeSelect ref="menuTreeSelect" v-model="addReq.parentId" @change="parentSelect()"></MenuTreeSelect>
    </el-form-item>

    <el-form-item label="菜单图标" v-show="showIcon">
      <el-input v-model="addReq.icon" placeholder="请输入菜单图标" maxlength="10" show-word-limit />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { defineExpose, reactive, ref } from "vue";
import { MenuReq } from "@/model/MenuModel";
import { MenuService } from "@/api/dict/MenuApi";
import MenuTreeSelect from "@/components/MenuTreeSelect.vue";
import type { FormInstance, FormRules } from "element-plus";
import { addRules } from "@/rules/MenuRule";

const addReq = reactive(new MenuReq());

const ruleFormRef = ref<FormInstance>();

const menuTreeSelect = ref();

const id = ref("");


MenuService.load().then(resp => {
  menuTreeSelect.value.items = resp;
});

const showIcon = ref(false);

function parentSelect(val: any) {
  const parentId = menuTreeSelect.value.currentSelectNode?.parentId;
  if ("-1" === parentId) {
    showIcon.value = true;
    return;
  }

  showIcon.value = false;
  addReq.icon = "";
}

const addMenu = async () => {
  if (!ruleFormRef.value) {
    return;
  }

  await ruleFormRef.value.validate((valid, fields) => {
    if (!valid) {
      throw new Error("表单校验失败");
    }
  });

  await MenuService.addMenu(addReq);
};


function restForm() {
  ruleFormRef.value?.resetFields();
  ruleFormRef.value?.clearValidate();
}


defineExpose({ addMenu, restForm });

</script>

<style scoped>

</style>