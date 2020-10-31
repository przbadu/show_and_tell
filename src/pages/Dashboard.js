import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container, Fab, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Navbar from "../components/Navbar";
import Presentations from "../components/Presentations";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Navbar />
      <Container>
        <Presentations />
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={() => history.push("/presentations/new")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </Container>
    </>
  );
}
