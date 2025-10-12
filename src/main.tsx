import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  HomePage,
  CrewPage,
  TechnologyPage,
  DestinationsPage,
} from "./page/content";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/space-tourism-website-main/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "destinations",
        element: <DestinationsPage />,
      },
      {
        path: "crew",
        element: <CrewPage />,
      },
      {
        path: "technology",
        element: <TechnologyPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
