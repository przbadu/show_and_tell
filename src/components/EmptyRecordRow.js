import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

export default function EmptyRecordRow({ colspan = 10 }) {
  return (
    <TableRow>
      <TableCell colSpan={colspan} component="th" scope="row">
        No records to display
      </TableCell>
    </TableRow>
  );
}
