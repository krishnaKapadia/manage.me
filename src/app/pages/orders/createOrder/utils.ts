/** @format */
import Uuid from "short-uuid";

export type TableRow = {
  quantity: number;
  itemId: string;
  description: string;
  unitCost: number;
};

export function createNewTableRow(): TableRow {
  return {
    itemId: Uuid.generate(),
    quantity: undefined,
    description: undefined,
    unitCost: undefined,
  };
}
