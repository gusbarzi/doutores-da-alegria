import React, { ReactNode } from "react";
import { SquareColoredContainer } from "./SquareColored.styles";

interface ISquareColoredProps {
  children: ReactNode;
  type: "primary" | "outlined";
  backgroundColor?: string;
  borderColor?: string;
  chooseWidth?: number;
}

export const SquareColored: React.FC<ISquareColoredProps> = ({
  children,
  type,
  backgroundColor,
  borderColor,
  chooseWidth
}) => {
  return (
    <SquareColoredContainer
      type={type}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      chooseWidth={chooseWidth}
    >
      {children}
    </SquareColoredContainer>
  );
};
