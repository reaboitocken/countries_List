import { Box, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCountryByName } from "../api/services";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router";
import { PATH_MAIN_PAGE } from "./../routes/path";
import CountryInfoMap from "../components/views/CountryInfo/Map";

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

  const countryFlag: string = countryBody?.flags.svg;
  const countryCode: string = countryBody?.ccn3;
  const countryCommonName: string = countryBody?.name.common;
  const countryRegion: string = countryBody?.region;
  const countrySubregion: string = countryBody?.subregion;
  const countryArea: number = countryBody?.area;
  const countryPopulation: number = countryBody?.population;
  const countryLanguages: Object = countryBody?.languages;
  const countryCapital: Object = countryBody?.capital;
  const countryCapitalGeo: Array<[]> = countryBody?.capitalInfo.latlng;

  useEffect(() => {
    if (countryBody) {
      for (const [key, value] of Object.entries(countryLanguages)) {
        setCountryLang(`${key} - ${value}`);
      }
    }
  }, [countryBody, countryLanguages]);

  const items = [
    {
      attribute: "code",
      context: countryCode,
    },
    {
      attribute: "common name",
      context: countryCommonName,
    },
    {
      attribute: "full name ",
      context: countryName,
    },
    {
      attribute: "region",
      context: countryRegion,
    },
    {
      attribute: "subregion",
      context: countrySubregion,
    },
    {
      attribute: "area",
      context: countryArea,
      metric: "km²",
    },
    {
      attribute: "population",
      context: countryPopulation,
    },
    {
      attribute: "languages",
      context: countryLang,
    },
  ];

  return (
    <Stack
      sx={{
        bgcolor: "#FED",
        maxWidth: "full-width",
        height: "94vh",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
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
            {items.map((item) => {
              return (
                <Typography key={item.attribute}>{`Country ${
                  item.attribute
                } : ${item.context}  ${
                  item.metric ? item.metric : ""
                }`}</Typography>
              );
            })}
          </Stack>
        </Stack>
      </ListItem>
      <Typography variant="h4">{`Country capital :  ${countryCapital}`}</Typography>
      <CountryInfoMap countryCapitalGeo={countryCapitalGeo} />
    </Stack>
  );
};

export default CountryInfoPage;
