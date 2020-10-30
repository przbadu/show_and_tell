import { Container } from "@material-ui/core";
import React from "react";

import Navbar from "../components/Navbar";
import Presentations from "../components/Presentations";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <Presentations />
      </Container>
    </>
  );
}
