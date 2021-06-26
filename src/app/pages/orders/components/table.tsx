/** @format */

import React, { FunctionComponent } from "react";
import { Dropdown } from "../../../components/Dropdown/index";
import {
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  Badge,
  Select,
  DropdownItem,
} from "@windmill/react-ui";

export const OrdersTable: FunctionComponent = () => {
  return (
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>Order</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell />
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center text-sm">
                {/* <Input type="checkbox" className="mr-2" /> */}
                <p>#0548</p>
              </div>
            </TableCell>

            <TableCell>
              <p>01/02/2019</p>
            </TableCell>

            <TableCell>
              <div className="flex items-center text-sm">
                <p className="truncate">Arrow Uniforms</p>
              </div>
            </TableCell>

            <TableCell>
              <div className="flex items-center">
                <Badge className="mr-2">Embroidery</Badge>
                <Badge>Digital</Badge>
              </div>
            </TableCell>

            <TableCell className="relative">
              <Select className="mt-1">
                <option>Recieved</option>
                <option>Digitisation</option>
                <option>Production</option>
                <option>Packing</option>
                <option>Blocked</option>
                <option>Invoicing</option>
                <option>Closed</option>
                <option>Dispatch</option>
              </Select>
            </TableCell>

            <TableCell className="relative">
              <div className="flex items-center text-sm">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </TableCell>

            <TableCell>
              <Dropdown
                trigger={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                }
              >
                <DropdownItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span>Edit order</span>
                </DropdownItem>
                <DropdownItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span>Remove</span>
                </DropdownItem>

                <DropdownItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Mark as paid</span>
                </DropdownItem>
              </Dropdown>

              {/* <Dropdown isOpen={false} onClose={null}></Dropdown> */}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
