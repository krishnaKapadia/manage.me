/** @format */

import React, { FunctionComponent } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Button,
} from "@windmill/react-ui";

import * as Models from "../../../models";
import { EditIcon, TrashIcon } from "../../../icons";

type Props = {
  data: Models.Client[];
  edit: (c: Models.Client) => void;
};

export const ClientTable: FunctionComponent<Props> = ({ data, edit }) => (
  <>
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>Client</TableCell>
            {/* <TableCell>Orders</TableCell> */}
            <TableCell>Contact</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          {data.map(
            ({ id, name, primaryContactName, primaryContactEmail }, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <p className="font-semibold">{name}</p>
                  </div>
                </TableCell>
                {/* <TableCell>
                  <span className="text-sm">0</span>
                </TableCell> */}
                <TableCell>
                  <span className="text-sm">{primaryContactName}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{primaryContactEmail}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button
                      layout="link"
                      size="icon"
                      aria-label="Edit"
                      onClick={() => {
                        console.log("Table", data[idx]);

                        edit(data[idx]);
                      }}
                    >
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete">
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      {/* <TableFooter>
        <Pagination
          totalResults={10}
          resultsPerPage={10}
          onChange={() => console.log("change")}
          label="Table navigation"
        />
      </TableFooter> */}
    </TableContainer>
  </>
);
