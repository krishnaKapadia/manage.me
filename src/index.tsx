/** @format */

import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Windmill } from "@windmill/react-ui";
import "react-select-plus/dist/react-select-plus.css";
import { QueryClient, QueryClientProvider } from "react-query";

import "./api/init";
import App from "./App";
import "./app/assets/css/global.css";
import "./app/assets/css/tailwind.output.css";

import ThemedSuspense from "./app/components/ThemedSuspense";
import { SidebarProvider } from "./app/context/SidebarContext";

// if (process.env.NODE_ENV !== 'production') {
//   const axe = require('react-axe')
//   axe(React, ReactDOM, 1000)
// }

const queryClient = new QueryClient();

ReactDOM.render(
  <SidebarProvider>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<ThemedSuspense />}>
        <Windmill usePreferences>
          <App />
        </Windmill>
      </Suspense>
    </QueryClientProvider>
  </SidebarProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
