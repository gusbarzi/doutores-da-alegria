import React from "react";
import { SquarePercentContainer } from "./percentSquare.styles";
import { Typography } from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";

interface ISquarePercent {
  text: string;
  chooseWidth: number;
  chooseBackgroundColor: string;
  chooseTextColor: string;
}

export const PercentSquare: React.FC<ISquarePercent> = ({
  text,
  chooseWidth,
  chooseBackgroundColor,
  chooseTextColor,
}) => {
  return (
    <SquarePercentContainer
      chooseWidth={chooseWidth}
      chooseBackgroundColor={chooseBackgroundColor}
    >
      <Typography
        fontFamily={DalegriaFontesEnum.ManualBasic}
        textColor={chooseTextColor}
        lineHeight={1}
        fontSize={16}
      >
        {text}
      </Typography>
    </SquarePercentContainer>
  );
};
