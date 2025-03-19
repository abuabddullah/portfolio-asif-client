import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProvider from "./AllProvider.jsx";
import DashBlog from "./Component/dashboard/DashBlog.jsx";
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
import { router } from "./router/router.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProvider>
      <RouterProvider router={router} />
    </AllProvider>
  </React.StrictMode>
);
