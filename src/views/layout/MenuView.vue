<template>
  <el-menu
    active-text-color="#409EFF"
    background-color="black"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >

    <template v-for="menu in menus" v-bind:key="menu.id">

      <el-sub-menu v-bind:index="menu.id" v-if="menu.children.length>0" >

        <template #title>
          <el-icon><component :is="menu.icon"></component></el-icon>
          <span>{{ menu.name }}</span>
        </template>

        <template v-for="childMenu in menu.children" v-bind:key="childMenu.id">
          <router-link :to="childMenu.path">
            <el-menu-item v-bind:index="childMenu.id" v-if="childMenu.children.length<=0" >
              {{ childMenu.name }}
            </el-menu-item>
          </router-link>

          <template v-if="childMenu.children.length>0">
            <el-sub-menu v-bind:index="childMenu.id" >
              <template #title>{{ childMenu.name }}</template>
              <template v-for="menu3 in childMenu.children" v-bind:key="menu3.id">
                <el-menu-item v-bind:index="menu3.id" >
                  <router-link :to="childMenu.path">{{ menu3.name }}</router-link>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </template>
      </el-sub-menu>

      <el-menu-item v-bind:index="menu.id" v-else >
        <el-icon><component :is="menu.icon"></component></el-icon>
        <span>{{ menu.name }}</span>
      </el-menu-item>
    </template>


  </el-menu>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { MenuStore } from "@/stores/MenuStore";
import router from "@/router";

const menuStore = MenuStore();
menuStore.initMenus();

const menus = reactive(menuStore.getMenus);

</script>


<style>
.el-menu-item:hover {
  background-color: #00e1ff;
}

.el-menu-item{
  background-color: black;
  width: 100%;
}

.el-sub-menu{
  width: 100%;
}

/*菜单多出1px*/
.el-menu {
  border-right-width: 0;
}

.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
  color: white;
}
</style>