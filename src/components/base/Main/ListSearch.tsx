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
        width: "100%",
        marginTop: "24px",
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
