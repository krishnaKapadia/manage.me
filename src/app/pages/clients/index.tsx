/** @format */

import React, { FunctionComponent, useState } from "react";
import { Button } from "@windmill/react-ui";
import { useQuery } from "react-query";

import PageTitle from "../../components/Typography/PageTitle";
import * as Modals from "../../components/Modals";
import { PlusIcon } from "../../assets/icons";
import { Client } from "../../../api";
import * as Models from "../../../models";

import { ClientTable } from "./components/table";

const Clients: FunctionComponent = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModelOpen] = useState(false);

  const [editableClient, setEditableClient] =
    useState<Models.Client>(undefined);
  const [deletableClient, setDeletableClient] =
    useState<Models.Client>(undefined);

  const { data, isLoading, refetch } = useQuery("clients", Client.Retrieve);

  return (
    <>
      <PageTitle>Clients</PageTitle>
      <div className="flex flex-row justify-end mb-8">
        <Button
          iconLeft={PlusIcon}
          onClick={() => {
            setAddModalOpen(!isAddModalOpen);
          }}
        >
          <span>Add client</span>
        </Button>
      </div>

      {!isLoading && (
        <>
          <ClientTable
            data={data}
            editFunc={(c) => {
              setEditableClient(c);
              setEditModalOpen(true);
            }}
            deleteFunc={(c) => {
              setDeletableClient(c);
              setDeleteModelOpen(true);
            }}
          />

          <Modals.AddClientModal
            closeModal={() => {
              setAddModalOpen(!isAddModalOpen);
              refetch();
            }}
            isOpen={isAddModalOpen}
          />

          {editableClient && (
            <Modals.EditClientModal
              closeModal={() => {
                setEditableClient(undefined);
                setEditModalOpen(!isEditModalOpen);
                refetch();
              }}
              editableClient={editableClient}
              isOpen={isEditModalOpen}
            />
          )}

          {deletableClient && (
            <Modals.DeleteClientModal
              closeModal={() => {
                setDeleteModelOpen(!isDeleteModalOpen);
                refetch();
              }}
              isOpen={isDeleteModalOpen}
              client={deletableClient}
            />
          )}
        </>
      )}
    </>
  );
};

export default Clients;
