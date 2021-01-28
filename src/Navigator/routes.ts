import { RouteProps } from "react-router-dom";
import { Home } from "Views/Home";
import { Login } from "Views/Login";

type PathType = "/" | "/login";
type RoutesType = { path: PathType } & RouteProps;

export const routes: RoutesType[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];
