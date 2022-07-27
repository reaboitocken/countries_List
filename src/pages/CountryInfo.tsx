import { Box, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCountryByName } from "../api/services";
import BaseCountryInfoElement from "./../components/base/CountryInfo/Element";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router";
import { PATH_MAIN_PAGE } from "./../routes/path";

interface Props {
  countryName: string;
}

interface Country {
  countries: Record<string, Object>[] | undefined;
}

const CountryInfoPage = ({ countryName }: Props) => {
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | any>(null);
  const [countryBody, setCountryBody] = useState<Country | any>(null);
  const [countryLang, setCountryLang] = useState<Country | any>(null);

  const goToMain = () => {
    navigate(PATH_MAIN_PAGE);
  };

  useEffect(() => {
    const countryByName = async () => {
      const Name = await getCountryByName(countryName);
      setCountry(Name.body);
    };
    if (!country && countryName !== undefined) {
      countryByName();
    }
  }, [country, countryName]);
  useEffect(() => {
    if (country) {
      setCountryBody(country[0]);
    }
  }, [country, countryBody]);
  console.log(country);

  const countryFlag: string = countryBody?.flags.svg;
  const countryCode: string = countryBody?.ccn3;
  const countryCommonName: string = countryBody?.name.common;
  const countryRegion: string = countryBody?.region;
  const countrySubregion: string = countryBody?.subregion;
  const countryArea: number = countryBody?.area;
  const countryPopulation: number = countryBody?.population;
  const countryLanguages: Object = countryBody?.languages;

  useEffect(() => {
    if (countryBody) {
      for (const [key, value] of Object.entries(countryLanguages)) {
        setCountryLang(`${key} - ${value}`);
      }
    }
  }, [countryBody, countryLanguages]);

  return (
    <Stack
      sx={{
        maxWidth: "full-width",
        bgcolor: "#FFD",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          aligItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton onClick={goToMain}>
          <KeyboardBackspaceIcon />
        </IconButton>
        <Typography variant="h5" alignSelf="center">
          {countryName ? countryName : "CountryName"}
        </Typography>
      </Box>
      <ListItem
        component="div"
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <img style={{ width: "300px" }} src={countryFlag} alt="flag" />
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              padding: "0 40px",
            }}
          >
            <Typography>{`Country code : ${countryCode} `}</Typography>
            <Typography>{`Country common name :  ${countryCommonName}`}</Typography>
            <Typography>{`Country full name :  ${countryName}`}</Typography>
            <Typography>{`Country region :  ${countryRegion}`}</Typography>
            <Typography>{`Country subregion :  ${countrySubregion}`}</Typography>
            <Typography>{`Country area :  ${countryArea} km²`}</Typography>
            <Typography>{`Country population :  ${countryPopulation}`}</Typography>
            <Typography>{`Country languages :  ${countryLang}`}</Typography>
          </Stack>
        </Stack>
      </ListItem>
      <BaseCountryInfoElement />
    </Stack>
  );
};

export default CountryInfoPage;
