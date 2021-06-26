/** @format */

import React, { FunctionComponent } from "react";
import { Label, Input, Select, Textarea } from "@windmill/react-ui";

import PageTitle from "../../../components/Typography/PageTitle";
import CreatableAdvanced from "../../../components/TagSelect";
import { Order } from "../../../../api";

import { ItemTable } from "./table";

const CreateOrder: FunctionComponent = () => {
  return (
    <>
      <PageTitle back="/app/orders">New Order</PageTitle>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2 text-gray-800 mb-4">
          Order #194
        </h2>

        <Label className="pb-2 mb-2">
          <span className="text-gray-700">Client: </span>
          <div className="flex flex-row items-center">
            <Select className="mt-1 mr-4">
              <option className="text-gray-700">
                Select an existing client
              </option>
              <option className="text-gray-700">Arrow uniforms</option>
              <option className="text-gray-700">Wright stuff</option>
            </Select>
            <p>or</p>
            <Input
              className="mt-1 ml-4"
              placeholder="Enter a new client name"
            />
          </div>
        </Label>

        <Label className="pb-2 mb-2">
          <span className="text-gray-700">Tags: </span>
          <CreatableAdvanced
            defaultOptions={[
              { label: "Arrow uniforms", value: "Arrow uniforms" },
            ]}
            onChange={(e) => console.log(e)}
          />
        </Label>

        <div className="divider" />

        <Label className="">
          <span className="text-gray-700">Items</span>
        </Label>

        <br />
        <ItemTable />
        <br />

        <div className="divider" />

        <Label className="pb-2 mb-2">
          <span className="text-gray-700">Notes: </span>
          <Textarea rows="3" placeholder="" />
        </Label>
      </div>
    </>
  );
};

export default CreateOrder;
