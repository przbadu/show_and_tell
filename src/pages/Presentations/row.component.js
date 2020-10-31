import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

export default function PresentationRow({ presentation }) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {presentation.title}
      </TableCell>
      <TableCell align="right">
        <a href={presentation.link} target="_blank" rel="noreferrer">
          View Presentation
        </a>
      </TableCell>
      <TableCell align="right">{presentation.presenter}</TableCell>
      <TableCell align="right">{presentation.creator}</TableCell>
      <TableCell align="right">{presentation.actions}</TableCell>
    </TableRow>
  );
}
