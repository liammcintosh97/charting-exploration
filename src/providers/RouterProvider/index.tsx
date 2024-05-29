import React from 'react'
import {
  createBrowserRouter,
  RouterProvider as RouterProviderDOM,
} from "react-router-dom";
import Root from '../../routes/Root';
import { Route } from './type';

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    element: <Root/>,
  }
]

const router = createBrowserRouter(routes.map((r) => {
  return {
    path: r.path,
    element: r.element
  }
}));

export default function RouterProvider(){
  return <RouterProviderDOM router={router}/>
}