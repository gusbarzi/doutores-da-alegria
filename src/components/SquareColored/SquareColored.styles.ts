import { css, styled } from "styled-components";

interface ISquareStyles {
  type: string;
  backgroundColor?: string;
  borderColor?: string;
  chooseWidth?: number;
}

export const SquareColoredContainer = styled.div<ISquareStyles>`
  ${({ type, backgroundColor, chooseWidth }) => type === "primary" && css`
    background-color: ${backgroundColor};
    padding: 16px;
    width: ${chooseWidth ? `${chooseWidth}px` : ""};
  `}

  ${({ type, borderColor, chooseWidth }) => type === "outlined" && css`
    background-color: transparent;
    border: 2px solid ${borderColor};
    padding: 12px 16px;
    width: ${chooseWidth ? `${chooseWidth}px` : ""};
  `}  
`;