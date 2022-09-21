<template>
  <el-form :model="pageReq" label-width="120px">
    <el-row class="row-bg">
      <el-col :span="4" :pull="1">
        <el-form-item label="菜单名称">
          <el-input v-model="pageReq.name" />
        </el-form-item>
      </el-col>


    </el-row>

    <el-row>
      <el-col :span="1" :offset="12">
        <el-button type="primary" @click="formSearch">查询</el-button>
      </el-col>

      <el-col :span="1" :offset="1">
        <el-button type="info">重置</el-button>
      </el-col>
    </el-row>
  </el-form>

  <el-divider content-position="left">数据操作</el-divider>


  <el-button type="primary" @click="openWindowForm">新增</el-button>
  <el-button type="warning">修改</el-button>
  <el-button type="info">查看</el-button>
  <el-button type="danger">删除</el-button>


  <el-table :data="pageData.list" empty-text=" ">
    <el-table-column type="selection" width="55" />
    <!--    <el-table-column type="index" width="50" />-->
    <el-table-column prop="id" label="id" width="50" />
    <el-table-column prop="name" label="菜单名称" width="120" />
    <el-table-column prop="code" label="菜单code" width="120" />
    <el-table-column prop="path" label="路径" width="120" />
    <el-table-column prop="icon" label="图标" width="120" />

    <el-table-column prop="createdBy" label="创建人" width="120" />
    <el-table-column prop="modifiedBy" label="修改人" width="120" />
    <el-table-column prop="createdTime" label="创建时间" width="120" />
    <el-table-column prop="modifiedTime" label="修改时间" width="120" />
  </el-table>


  <div class="demo-pagination-block">
    <el-pagination
      v-model:currentPage="pageReq.page"
      v-model:page-size="pageReq.size"
      :page-sizes="[1,2, 3, 5]"
      :disabled="disabled"
      :background="background"
      layout="total,sizes, prev, pager, next, jumper"
      :total="pageData.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>


  <DialogWindows ref="addMenuWindowForm" @dialogSubmit="submitAdd">
    <MenuAdd ref="menuAdd"></MenuAdd>
  </DialogWindows>

</template>

<script lang="ts" setup>
import { nextTick, reactive, ref } from "vue";
import type { Ref } from "vue";
import { BasePageListResp } from "@/model/BaseModle";
import { MenuPageReq, MenuPageResp } from "@/model/MenuModel";
import { MenuService } from "@/api/dict/MenuApi";
import DialogWindows from "@/components/DialogWindows.vue";
import MenuAdd from "@/views/menu/MenuAdd.vue";

const pageReq = ref(new MenuPageReq());
const pageData: Ref<BasePageListResp<MenuPageResp>> = ref(new BasePageListResp<MenuPageResp>());

const reload = () => {
  pageReq.value = new MenuPageReq();
  MenuService.selectPage(pageReq.value).then(resp => {
    pageData.value = resp;
  });
}

reload();

const handleCurrentChange = (val: number) => {
  pageReq.value.page = val;
  MenuService.selectPage(pageReq.value).then(data => {
    pageData.value = data;

  });
};

const handleSizeChange = (val: number) => {
  pageReq.value.size = val;
  MenuService.selectPage(pageReq.value).then(data => {
    pageData.value = data;
  });
};

function formSearch() {
  MenuService.selectPage(pageReq.value).then(data => {
    pageData.value = data;
  });
}

const menuAdd = ref();
const addMenuWindowForm = ref();

function openWindowForm() {
  addMenuWindowForm.value.dialogInit();
}

function submitAdd() {
  menuAdd.value.addMenu.call("", menuAdd.value.ruleFormRef).then(() => {
    addMenuWindowForm.value.dialogClose.call();
    reload();
  });
}


</script>

<style scoped></style>
