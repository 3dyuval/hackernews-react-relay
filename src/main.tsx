import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "@/RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/components/App";
import "@/assets/styles.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </RelayEnvironmentProvider>
);
