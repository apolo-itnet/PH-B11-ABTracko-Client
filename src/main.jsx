import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Router } from "./Router/Router";
import "aos/dist/aos.css";
import Aos from "aos";

Aos.init({
  duration: 1000,
  easing: "ease-in-out",
  once: false,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist">
      <RouterProvider router={Router} />
    </div>
  </StrictMode>
);
