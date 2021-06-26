/** @format */

import React, { FunctionComponent } from "react";
import { Button } from "@windmill/react-ui";
import { Link } from "react-router-dom";

import PageTitle from "../../components/Typography/PageTitle";
import { PlusIcon, OutlineCogIcon } from "../../assets/icons";
import { OrdersTable } from "./components/table";

const Orders: FunctionComponent = () => {
  return (
    <>
      <PageTitle>Orders</PageTitle>
      <div className="flex flex-row justify-end mb-8">
        <Button
          tag={Link}
          to="orders/create"
          style={{ marginRight: "8px" }}
          iconLeft={PlusIcon}
        >
          <span>Create order</span>
        </Button>

        <Button
          layout="outline"
          iconLeft={OutlineCogIcon}
          to="/app/entities/create"
          tag={Link}
        ></Button>
      </div>
      <OrdersTable />
    </>
  );
};

export default Orders;
