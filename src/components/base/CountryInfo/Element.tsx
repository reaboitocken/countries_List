import { Button, Stack, Typography } from "@mui/material";
import { getCountryByName } from "../../../api/services";

interface Props {
  name?: {
    official?: string;
    common?: string;
  };
  capital?: [];
  flags?: {
    svg?: string;
  };
}

const BaseCountryInfoElement = ({ capital, flags, name }: Props) => {
  const countryByName = async () => {
    const country = await getCountryByName(name?.common);
    console.log(country);
  };

  return (
    <Stack>
      <Typography>Element</Typography>
      <Button onClick={countryByName}>Click for country</Button>
    </Stack>
  );
};

export default BaseCountryInfoElement;
