<template>
  <el-container>
    <el-aside style="background-color: black;width: 13%">
      <el-row>
        <el-col>
          <ProjectInfoView ></ProjectInfoView>
        </el-col>
        <el-divider border-style="double" style="background-color: #D3ECA7"/>
        <el-col>
          <MenuView></MenuView>
        </el-col>
      </el-row>
    </el-aside>

    <div style="width: 5px;background-color: #F1F1F1"></div>

    <el-container style="background-color: #F1F1F1">
      <el-header style="display: flex;align-items: center; background-color: white">
        <BreadcrumbView style="width: 93%;float: left"></BreadcrumbView>
        <img src="src/assets/头像.png" style="width: 30px">
        <span style="height: auto;width: 20px;white-space:nowrap">林呜呜</span>
      </el-header>

      <div class="tagView-div">
        <TagView></TagView>
      </div>

      <div style="height:2px;background-color: #F1F1F1"></div>

      <el-main style="background-color: white">
        内容区
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
  position: sticky;
  border-width: 3px;
  /*border-style: ridge;*/
}


.tagView-div {
  margin-top: 5px;
  position: sticky;
  border-width: 3px;
  background-color: white;
  /*height: 30px;*/
}

.test-a {
  float: left;
}

</style>