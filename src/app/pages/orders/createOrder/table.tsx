/** @format */

import React, { FunctionComponent, useState } from "react";
import currency from "currency.js";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
} from "@windmill/react-ui";

import { TrashIcon } from "../../../assets/icons";
import * as Utils from "./utils";

type Props = {
  onChange: (items: Utils.TableRow[]) => void;
};

export const ItemTable: FunctionComponent<Props> = ({ onChange }) => {
  const [items, updateItems] = useState([Utils.createNewTableRow()]);

  const updateWrapper = (items: Utils.TableRow[]) => {
    updateItems(items);
    onChange(items);
  };

  const addNewItem = () => updateWrapper([...items, Utils.createNewTableRow()]);
  const updateExistingItem = (itemIndex: number, item: Utils.TableRow) => {
    const updatedItemsArray = [...items];
    updatedItemsArray[itemIndex] = item;
    updateWrapper(updatedItemsArray);
  };
  const deleteItem = (itemIndex: number) => {
    const updatedItemsArray = [...items];
    updatedItemsArray.splice(itemIndex, 1);
    updateWrapper(updatedItemsArray);
  };

  return (
    <div className="mb-4" style={{ paddingBottom: "1px" }}>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Quantity</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Unit cost</TableCell>
              <TableCell>Total cost</TableCell>
              <TableCell />
            </tr>
          </TableHeader>
          <TableBody>
            {items.map((item, idx) => (
              <TableRow key={item.itemId}>
                <TableCell style={{ width: "24px" }}>
                  <Input
                    value={item.quantity}
                    onChange={(e) =>
                      updateExistingItem(idx, {
                        ...item,
                        quantity: e.target.value,
                      })
                    }
                  />
                </TableCell>

                <TableCell>
                  <Input
                    value={item.description}
                    onChange={(e) =>
                      updateExistingItem(idx, {
                        ...item,
                        description: e.target.value,
                      })
                    }
                  />
                </TableCell>

                <TableCell style={{ width: "24px" }}>
                  <Input
                    value={item.unitCost}
                    onChange={(e) =>
                      updateExistingItem(idx, {
                        ...item,
                        unitCost: e.target.value,
                      })
                    }
                  />
                </TableCell>

                <TableCell style={{ width: "24px", textAlign: "center" }}>
                  <p>
                    ${currency(item.quantity * item.unitCost || 0).toString()}
                  </p>
                </TableCell>

                <TableCell style={{ width: "24px" }}>
                  <div className="flex space-x-4">
                    <Button
                      disabled={items.length <= 1}
                      layout="link"
                      size="icon"
                      aria-label="Delete"
                      onClick={() => deleteItem(idx)}
                    >
                      <TrashIcon
                        className="w-4 h-4"
                        aria-hidden="true"
                        color={items.length <= 1 ? "grey" : "#d63031"}
                      />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ float: "right" }}>
        <Button onClick={addNewItem}>+ New item</Button>
      </div>
    </div>
  );
};
