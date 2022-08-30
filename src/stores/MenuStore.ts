import { defineStore } from "pinia";
import { MenuEntity } from "@/model/MenuEntity";

function remoteMenus(): MenuEntity[] {
  const result: MenuEntity[] = [];

  const menu1: MenuEntity = createMenu(true, 1);
  const menu2: MenuEntity = createMenu(true, 2);
  const menu3: MenuEntity = createMenu(true, 3);

  result.push(menu1);
  result.push(menu2);
  result.push(menu3);

  return result;
}

function createMenu(hasChildren: boolean, parentId: number): MenuEntity {
  const result = new MenuEntity(parentId + "", `菜单${parentId}组`, 0, []);
  if (hasChildren) {
    result.children = createMenuChild(parentId);
  }
  return result;
}

function createMenuChild(parentId: number): MenuEntity[] {
  const result: MenuEntity[] = [];
  for (let j = parentId * 10 + 1; j <= parentId * 10 + 5; j++) {

    // //再造一个3级菜单
    if (j === 35) {
      const child = new MenuEntity(j + "", `${j}菜单组`, parentId, []);
      result.push(child);
      child.children = createMenuChild(35);
    }else{
      const child = new MenuEntity(j + "", `${j}菜单`, parentId, []);
      result.push(child);
    }
  }

  return result;
}


export const MenuStore = defineStore({
  id: "MenuStore",
  state: () => ({
    menus: new Array<MenuEntity>
  }),
  getters: {
    getMenus: (state) => state.menus
  },
  actions: {
    initMenus: function() {
      this.menus = remoteMenus();
      console.log("初始化菜单:", this.menus);
    }
  }
});
