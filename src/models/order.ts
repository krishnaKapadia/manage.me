/** @format */

import { Client } from "./client";

export type OrderItem = {
  quantity: number;
  description: string;
  unitCost: number;
};

export type Order = {
  id: number;
  workspaceId: string;

  clientId?: string;

  tags: string[];
  items: OrderItem[];
  notes: string;

  createdOn?: Date;
};
