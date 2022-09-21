import { Request } from "@/utils/HttpUtil";
import type { DictPageReq } from "@/model/DictModel";
import { DictPageResp } from "@/model/DictModel";
import { MenuListReq, MenuLoadResp, MenuPageReq, MenuPageResp, MenuSimpleListResp } from "@/model/MenuModel";
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

  static selectSimpleList(req:MenuListReq) {
    const config = { "url": "/menu/simpleList", "method": "get","params":req };
    return Request.getListData(config, MenuSimpleListResp);
  }

  static addMenu(req:MenuListReq) {
    const config = { "url": "/menu", "method": "post","params":req };
    return Request.getData(config, BaseResp);
  }
}


