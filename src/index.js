import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { UserProvider } from "./contexts/UserContext";

Sentry.init({
  dsn: "https://665708396c8e41deab42b60e9fd1f698@o4504278112993280.ingest.sentry.io/4504278125838337",
  integrations: [new BrowserTracing()],

  //  Set tracesSampleRate to 1.0 to capture 100%
  //  of transactions for performance monitoring.
  //  We recommend adjusting this value in production

  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
        <App />
      </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
