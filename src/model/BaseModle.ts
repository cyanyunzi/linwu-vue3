export class Result<T> {
  respCode = "";
  respMsg = "";
  bizCode = "";
  bizMsg = "";
  data: T;

  constructor(data: T) {
    this.data = data;
  }
}

export class BaseModle {

}

export class BaseEntity extends BaseModle {
  id = "";
  createdBy = ZERO;
  modifiedBy = ZERO;
  createdTime = "";
  modifiedTime = "";
}

export class BaseReq extends BaseModle {
}

export class BasePageReq extends BaseModle {
  page = PAGE;
  size = SIZE;
}

export class BaseResp extends BaseModle {
}

export class BaseEntityResp extends BaseResp {
   id = "";
   createdBy = ZERO;
   modifiedBy = ZERO;
   createdTime = "";
   modifiedTime = "";
}

export class BasePageResp extends BaseEntityResp {
}

export class BasePageListResp<T extends BasePageResp> extends BaseResp {
  list: T[] = [];
  total = ZERO;
  pages = ZERO;
  page = PAGE;
  size = SIZE;
}

export class BaseListResp extends BaseModle {
}

const PAGE = 1;
const SIZE = 1;
const ZERO = 0;
