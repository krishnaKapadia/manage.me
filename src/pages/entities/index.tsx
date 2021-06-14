/** @format */

import React, { FunctionComponent } from "react";
import { Button } from "@windmill/react-ui";

import PageTitle from "../../components/Typography/PageTitle";
import { PlusIcon, OutlineCogIcon } from "../../icons";

const Entities: FunctionComponent = () => {
  return (
    <>
      <PageTitle>Entities</PageTitle>

      <div className="flex flex-row justify-end mb-8">
        <Button style={{ marginRight: "8px" }} iconLeft={PlusIcon}>
          <span>Create Entity</span>
        </Button>
      </div>
    </>
  );
};

export default Entities;
