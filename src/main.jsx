import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import posthog from "posthog-js";

posthog.init(import.meta.env.VITE_PH_API_KEY, {
  api_host: import.meta.env.VITE_PH_API_HOST,
  person_profiles: "identified_only",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
