import { Stack } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";
import { PATH_COUNTRY_INFO } from "../../../routes/path";

interface Props {
  setCountryName: Dispatch<SetStateAction<string>>;
  name: {
    official: string;
    common: string;
  };
  subregion: string;
  flags: {
    svg: string;
  };
}

const BaseMainCountryItem = ({
  subregion,
  flags,
  name,
  setCountryName,
}: Props) => {
  const navigate = useNavigate();
  const goToCountryInfo = () => {
    navigate(`${PATH_COUNTRY_INFO}/${name.common}`);
    setCountryName(name.official);
  };

  const items = [name.official, subregion];

  return (
    <Stack
      sx={{
        padding: "12px",
        display: "flex",
        flexDirection: "row",
        maxHeight: "68px",
      }}
    >
      <ListItem
        component="div"
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img style={{ width: "60px" }} src={flags.svg} alt={name.official} />
        {items?.map((item) => {
          return (
            <ListItemText
              key={item}
              sx={{
                display: "flex",
                justifyContent: " center",
                maxWidth: "380px",
                margin: "0 24px",
              }}
              primary={item}
            />
          );
        })}
        <ListItemButton
          onClick={goToCountryInfo}
          sx={{
            display: "flex",
            justifyContent: " center",
            maxWidth: "120px",
          }}
        >
          More info
        </ListItemButton>
      </ListItem>
    </Stack>
  );
};

export default BaseMainCountryItem;
