/** @format */
import React, { FunctionComponent } from "react";
import {
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Button,
  Label,
  Input,
} from "@windmill/react-ui";

import { ModalProps } from "./models";
import classNames from "classnames";
import { Textarea } from "@windmill/react-ui";

type Props = ModalProps;

export const AddClientModal: FunctionComponent<Props> = ({
  closeModal,
  isOpen,
}) => (
  <Modal isOpen={isOpen} onClose={closeModal}>
    <ModalHeader>Add a new Client</ModalHeader>

    <ModalBody>
      <Label>
        <span>Name</span>
        <Input className="mt-1" placeholder="John James Limited..." />
      </Label>

      <div className="mt-4 mb-4">
        <Label>Account Type</Label>
        <div className="mt-2">
          <Label radio>
            <Input type="radio" value="personal" name="accountType" />
            <span className="ml-2">One-off</span>
          </Label>
          <Label className="ml-6" radio>
            <Input type="radio" value="business" name="accountType" />
            <span className="ml-2">Small / Medium Enterprise</span>
          </Label>
          <Label disabled className="ml-6" radio>
            <Input type="radio" value="supplier" name="accountType" />
            <span className="ml-2">Supplier</span>
          </Label>
        </div>
      </div>

      <Label className="mt-4 mb-4">
        <span>Primary contact</span>
        <Input className="mt-1" placeholder="John James" />
      </Label>

      <Label className="mt-4 mb-4">
        <span>Email</span>
        <Input className="mt-1" placeholder="john@johnjames.com" type="email" />
      </Label>

      <Label className="mt-4 mb-4">
        <span>Phone number</span>
        <Input className="mt-1" placeholder="0800 83 83 83" type="phone" />
      </Label>

      <Label className="mt-4">
        <span>Notes</span>
        <Textarea className="mt-1" rows="3" placeholder="" />
      </Label>
    </ModalBody>

    <ModalFooter>
      <div className="hidden sm:block">
        <Button layout="outline" onClick={closeModal}>
          Cancel
        </Button>
      </div>
      <div className="hidden sm:block">
        <Button>Save</Button>
      </div>
      <div className="block w-full sm:hidden">
        <Button block size="large" layout="outline" onClick={closeModal}>
          Cancel
        </Button>
      </div>
      <div className="block w-full sm:hidden">
        <Button block size="large">
          Save
        </Button>
      </div>
    </ModalFooter>
  </Modal>
);
