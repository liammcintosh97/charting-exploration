import React from 'react'
import {
  createBrowserRouter,
  RouterProvider as RouterProviderDOM,
} from "react-router-dom";
import Root from '../../routes/Root';
import { Route } from './type';
import ReCharts from '../../routes/ReCharts';
import ReactCharts from '../../routes/ReactCharts';

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    element: <Root/>
  },
  {
    path: "/recharts",
    name: "ReCharts",
    element: <ReCharts/>,
  },
  {
    path: "/react-charts",
    name: "React Charts.js 2",
    element: <ReactCharts/>,
  }
]

const router = createBrowserRouter(routes.map((r) => {
  return {
    path: r.path,
    element: r.element,
    children: r.children
  }
}));

export default function RouterProvider(){
  return <RouterProviderDOM router={router}/>
}
