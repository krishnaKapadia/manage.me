/** @format */
import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Button,
  Label,
  Input,
  Textarea,
} from "@windmill/react-ui";

import { Client as ClientApi } from "../../../../api";
import * as Models from "../../../../models";

import { ModalProps } from "../models";

async function handleFormSubmit(
  client: Models.Client,
  callback: (success: boolean) => void
) {
  const updated = await ClientApi.Update(client);
  callback(updated);
}

type Props = {
  editableClient: Models.Client;
} & ModalProps;

export const EditClientModal: FunctionComponent<Props> = ({
  closeModal,
  isOpen,
  editableClient,
}) => {
  const [client, updateClient] = useState({ ...editableClient } as any);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
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
      <ModalHeader>Edit client</ModalHeader>
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <Label>
            <span>Name</span>
            <Input
              className="mt-1"
              placeholder="John James Limited..."
              defaultValue={client.name}
              onChange={(e) => {
                client.name = e.target.value;
                updateClient(client);
              }}
            />
          </Label>

          <Label className="mt-4 mb-4">
            <span>Primary contact</span>
            <Input
              className="mt-1"
              placeholder="John James"
              defaultValue={client.primaryContactName}
              onChange={(e) => {
                client.primaryContactName = e.target.value;
                updateClient(client);
              }}
            />
          </Label>

          <Label className="mt-4 mb-4">
            <span>Email</span>
            <Input
              className="mt-1"
              placeholder="john@johnjames.com"
              type="email"
              defaultValue={client.primaryContactEmail}
              onChange={(e) => {
                client.primaryContactEmail = e.target.value;
                updateClient(client);
              }}
            />
          </Label>

          <Label className="mt-4 mb-4">
            <span>Phone number</span>
            <Input
              className="mt-1"
              placeholder="0800 83 83 83"
              type="phone"
              defaultValue={client.primaryContactPhone}
              onChange={(e) => {
                client.primaryContactPhone = e.target.value;
                updateClient(client);
              }}
            />
          </Label>

          <Label className="mt-4">
            <span>Notes</span>
            <Textarea
              className="mt-1"
              rows="3"
              defaultValue={client.notes}
              onChange={(e) => {
                client.notes = e.target.value;
                updateClient(client);
              }}
            />
          </Label>
        </ModalBody>

        <ModalFooter>
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </ModalFooter>
      </form>
    </Modal>
  );
};
