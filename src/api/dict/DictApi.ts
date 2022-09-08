import { Request } from "@/utils/HttpUtil";
import type { DictPageReq } from "@/model/DictModel";
import { DictPageResp } from "@/model/DictModel";


export class DictService {
  static selectPage(req: DictPageReq) {
    const config = { "url": "/dict/page", "method": "get", "params": req };
    return Request.getPageData(config, DictPageResp);
  }
}


