<template>
  <el-form :model="pageReq" label-width="120px">
    <el-row class="row-bg">
      <el-col :span="4" :pull="1">
        <el-form-item label="字典名称">
          <el-input v-model="pageReq.name" />
        </el-form-item>
      </el-col>

      <el-col :span="4">
        <el-form-item label="字典类型">
          <el-input v-model="pageReq.type" />
        </el-form-item>
      </el-col>

      <el-col :span="4">
        <el-form-item label="字典code">
          <el-input v-model="pageReq.code" />
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

  <el-button type="primary">新增</el-button>
  <el-button type="warning">修改</el-button>
  <el-button type="info">查看</el-button>
  <el-button type="danger">删除</el-button>
  <el-button type="success">导入</el-button>
  <el-button>导出</el-button>

  <br>
  <br>

  <el-table :data="pageData.list" empty-text=" ">
    <el-table-column type="selection" width="55" />
    <!--    <el-table-column type="index" width="50" />-->
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="name" label="字典名称" width="180" />
    <el-table-column prop="type" label="字典type" width="180" />
    <el-table-column prop="code" label="字典code" width="180" />
    <el-table-column prop="parentId" label="上级ID" width="180" />
    <el-table-column prop="createdBy" label="创建人" width="180" />
    <el-table-column prop="modifiedBy" label="修改人" width="180" />
    <el-table-column prop="createdTime" label="创建时间" width="180" />
    <el-table-column prop="modifiedTime" label="修改时间" width="180" />
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

</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Ref } from "vue";
import { DictPageReq, DictPageResp } from "@/model/DictModel";
import { DictService } from "@/api/dict/DictApi";
import { BasePageListResp } from "@/model/BaseModle";

const pageReq = reactive(new DictPageReq());
const pageData: Ref<BasePageListResp<DictPageResp>> = ref(new BasePageListResp<DictPageResp>());

DictService.selectPage(pageReq).then(resp => {
  pageData.value = resp;
});

const handleCurrentChange = (val: number) => {
  pageReq.page = val;
  DictService.selectPage(pageReq).then(data => {
    pageData.value = data;
  });
};

const handleSizeChange = (val: number) => {
  pageReq.size = val;
  DictService.selectPage(pageReq).then(data => {
    pageData.value = data;
  });
};

function formSearch(){
  DictService.selectPage(pageReq).then(data => {
    pageData.value = data;
  });
}


</script>

<style scoped></style>
