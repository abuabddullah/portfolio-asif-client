import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProvider from "./AllProvider.jsx";
import DashExperience from "./Component/dashboard/DashExperience.jsx";
import DashFeedback from "./Component/dashboard/DashFeedback.jsx";
import DashHome from "./Component/dashboard/DashHome.jsx";
import DashProjects from "./Component/dashboard/DashProjects.jsx";
import DashSkills from "./Component/dashboard/DashSkills.jsx";
import UpdateExperiences from "./Component/forms/UpdateExperiences.jsx";
import UpdateProjects from "./Component/forms/UpdateProjects.jsx";
import UpdateSkills from "./Component/forms/UpdateSkills.jsx";
import ProjectDetails from "./Component/projects/ProjectDetails.jsx";
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
    path:"/projects/:id",
    element:<ProjectDetails/>
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
        path: "/dashboard/projects-update/:id",
        element: <UpdateProjects />,
      },
      {
        path: "/dashboard/skills-update/:id",
        element: <UpdateSkills />,
      },
      {
        path: "/dashboard/experiences-update/:id",
        element: <UpdateExperiences />,
      },
      {
        path: "/dashboard/skills",
        element: <DashSkills />,
      },
      {
        path: "/dashboard/experience",
        element: <DashExperience />,
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
