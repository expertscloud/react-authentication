import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loadable from "./Loadable";
import AuthGuard from "./AuthGuard";

const Login = Loadable(lazy(() => import("./LoginPage")));
const SignUp = Loadable(lazy(() => import("./SignUpPage")));
const Dashboard = Loadable(lazy(() => import("./Dashboard")));

const adminRoutes = [
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
];

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/",
      children: adminRoutes,
    },
    { path: "*", element: <Navigate to="/login" /> },
  ]);

  return routes;
};

export default Router;
