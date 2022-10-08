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


  <el-button type="primary" @click="openMenuAddWindow">新增</el-button>
  <el-button type="warning">修改</el-button>
  <el-button type="info" @click="openMenuDetailWindow">查看</el-button>
  <el-button type="danger" @click="deleteMenus">删除</el-button>


  <el-table :data="pageData.list" empty-text=" " @selection-change="selectRowObj">
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
      :page-sizes="[10,20, 30, 50]"
      :disabled="disabled"
      :background="background"
      layout="total,sizes, prev, pager, next, jumper"
      :total="pageData.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>


  <DialogWindows ref="menuAddWindow" @dialogSubmit="apiAddMenu"
                 @dialogCancel="closeMenuAddWindow" title="新增菜单">
    <MenuAdd ref="menuAdd"></MenuAdd>
  </DialogWindows>

  <DialogWindows ref="menuDetailWindowForm" @dialogCancel="closeMenuDetailWindow"
                 title="菜单详情">
    <MenuDetail ref="menuDetail"></MenuDetail>
  </DialogWindows>

</template>

<script lang="ts" setup>
import { nextTick, reactive, ref, watchEffect } from "vue";
import type { Ref } from "vue";
import { BasePageListResp } from "@/model/BaseModle";
import { MenuPageReq, MenuPageResp } from "@/model/MenuModel";
import { MenuService } from "@/api/dict/MenuApi";
import DialogWindows from "@/components/DialogWindows.vue";
import MenuAdd from "@/views/menu/MenuAdd.vue";
import { ElMessage, ElMessageBox, ElTable } from "element-plus";
import router from "@/router";
import MenuDetail from "@/views/menu/MenuDetail.vue";

const pageReq = ref(new MenuPageReq());
const pageData: Ref<BasePageListResp<MenuPageResp>> = ref(new BasePageListResp<MenuPageResp>());

const selectRow: string[] = reactive([]);

const menuAdd = ref();
const menuAddWindow = ref();

const menuDetail = ref();
const menuDetailWindowForm = ref();

watchEffect(async () => {
  const result = await MenuService.selectPage(pageReq.value);
  pageData.value = result;
})


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


function openMenuAddWindow() {
  menuAddWindow.value.dialogVisible = true;
}

function closeMenuAddWindow() {
  menuAddWindow.value.dialogVisible = false;
  menuAdd.value.restForm();
}

/*调用新增菜单的组件方法*/
function apiAddMenu() {
  menuAdd.value.addMenu.call().then(() => {
    //成功之后关闭菜单
    menuAddWindow.value.dialogVisible = false;

    //刷新分页
    pageReq.value = new MenuPageReq();
  });
}


async function openMenuDetailWindow() {
  if (selectRow.length < 1) {
    ElMessage.warning("请勾选一行数据");
    return;
  }

  menuDetailWindowForm.value.dialogVisible = true;
  menuDetailWindowForm.value.showSuccessButton = false;

  await nextTick();

  menuDetail.value.selectById(selectRow[0]);
}

function closeMenuDetailWindow() {
  menuDetailWindowForm.value.dialogVisible = false;
  //刷新分页
  pageReq.value = new MenuPageReq();
}


function deleteMenus() {
  if (selectRow.length <= 0) {
    ElMessage({
      type: "warning",
      message: "请选择一行数据"
    });
    return;
  }

  ElMessageBox.confirm(
    "是否确认删除数据?",
    "Warning",
    {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning"
    }
  ).then(() => {
    MenuService.deleteMenus(selectRow).then(resp => {
      ElMessage({
        type: "success",
        message: "删除成功"
      });

      //刷新分页
      pageReq.value = new MenuPageReq();

    });
  }).catch((err) => {
    ElMessage({
      type: "error",
      message: err
    });
  });


}

function selectRowObj(val: MenuPageResp[]) {
  selectRow.length = 0;
  const items: string[] = val.map(v => v.id);
  selectRow.push(...items);
}
</script>

<style scoped></style>
