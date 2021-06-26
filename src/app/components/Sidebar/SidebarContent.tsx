/** @format */

import React, { useState } from "react";
import classNames from "classnames";
import { NavLink, Route } from "react-router-dom";

import * as Icons from "../../assets/icons";
import routes from "../../routes/sidebar";
import SidebarSubmenu from "./SidebarSubmenu";

function Icon({ icon, ...props }: any) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

const workspaces = [
  {
    id: "1",
    name: "Amba screen printers",
  },
];

function SidebarContent() {
  const [isWorkspaceSwitcherOpen, openWorkspaceSwitcher] = useState(false);

  const toggleWorkspaceSwitcher = () => {
    openWorkspaceSwitcher(!isWorkspaceSwitcherOpen);
  };

  const switchWorkspace = () => {
    toggleWorkspaceSwitcher();
  };

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <div className="px-6 py-4 relative">
        <button
          className="flex items-center font-semibold pb-2"
          onClick={toggleWorkspaceSwitcher}
        >
          <p className="overflow-elipsis" style={{ maxWidth: "10rem" }}>
            Amba screen printersawdawdaw awdawdaw
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          style={{ width: "80%" }}
          className={classNames(
            "bg-white z-50 px-2 mr-4 rounded absolute border",
            {
              hidden: !isWorkspaceSwitcherOpen,
            }
          )}
        >
          <ul>
            <li
              onClick={switchWorkspace}
              className="border-b py-2 w-full overflow-elipsis hover:text-gray-800 cursor-pointer"
            >
              kawmdad
            </li>
            <li
              onClick={switchWorkspace}
              className="py-2 w-full overflow-elipsis hover:text-gray-800 cursor-pointer"
            >
              12389172839
            </li>
          </ul>
        </div>
      </div>

      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
export default SidebarContent;
