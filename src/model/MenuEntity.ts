export class MenuEntity {
  id: string;
  title: string;
  parentId: number;
  children: MenuEntity[];

  constructor(id: string, title: string, parentId: number, children:MenuEntity[]) {
    this.id = id;
    this.title = title;
    this.parentId = parentId;
    this.children = children;
  }
}
