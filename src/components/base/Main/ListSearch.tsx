import { Box, TextField } from "@mui/material";
import { ChangeEventHandler } from "react";
import SearchIcon from "../../Icons/Search";

interface Props {
  onChangeQuery:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const BaseMainListSearch = ({ onChangeQuery }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        marginTop: "24px",
        width: "100%",
      }}
    >
      <TextField
        fullWidth
        placeholder={"Search country by name"}
        onChange={onChangeQuery}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
    </Box>
  );
};

export default BaseMainListSearch;
