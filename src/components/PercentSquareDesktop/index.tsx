import React from "react";
import { SquarePercentContainer } from "./percentSquare.styles";
import { Typography } from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import CountUp from "react-countup";

interface ISquarePercentDesktop {
  number: number;
  chooseWidth?: number;
  chooseBackgroundColor: string;
  chooseTextColor: string;
}

export const PercentSquareDesktop: React.FC<ISquarePercentDesktop> = ({
  number,
  chooseWidth,
  chooseBackgroundColor,
  chooseTextColor,
}) => {
  const formatAsPercentage = (num: number) => {
    return `${num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;
  };

  return (
    <CountUp
      end={number}
      duration={1.5}
      style={{
        width: chooseWidth ? chooseWidth : "none",
        backgroundColor: chooseBackgroundColor,
        fontFamily: DalegriaFontesEnum.ManualBasic,
        color: chooseTextColor,
        fontSize: "20px",
        padding: "1px 1px",
        marginBottom: '4px'
      }}
      decimals={2}
      formattingFn={formatAsPercentage}
    />
  );
};
