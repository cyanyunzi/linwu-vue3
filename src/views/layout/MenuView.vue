<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="black"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >

    <el-sub-menu v-bind:index="menu.id" style="width: 218.4px" v-for="menu in menus" v-bind:key="menu.id">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ menu.title }}</span>
      </template>

      <template v-for="childMenu in menu.children" v-bind:key="childMenu.id">

        <el-menu-item v-bind:index="childMenu.id" v-if="childMenu.children.length<=0">
          <router-link to="/index1">{{ childMenu.title }}</router-link>
<!--          {{ childMenu.title }}-->
        </el-menu-item>


        <template v-if="childMenu.children.length>0">

          <el-sub-menu v-bind:index="childMenu.id">
            <template #title>{{ childMenu.title }}</template>
            <template v-for="menu3 in childMenu.children" v-bind:key="menu3.id">
              <el-menu-item v-bind:index="menu3.id">
                <router-link to="/index2">{{ menu3.title }}</router-link>
<!--                {{ menu3.title }}-->
              </el-menu-item>
            </template>
          </el-sub-menu>

        </template>

      </template>

    </el-sub-menu>

  </el-menu>
</template>

<script lang="ts" setup>
import {
  Location
} from "@element-plus/icons-vue";
import { reactive, computed, ref } from "vue";
import { MenuStore } from "@/stores/MenuStore";

let openMenuId = "";

const handleOpen = (key: string, keyPath: string[]) => {
  openMenuId = key;
};
const handleClose = (key: string, keyPath: string[]) => {
};

const menus = computed(() => {
  //获取存储
  const menuStore = MenuStore();
  //没有接口先初始化
  menuStore.initMenus();
  //获取菜单
  return menuStore.getMenus;
});

</script>


<style>
.el-menu-item:hover {
  background-color: #00e1ff;
}

.router-link-active{
  text-decoration: none;
}
a{
  text-decoration: none;
  color: white;
}
</style>