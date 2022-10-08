import { Request } from "@/utils/HttpUtil";
import {
  MenuListReq,
  MenuLoadResp,
  MenuPageReq,
  MenuPageResp, MenuReq, MenuResp,
  MenuSimpleListResp
} from "@/model/MenuModel";
import { BaseResp } from "@/model/BaseModle";


export class MenuService {
  static selectPage(req: MenuPageReq) {
    const config = { "url": "/menu/page", "method": "get", "params": req };
    return Request.getPageData(config, MenuPageResp);
  }

  static load() {
    const config = { "url": "/menu/load", "method": "get" };
    return Request.getListData(config, MenuLoadResp);
  }

  static selectSimpleList(req: MenuListReq) {
    const config = { "url": "/menu/simpleList", "method": "get", "params": req };
    return Request.getListData(config, MenuSimpleListResp);
  }

  static addMenu(req: MenuReq) {
    const config = { "url": "/menu", "method": "post", "params": req };
    return Request.getData(config, BaseResp);
  }

  static updateMenu(id: string, req: MenuReq) {
    const config = { "url": "/menu/" + id, "method": "put", "params": req };
    return Request.getData(config, BaseResp);
  }

  static deleteMenus(ids: string[]) {
    const config = { "url": "/menu?ids=" + ids, "method": "delete" };
    return Request.getData(config, BaseResp);
  }

  static selectDetail(id: string) {
    const config = { "url": "/menu/" + id, "method": "get" };
    return Request.getData(config, MenuResp);
  }
}


