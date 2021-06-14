/** @format */

import React, {
  FunctionComponent,
  useState,
  ReactElement,
  cloneElement,
} from "react";
import { Dropdown as DropdownContainer } from "@windmill/react-ui";

type Props = {
  trigger: ReactElement;
};
export const Dropdown: FunctionComponent<Props> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (state?: boolean) => {
    console.log("toggled");

    setIsOpen(state || !isOpen);
  };
  const Trigger = cloneElement(trigger, { onClick: toggleDropdown });

  return (
    <div className="relative flex items-center cursor-pointer">
      {Trigger}

      <div className="fixed">
        <DropdownContainer
          align="right"
          isOpen={isOpen}
          onClose={() => toggleDropdown(false)}
          className=""
        >
          {children}
        </DropdownContainer>
      </div>
    </div>
  );
};
