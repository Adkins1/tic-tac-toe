import React, { useState } from "react";
import { SquareItem } from "../Square/SquareStyles";

export const Square = ({ player, setPlayer }) => {
  const [disabled, setDisabled] = useState(false);
  const [item, setItem] = useState("");

  const toggleItem = () => {
    if (!disabled) {
      if (player === "X") {
        setItem("X");
        setPlayer("O");
      } else {
        setItem("O");
        setPlayer("X");
      }
      setDisabled(true);
    }
  };

  return <SquareItem onClick={toggleItem}>{item}</SquareItem>;
};
