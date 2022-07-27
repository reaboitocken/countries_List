import { Box, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getCountries } from "../api/services";
import BaseMainCountryItemList from "../components/base/Main/CountryItemList";
import BaseMainListSearch from "../components/base/Main/ListSearch";
import { getFilteredArrayOfOjects } from "../utils/filter";

interface Countries {
  countries: Record<string, Object>[] | undefined;
  setCountryName: Dispatch<SetStateAction<string>>;
}

const MainPage = ({ countries, setCountryName }: Countries) => {
  const [queryFilter, setQueryFilter] = useState("");

  const onChangeQuery = async (event: {
    currentTarget: { value: SetStateAction<string> };
    target: { value: any };
  }) => {
    setQueryFilter(event.currentTarget.value);
  };

  const getFiltered = (countries: Record<string, any>[] | undefined) => {
    return getFilteredArrayOfOjects(
      countries,
      [
        "name.official",
        "name.common",
        "translations.rus.common",
        "translations.rus.official",
      ],
      queryFilter
    );
  };

  return (
    <Stack sx={{ bgcolor: "#FFD", maxWidth: "full-width", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "24px",
        }}
      >
        <Typography variant="h4" color="#AAA">
          World's countries
        </Typography>
        <BaseMainListSearch onChangeQuery={onChangeQuery} />
      </Box>
      <BaseMainCountryItemList
        countries={getFiltered(countries)}
        setCountryName={setCountryName}
      />
    </Stack>
  );
};

export default MainPage;
