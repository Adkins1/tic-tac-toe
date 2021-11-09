import React, { useState } from "react";
import { SquareItem } from "../Square/SquareStyles";

export const Square = ({
  setSquareValueTable,
  SquareValueTable,
  player,
  setPlayer,
  itemId,
}) => {
  const toggleItem = () => {
    if (SquareValueTable[itemId] !== "X" && SquareValueTable[itemId] !== "O") {
      if (player === "X") {
        SquareValueTable[itemId] = "X";
        setSquareValueTable(SquareValueTable);
        setPlayer("O");
      } else {
        SquareValueTable[itemId] = "O";
        setSquareValueTable(SquareValueTable);
        setPlayer("X");
      }
      console.log(SquareValueTable);
    }
  };

  return (
    <>
      <SquareItem onClick={toggleItem}>{SquareValueTable[itemId]}</SquareItem>
    </>
  );
};
