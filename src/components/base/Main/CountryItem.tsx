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
  return (
    <Stack sx={{ padding: "16px", display: "flex", flexDirection: "row" }}>
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
        <ListItemText
          sx={{
            display: "flex",
            justifyContent: " center",
            maxWidth: "180px",
            margin: "0 24px",
          }}
          primary={name.official}
        />
        <ListItemText
          sx={{
            display: "flex",
            justifyContent: " center",
            maxWidth: "180px",
            margin: "0 24px",
          }}
          primary={subregion}
        />
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
