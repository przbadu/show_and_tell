import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PresentationRow from "./row.component";
import EmptyRecordRow from "../../components/EmptyRecordRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(title, link, presenter, creator, actions) {
  return {
    title,
    link,
    presenter,
    creator,
    actions,
  };
}

const rows = [
  createData(
    "Escaping the build trap",
    "https://docs.google.com/presentation/d/1OuFNtVWeh4aXp3p35wFiNTTbYzwv1CSmbnqwikdhY1c/edit#slide=id.g9ef9c231eb_0_48",
    "Mariska",
    "Mariska",
    ""
  ),
];

export default function Presentations({ presentations }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={5} style={{ marginTop: 20 }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Presenter</TableCell>
            <TableCell align="right">Creator</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {presentations.length ? (
            presentations.map((row) => (
              <PresentationRow key={row.id} presentation={row} />
            ))
          ) : (
            <EmptyRecordRow />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
