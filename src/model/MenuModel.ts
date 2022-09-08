import { BaseEntity, BasePageReq, BasePageResp, BaseReq, BaseResp } from "@/model/BaseModle";


export class MenuLoadResp extends BaseResp {
  name = "";
  code = "";
  parentId = "";
  children: MenuLoadResp[] = [];
  icon = "";
  path = "";
}


export class MenuPageReq extends BasePageReq {
  name = "";
  code = "";
  parentId = "";
}

export class MenuListReq extends BaseReq {
  name = "";
  code = "";
  parentId = "";
}


export class MenuPageResp extends BasePageResp {
  code = "";
  name = "";
  path = "";
  icon = "";
  parentId = "";
}

export class MenuSimpleListResp extends BaseResp {
  name = "";
  id = "";
}


export class MenuReq extends BaseReq {
  code = "";
  name = "";
  path = "";
  icon = "";
  parentId = "";
}


