import styled from "styled-components";

export const SquareItem = styled.div`
  display: flex;
  min-width: 32%;
  min-height: 33%;
  background: #e6f2ff;
  border: 1px solid #80bfff;
  font-size: 6rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  align-items: center;
  justify-content: center;
  &:active {
    background: #b3d9ff;
  }
`;
