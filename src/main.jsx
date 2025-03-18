import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProvider from "./AllProvider.jsx";
import DashFeedback from "./Component/dashboard/DashFeedback.jsx";
import DashHome from "./Component/dashboard/DashHome.jsx";
import DashProjects from "./Component/dashboard/DashProjects.jsx";
import DashSkills from "./Component/dashboard/DashSkills.jsx";
import ProtectedRoute from "./Component/shared/ProtectedRoute.jsx";
import { Dashboard } from "./page/Dashboard.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute role="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashHome />,
      },
      {
        path: "/dashboard/projects",
        element: <DashProjects />,
      },
      {
        path: "/dashboard/skills",
        element: <DashSkills />,
      },
      {
        path: "/dashboard/feedback",
        element: <DashFeedback />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProvider>
      <RouterProvider router={router} />
    </AllProvider>
  </React.StrictMode>
);
