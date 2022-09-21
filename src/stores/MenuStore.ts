import { defineStore } from "pinia";
import type { MenuLoadResp } from "@/model/MenuModel";
import { MenuService } from "@/api/dict/MenuApi";
import router from "@/router";


export const MenuStore = defineStore({
  id: "MenuStore",
  state: () => ({
    menus: new Array<MenuLoadResp>
  }),

  getters: {
    getMenus():MenuLoadResp[] {
      console.log("getMenus", this.menus);
      return this.menus;
    }
  },
  actions: {
    async initMenus(){
      const result:MenuLoadResp[] = await MenuService.load();
      result[0].children.forEach(item => {
        this.menus.push(item);
      });

    }
  }
});
