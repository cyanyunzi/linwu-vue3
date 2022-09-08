import { BasePageReq, BasePageResp } from "@/model/BaseModle";


export class DictPageReq extends BasePageReq {
  name = "";
  type = "";
  code = "";
  parentId = 0;
}


export class DictPageResp extends BasePageResp {
  name = "";
  type = "";
  code = "";
  parentId = 0;
}
