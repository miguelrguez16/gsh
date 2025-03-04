import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GymApp } from "./GymApp";
import "./index.css";

createRoot(document.getElementById("gymApp")!).render(
  <StrictMode>
    <GymApp />
  </StrictMode>
);
