import { createBrowserRouter } from "react-router";
import Home from "../Home";
import LayOut from "../LayOut";
import Dashboard from "../Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    children: [
        {
            index:true,
            Component:Home,
        },
        {
            path:"dashboard",
            Component:Dashboard
        }
    ],
  },
]);
