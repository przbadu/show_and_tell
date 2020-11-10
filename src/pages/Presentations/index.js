import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container, Fab, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Presentations from "./list.component";
import {
  fetchPresentations,
  searchPresentations,
} from "../../services/firebase";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function PresentationPage() {
  const [keyword, setKeyword] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [presentations, setPresentations] = useState([]);

  useEffect(() => getPresentations(), []);

  const getPresentations = async () => {
    setLoading(true);
    try {
      const response = await fetchPresentations(keyword);

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

  const search = async () => {
    setLoading(true);
    try {
      if (keyword.length !== 0) {
        const response = await searchPresentations(keyword);
        setPresentations(response);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <h1>
      <Navbar
        keyword={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        handleSearch={search}
      />
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
