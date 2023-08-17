import { css, styled } from "styled-components";

interface ISquareStyles {
  type: string;
  backgroundColor?: string;
  borderColor?: string;
}

export const SquareColoredContainer = styled.div<ISquareStyles>`
  ${({ type, backgroundColor }) => type === "primary" && css`
    background-color: ${backgroundColor};
    padding: 16px
  `}

  ${({ type, borderColor }) => type === "outlined" && css`
    background-color: transparent;
    border: 2px solid ${borderColor};
    padding: 12px 16px;
  `}  
`;