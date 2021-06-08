/** @format */

import React, { FunctionComponent, useState, useMemo } from "react";
import { Button } from "@windmill/react-ui";

import PageTitle from "../../components/Typography/PageTitle";
import * as Modals from "../../components/Modals";
import { PlusIcon } from "../../icons";

import { ClientTable } from "./components/table";

const Clients: FunctionComponent = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(true);

  return (
    <>
      <PageTitle>Clients</PageTitle>
      <div className="flex flex-row justify-end mb-8">
        <Button
          iconLeft={PlusIcon}
          onClick={() => setAddModalOpen(!isAddModalOpen)}
        >
          <span>Add client</span>
        </Button>
      </div>
      <ClientTable />

      <Modals.AddClientModal
        closeModal={() => setAddModalOpen(!isAddModalOpen)}
        isOpen={isAddModalOpen}
      />
    </>
  );
};

export default Clients;
