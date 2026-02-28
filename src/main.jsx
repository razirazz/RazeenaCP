import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 🔥 Apply theme BEFORE render
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
} else {
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  document.documentElement.classList.add(prefersLight ? "light" : "dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);