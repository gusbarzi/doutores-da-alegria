import { styled } from "styled-components";

interface ISquarePercent {
  chooseWidth: number;
  chooseBackgroundColor: string;
}

export const SquarePercentContainer = styled.div<ISquarePercent>`
  width: ${({ chooseWidth }) => `${chooseWidth}px`};
  display: flex;
  background-color: ${({ chooseBackgroundColor }) => `${chooseBackgroundColor}`};;
  padding: 1px 4px;
  margin-bottom: 4px;
`;
