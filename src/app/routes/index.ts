/** @format */

import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

const Clients = lazy(() => import("../pages/clients"));
const Orders = lazy(() => import("../pages/orders"));
const CreateOrder = lazy(() => import("../pages/orders/createOrder"));
const Entity = lazy(() => import("../pages/entities"));
const CreateEntity = lazy(() => import("../pages/entities/create"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */

const routes: Array<{
  path: string;
  component: any;
}> = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/clients",
    component: Clients,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/orders/create",
    component: CreateOrder,
  },
  {
    path: "/entities",
    component: Entity,
  },
  {
    path: "/entities/create",
    component: CreateEntity,
  },
  {
    path: "/forms",
    component: Forms,
  },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/buttons",
    component: Buttons,
  },
  {
    path: "/modals",
    component: Modals,
  },
  {
    path: "/tables",
    component: Tables,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];
export default routes;
