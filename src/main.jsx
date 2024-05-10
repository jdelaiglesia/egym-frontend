import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

console.log(import.meta.env.VITE_BACKEND_URL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </GoogleOAuthProvider>
);
