import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashBlog from "../Component/dashboard/DashBlog";
import DashExperience from "../Component/dashboard/DashExperience";
import DashFeedback from "../Component/dashboard/DashFeedback";
import DashHome from "../Component/dashboard/DashHome";
import DashProjects from "../Component/dashboard/DashProjects";
import DashSkills from "../Component/dashboard/DashSkills";
import UpdateExperiences from "../Component/forms/UpdateExperiences";
import UpdateProjects from "../Component/forms/UpdateProjects";
import UpdateSkills from "../Component/forms/UpdateSkills";
import ProjectDetails from "../Component/projects/ProjectDetails";
import ProtectedRoute from "../Component/shared/ProtectedRoute";
import { Dashboard } from "../page/Dashboard";
import Login from "../page/Login";
import Register from "../page/Register";
import BlogEditor from "../Component/forms/BlogEditor";

export const router = createBrowserRouter([
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
          path: "/dashboard/blogs",
          element: <DashBlog />,
        },
        {
          path: "/dashboard/blog-editor",
          element: <BlogEditor />,
        },
        {
          path: "/dashboard/feedback",
          element: <DashFeedback />,
        },
      ],
    },
  ]);