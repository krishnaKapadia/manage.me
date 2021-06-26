/** @format */

import React, { FunctionComponent } from "react";
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

type TableRow = {
  quantity: number;
  itemId: string;
  description: string;
  unitCost: number;
  totalCost: number;
};

const tableData: TableRow[] = [];

export const ItemTable: FunctionComponent = () => {
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
            <TableRow>
              <TableCell style={{ width: "24px" }}>
                <Input />
              </TableCell>

              <TableCell>
                <Input />
              </TableCell>

              <TableCell style={{ width: "24px" }}>
                <Input />
              </TableCell>

              <TableCell style={{ width: "24px", textAlign: "center" }}>
                <p>${0.0}</p>
              </TableCell>

              <TableCell>
                <div className="flex space-x-4">
                  <Button
                    layout="link"
                    size="icon"
                    aria-label="Delete"
                    // onClick={() => deleteFunc(data[idx])}
                  >
                    <TrashIcon className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ float: "right" }}>
        <Button>+ New item</Button>
      </div>
    </div>
  );
};
