import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import BaseMainCountryItem from "./CountryItem";

interface Props {
  countries: Record<string, any>[] | undefined;
  setCountryName: Dispatch<SetStateAction<string>>;
}

const BaseMainCountryItemList = ({ countries, setCountryName }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer sx={{ maxHeight: "95vh", maxWidth: "95vw" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {countries
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((country) => {
                const { name, subregion, flags, translations } = country ?? {};

                const itemProps = {
                  setCountryName,
                  name,
                  subregion,
                  translations,
                  flags,
                };
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={name.official}>
                    <BaseMainCountryItem {...itemProps} />
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        sx={{ alignSelf: "center" }}
        count={250}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default BaseMainCountryItemList;
