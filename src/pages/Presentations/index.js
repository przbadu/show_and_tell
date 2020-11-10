import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container, Fab, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Presentations from "./list.component";
import { fetchPresentations } from "../../services/firebase";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function PresentationPage() {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [presentations, setPresentations] = useState([]);

  useEffect(() => getPresentations(), []);

  const getPresentations = async () => {
    setLoading(true);
    try {
      const response = await fetchPresentations();
      let fbData = [];
      response.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        fbData.push(data);
      });
      setPresentations(fbData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <h1>
      <Navbar />
      <Container>
        <Presentations loading={loading} presentations={presentations} />
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={() => history.push("/presentations/new")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </Container>
    </h1>
  );
}
