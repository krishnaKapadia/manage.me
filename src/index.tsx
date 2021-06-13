/** @format */

import React, { Suspense } from "react";
import { Windmill } from "@windmill/react-ui";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import "./assets/css/tailwind.output.css";
import ThemedSuspense from "./components/ThemedSuspense";
import { SidebarProvider } from "./context/SidebarContext";

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
