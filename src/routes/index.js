import { useRoutes } from "react-router";
import * as p from "./path";
import MainPage from "../pages/Main";
import CountryInfoPage from "../pages/CountryInfo";

const Router = () => {
  return useRoutes([
    {
      path: p.PATH_MAIN_PAGE,
      element: <MainPage />,
    },
    {
      path: p.PATH_COUNTRY_INFO,
      element: <CountryInfoPage />,
    },
  ]);
};

export default Router;
