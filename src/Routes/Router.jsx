import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Sajek from "../components/Home Children/Sajek";
import Sundorbon from "../components/Home Children/Sundorbon";
import Srimongol from "../components/Home Children/Srimongol";
import Error from "../components/Error";
import Login from "../pages/Login";
import SignUp from "../components/SignUp";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: Sajek,
      },
      {
        path: "/sajek",
        Component: Sajek,
      },
      {
        path: "/sundorbon",
        Component: Sundorbon,
      },
      {
        path: "/srimongol",
        Component: Srimongol,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
    children: [
      {
        index: true,
        Component: SignUp,
      },
      // {
      //   path: "/register",
      //   Component: Register,
      // },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

export default router;
