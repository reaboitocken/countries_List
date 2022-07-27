import { Box, TextField } from "@mui/material";
import { ChangeEventHandler } from "react";
import SearchIcon from "./../Icons/Search";

interface Props {
  onChangeQuery:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const BaseInsuranceListSearchAndFilter = ({ onChangeQuery }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        marginTop: "24px",
      }}
    >
      <TextField
        sx={{ width: "100%" }}
        placeholder={"Поиск"}
        onChange={onChangeQuery}
        className="filter"
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
    </Box>
  );
};

export default BaseInsuranceListSearchAndFilter;
