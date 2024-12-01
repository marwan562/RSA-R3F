import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Experience from "./Experience.jsx";
import { Canvas } from "@react-three/fiber";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
      <Experience />
  
  </StrictMode>
);
