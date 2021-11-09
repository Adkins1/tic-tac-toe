import React, { useState } from "react";
import { Container, Row } from "./BoardStyles";
import { Square } from "../Square";

export const Board = () => {
  const [player, setPlayer] = useState("X");

  return (
    <Container>
      <Row>
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
      </Row>
      <Row>
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
      </Row>
      <Row>
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
      </Row>
    </Container>
  );
};
