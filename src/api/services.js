import { req } from "./http";

export const getCountries = () => {
  return req(`v3.1/all`, {
    method: "GET",
  });
};

export const getCountryByName = (name) => {
  return req(`v3.1/name/${name}`, {
    method: "GET",
  });
};
