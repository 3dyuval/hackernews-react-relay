import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "@/RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/components/App";
import "@/assets/styles.css";
import '@/index.scss'
import { BrowserRouter } from 'react-router-dom';
import { FusionAuthProvider } from '@fusionauth/react-sdk';


const fusionConfig = {
  clientID: "cddc93d6-e4b3-4754-8bc5-b85e028fb789",
  serverUrl: "http://localhost:9011",
  redirectUri: "http://localhost:3030"

}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <FusionAuthProvider {...fusionConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </FusionAuthProvider>
    </React.StrictMode>
  </RelayEnvironmentProvider>
);
