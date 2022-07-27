import { Box, Stack, TextField, Typography } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { getCountries } from "../api/services";
import BaseCountryList from "../components/base/CountryItemList";
import SearchIcon from "../components/Icons/Search";
import { getFilteredArrayOfOjects } from "../utils/filter";

interface Countries {
  countries: Record<string, Object>[] | undefined;
}

const MainPage = () => {
  const [countries, setCountries] = useState<Countries | any>(null);
  const [queryFilter, setQueryFilter] = useState("");
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
    <Stack>
      <Box
        sx={{
          display: "flex",
          gap: " 8px",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "24px",
        }}
      >
        <Typography>Main Page</Typography>
        <TextField
          placeholder={"Поиск"}
          onChange={onChangeQuery}
          className="filter"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        ></TextField>
      </Box>
      <BaseCountryList countries={getFiltered(countries)} />
    </Stack>
  );
};

export default MainPage;
