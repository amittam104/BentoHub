import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PostHogProvider } from "posthog-js/react";

const options = {
  api_host: import.meta.env.VITE_PH_API_HOST,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PH_API_KEY} options={options}>
      <App />
    </PostHogProvider>
  </React.StrictMode>,
);
