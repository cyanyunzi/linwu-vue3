<template>

  <el-form :model="addReq" label-width="70px">
    <el-form-item label="菜单名称">
      <el-input v-model="addReq.name" />
    </el-form-item>

    <el-form-item label="菜单编码">
      <el-input v-model="addReq.code" />
    </el-form-item>

    <el-form-item label="菜单路径">
      <el-input v-model="addReq.path" />
    </el-form-item>

    <el-form-item label="菜单路径">
      <el-input v-model="addReq.icon" />
    </el-form-item>

    <el-form-item label="上级菜单">
      <el-tree-select
        v-model="addReq.parentId"
        :data="simpleMenuList"
        check-strictly
        :render-after-expand="false"
        placeholder="请选择"
      />



<!--      <el-select-->
<!--        v-model="addReq.parentId"-->
<!--        placeholder="请选择"-->
<!--      >-->
<!--        <template v-for="simpleMenu of simpleMenuList"-->
<!--                  :key="simpleMenu.id">-->
<!--          <el-option :label="simpleMenu.name" :value="simpleMenu.id" />-->
<!--        </template>-->




<!--      </el-select>-->
    </el-form-item>

  </el-form>

</template>


<script lang="ts" setup>
import { reactive, ref } from "vue";
import { MenuListReq, MenuLoadResp, MenuReq, MenuSimpleListResp } from "@/model/MenuModel";
import { MenuService } from "@/api/dict/MenuApi";

const addReq = reactive(new MenuReq());
const simpleMenuList = ref([]);

const onSubmit = () => {
  console.log("submit!");
};

const menuListReq = new MenuListReq();
menuListReq.parentId = "0";
MenuService.selectSimpleList(menuListReq).then(resp => {
  // simpleMenuList.value = resp;
  // resp.map(item=>{
  //   const obj = {};
  //   obj.value = item.id;
  // })
});
</script>

<style scoped>

.el-input {
  /*width: 300px;*/
}

</style>