<template>
  <el-container>
    <el-aside style="background-color: black;width: 15%">
      <el-row>
        <el-col>
          <ProjectInfoView ></ProjectInfoView>
        </el-col>
        <el-divider border-style="double" style="background-color: #D3ECA7"/>
        <el-col class="menu-col">
          <MenuView></MenuView>
        </el-col>
      </el-row>
    </el-aside>

    <div style="width: 8px;background-color: #F1F1F1"></div>

    <el-container style="background-color: #F1F1F1">
      <el-header class="el-header">
        <BreadcrumbView style="width: 95%;float: left"></BreadcrumbView>
        <span style="position: absolute;right: 30px;white-space:nowrap">林呜呜</span>
        <el-icon style="position: absolute;right: 10px"><Avatar /></el-icon>
      </el-header>

      <div class="tagView-div">
        <TagView></TagView>
      </div>

      <div style="height:5px;background-color: #F1F1F1"></div>

      <el-main style="background-color: white">
<!--        内容区-->
        <RouterView />
      </el-main>

    </el-container>
  </el-container>
</template>


<script setup lang="ts">
import ProjectInfoView from "./views/layout/ProjectInfoView.vue";
import MenuView from "./views/layout/MenuView.vue";
import BreadcrumbView from "./views/layout/BreadcrumbView.vue";
import TagView from "./views/layout/TagView.vue";
</script>


<style>


html, body, #app, .el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
}


.el-header {
  height: 30px;
  /*position: sticky;*/
  border-width: 3px;
  display: flex;
  align-items: center;
  background-color: white
}


.tagView-div {
  margin-top: 5px;
  position: sticky;
  border-width: 3px;
  background-color: white;
  /*height: 30px;*/
}

.menu-col{
}


</style>