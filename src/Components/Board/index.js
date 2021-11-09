import React, { useState, useEffect } from "react";
import { Container, PlayerParagraph, Wrapper } from "./BoardStyles";
import { Square } from "../Square";

export const Board = () => {
  const [player, setPlayer] = useState("X");
  const [SquareValue, setSquareValue] = useState([]);

  const winScenarios = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const populateTable = () => {
    var nums = [];
    const boardSizeBoard = 9;
    for (let i = 0; i < boardSizeBoard; i++) {
      nums.push("");
    }
    setSquareValue(nums);
  };

  useEffect(() => {
    populateTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    checkWinConditions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

  const checkWinConditions = () => {
    winScenarios.forEach((winCondition) => {
      if (
        SquareValue[winCondition[0]] === "O" &&
        SquareValue[winCondition[1]] === "O" &&
        SquareValue[winCondition[2]] === "O"
      ) {
        populateTable();
        alert("Player O wins!");
      }
      if (
        SquareValue[winCondition[0]] === "X" &&
        SquareValue[winCondition[1]] === "X" &&
        SquareValue[winCondition[2]] === "X"
      ) {
        populateTable();
        alert("Player X wins!");
      }
    });
  };

  return (
    <Container>
      <Wrapper>
        {SquareValue.map((value, index) => (
          <>
            <Square
              SquareValueTable={SquareValue}
              itemId={index}
              setSquareValueTable={setSquareValue}
              key={index}
              player={player}
              setPlayer={setPlayer}
            ></Square>
          </>
        ))}
      </Wrapper>
      <PlayerParagraph>Player: {player}</PlayerParagraph>
    </Container>
  );
};
