/** @format */
import { Order } from "./order";

class EntityFactoryBase {
  currentOrderNumber: number;
  workspaceId: string;

  constructor(store: any) {
    this.currentOrderNumber = 100;
    this.workspaceId = "123abc321";
  }

  createOrder(): Order {
    return {
      workspaceId: this.workspaceId,
      id: ++this.currentOrderNumber,
      items: [],
      tags: [],
      notes: "",
    };
  }
}

export const EntityFactory = new EntityFactoryBase({});
