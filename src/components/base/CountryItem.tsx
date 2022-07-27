import { Stack, Typography } from "@mui/material";

interface Props {
  name: {
    official: string;
  };
  capital: [];
  translations: {
    rus: {
      official: string;
    };
  };
  flags: {
    svg: string;
  };
}

const BaseCountryItem = ({ capital, flags, name, translations }: Props) => {
  return (
    <Stack sx={{ padding: "16px", display: "flex", flexDirection: "row" }}>
      <img style={{ width: "40px" }} src={flags.svg} alt={name.official} />
      <Typography>{`Country name: ${name.official}`}</Typography>
      <Typography>{`Capital: ${capital}`}</Typography>
    </Stack>
  );
};

export default BaseCountryItem;
