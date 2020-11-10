import { CircularProgress, TableCell, TableRow } from "@material-ui/core";
import React from "react";

export default function LoadingRow({ presentation }) {
  return (
    <TableRow>
      <TableCell colSpan={6} component="th" scope="row" align="center">
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
}
