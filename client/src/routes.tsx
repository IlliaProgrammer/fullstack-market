import React from "react";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import NotFoundPage from "./pages/NotFoundPage";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE, DEVICE_ROUTE } from "./utils/consts";

interface IRoute {
  path: string;
  element: React.ReactNode; 
}

export const authRoutes: IRoute[] = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />
  }
];

export const publicRoutes: IRoute[] = [
  {
    path: SHOP_ROUTE,
    element: <Shop /> 
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />
  },
  {
    path: REGISTER_ROUTE,
    element: <Auth />
  },
  {
    path: DEVICE_ROUTE + "/:id",
    element: <DevicePage />
  },
  {
    path: "*",
    element: <Shop/>
},
];