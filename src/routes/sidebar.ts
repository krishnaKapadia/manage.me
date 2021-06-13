/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 *
 * @format
 */

interface RouteBase {
  path?: string;
  name: string;
  icon?: string;
  exact?: boolean;
}

export interface RouteData extends RouteBase {
  routes?: RouteData[];
}

const routes: Array<RouteData> = [
  {
    path: "/app/dashboard",
    icon: "HomeIcon",
    name: "Dashboard",
  },
  {
    path: "/app/clients",
    icon: "PeopleIcon",
    name: "Clients",
  },
  {
    path: "/app/orders",
    icon: "PagesIcon",
    name: "Orders",
  },
  {
    path: "/app/forms",
    icon: "FormsIcon",
    name: "Forms",
  },
  {
    path: "/app/cards",
    icon: "CardsIcon",
    name: "Cards",
  },
  {
    path: "/app/charts",
    icon: "ChartsIcon",
    name: "Charts",
  },
  {
    path: "/app/buttons",
    icon: "ButtonsIcon",
    name: "Buttons",
  },
  {
    path: "/app/modals",
    icon: "ModalsIcon",
    name: "Modals",
  },
  {
    path: "/app/tables",
    icon: "TablesIcon",
    name: "Tables",
  },
  {
    icon: "PagesIcon",
    name: "Pages",
    routes: [
      // submenu
      {
        path: "/login",
        name: "Login",
      },
      {
        path: "/create-account",
        name: "Create account",
      },
      {
        path: "/forgot-password",
        name: "Forgot password",
      },
      {
        path: "/app/404",
        name: "404",
      },
      {
        path: "/app/blank",
        name: "Blank",
      },
    ],
  },
];
export default routes;
