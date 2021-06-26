/** @format */

import React, { FunctionComponent, useState } from "react";
import { Label, Input, Select, Textarea, Button } from "@windmill/react-ui";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import PageTitle from "../../../components/Typography/PageTitle";
import CreatableAdvanced from "../../../components/TagSelect";

import * as Api from "../../../../api";
import * as Models from "../../../../models";

import { ItemTable } from "./table";

const CreateOrder: FunctionComponent = () => {
  const history = useHistory();
  const orderMutation = useMutation((order: any) => Api.Order.Create(order));
  const [order, updateOrder] = useState(Models.EntityFactory.createOrder());

  const updateTags = (tags) => {
    const mutatedOrder = {
      ...order,
      tags: tags.map((t) => t.label),
    };

    updateOrder(mutatedOrder);
  };

  const updateClient = (client) => {
    const mutatedOrder = {
      ...order,
      client: client.label,
    };

    updateOrder(mutatedOrder);
  };

  const updateNotes = (note) => {
    const mutatedOrder = {
      ...order,
      note: note.target.value,
    };

    updateOrder(mutatedOrder);
  };

  const updateItems = (items) => {
    const mutatedOrder = {
      ...order,
      items,
    };

    updateOrder(mutatedOrder);
  };

  const submitOrder = async (e) => {
    e.preventDefault();

    orderMutation.mutate(order, {
      onSuccess: () => history.goBack(),
      onError: () => alert("Something went wrong, please try again"),
    });
  };

  return (
    <>
      <PageTitle back="/app/orders">New Order</PageTitle>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2 text-gray-800 mb-4">
          Order #{order.id}
        </h2>

        <div className="pb-2 mb-2 flex flex-row w-full justify-between items-center">
          <Label className="mr-4 w-full">
            <span className="text-gray-700">Client: </span>
            <CreatableAdvanced
              placeholder="Find or create a client"
              defaultOptions={[
                { label: "Arrow uniforms", value: "Arrow uniforms" },
              ]}
              onChange={updateClient}
            />
          </Label>
          <Label className="w-full mr-4">
            <span className="text-gray-700">Tags: </span>
            <CreatableAdvanced
              multiSelect
              placeholder="Search tags"
              defaultOptions={[
                { label: "Arrow uniforms", value: "Arrow uniforms" },
              ]}
              onChange={updateTags}
            />
          </Label>
          <Label className="mr-4 w-full">
            <span className="text-gray-700">Status: </span>
            <CreatableAdvanced
              defaultOptions={[
                { label: "Received", value: "Received" },
                { label: "In progress", value: "In progress" },
                { label: "Completed", value: "Completed" },
              ]}
              onChange={updateClient}
            />
          </Label>
        </div>

        {/* TODO Only show this on mobile and hide the above one
         <Label className="pb-2 mb-2">
          <span className="text-gray-700">Client: </span>
          <CreatableAdvanced
            placeholder="Find or create a client"
            defaultOptions={[
              { label: "Arrow uniforms", value: "Arrow uniforms" },
            ]}
            onChange={updateTags}
          />
        </Label>

        <Label className="pb-2 mb-2">
          <span className="text-gray-700">Tags: </span>
          <CreatableAdvanced
            multiSelect
            placeholder="Search tags"
            defaultOptions={[
              { label: "Arrow uniforms", value: "Arrow uniforms" },
            ]}
            onChange={updateTags}
          />
        </Label> */}

        <div className="divider" />

        <Label className="">
          <span className="text-gray-700">Items</span>
        </Label>

        <br />
        <ItemTable onChange={updateItems} />
        <br />

        <div className="divider" />

        <Label className="pb-2 mb-2">
          <span className="text-gray-700">Notes: </span>
          <Textarea
            rows="3"
            placeholder="Enter any additional information here..."
            onChange={updateNotes}
          />
        </Label>
      </div>

      <div className="w-full mt-4">
        <Button style={{ float: "right" }} onClick={submitOrder}>
          {orderMutation.isLoading ? "Saving..." : "Save order"}
        </Button>
      </div>
    </>
  );
};

export default CreateOrder;
