import { IndexRouteObject, NonIndexRouteObject, RouteObject } from "react-router-dom";

export type Route = RouteObject & RouteProperties

interface RouteProperties {
  name: string,
  children?: Route[]
}

