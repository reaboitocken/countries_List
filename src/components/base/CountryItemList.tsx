import { Stack } from "@mui/material";
import BaseCountryItem from "./CountryItem";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  countries: Record<string, any>[] | undefined;
}

const BaseCountryList = ({ countries }: Props) => {
  return (
    <>
      {countries?.map((country) => {
        const { name, capital, flags, translations } = country ?? {};

        const itemProps = {
          name,
          capital,
          translations,
          flags,
        };

        return (
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <BaseCountryItem {...itemProps} />
          </Stack>
        );
      })}
    </>
  );
};

export default BaseCountryList;
