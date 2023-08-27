import React, { ReactNode } from "react";
import { SquareColoredContainer } from "./SquareColored.styles";

interface ISquareColoredProps {
  children: ReactNode;
  type: "primary" | "outlined";
  backgroundColor?: string;
  borderColor?: string;
  chooseWidth?: number;
  style?: React.CSSProperties | undefined;
}

export const SquareColored: React.FC<ISquareColoredProps> = ({
  children,
  type,
  backgroundColor,
  borderColor,
  chooseWidth,
  style
}) => {
  return (
    <SquareColoredContainer
      type={type}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      chooseWidth={chooseWidth}
      style={style}
    >
      {children}
    </SquareColoredContainer>
  );
};
