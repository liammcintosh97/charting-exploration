import { RouteObject } from "react-router-dom";

export interface Route {
  path: string,
  name: string,
  element: JSX.Element
}