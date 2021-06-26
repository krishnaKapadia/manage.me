/** @format */
import React, { FunctionComponent, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";

import { Client as ClientApi } from "../../../../api";
import * as Models from "../../../../models";
import { ModalProps } from "../models";

async function handleFormSubmit(
  client: Models.Client,
  callback: (success: boolean) => void
) {
  const updated = await ClientApi.Delete(client);
  callback(updated);
}

type Props = {
  client: Models.Client;
} & ModalProps;

export const DeleteClientModal: FunctionComponent<Props> = ({
  isOpen,
  closeModal,
  client,
}) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);

    await handleFormSubmit(client, (res) => {
      setLoading(false);
      if (res) {
        closeModal();
      }
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalHeader>Delete client</ModalHeader>
      <ModalBody>
        Are you sure you want to delete <b>{client.name}</b>?
      </ModalBody>
      <ModalFooter>
        <Button
          className="w-full sm:w-auto"
          layout="outline"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          className="w-full sm:w-auto"
          style={{ backgroundColor: "#d63031" }}
          onClick={handleDelete}
        >
          {loading ? "Deleting..." : "I am sure!"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
