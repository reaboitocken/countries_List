import { useRoutes } from "react-router";
import * as p from "./path";
import MainPage from "../pages/Main";
import CountryInfoPage from "../pages/CountryInfo";
import { useEffect, useState } from "react";
import { getCountries } from "../api/services";

interface Countries {
  countries: Record<string, Object>[] | undefined;
}

const Router = () => {
  const [countries, setCountries] = useState<Countries | any>(null);
  const [countryName, setCountryName] = useState<string>("");

  const loadCountries = async () => {
    const res = await getCountries();
    setCountries(res.body);
  };

  useEffect(() => {
    if (!countries) {
      loadCountries();
    } else {
    }
  });

  return useRoutes([
    {
      path: p.PATH_MAIN_PAGE,
      element: (
        <MainPage countries={countries} setCountryName={setCountryName} />
      ),
    },
    {
      path: p.PATH_COUNTRY_INFO + "/:countryName",
      element: <CountryInfoPage countryName={countryName} />,
    },
  ]);
};

export default Router;
