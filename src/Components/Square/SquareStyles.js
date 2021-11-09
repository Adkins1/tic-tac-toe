import styled from "styled-components";

export const SquareItem = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  background: #e6f2ff;
  border: 1px solid #004d99;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  &:active {
    background: #b3d9ff;
  }
`;
