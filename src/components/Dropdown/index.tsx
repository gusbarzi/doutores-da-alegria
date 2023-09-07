import React, { Children, useState } from "react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
} from "./Dropdown.styles";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { IDropdownProps } from "./Dropdown.types";
import { Typography } from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const Dropdown: React.FC<IDropdownProps> = ({
  children,
  chooseWidth,
  chooseHeaderText,
  chooseHeaderTextColor,
  chooseBackgroundColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer chooseWidth={chooseWidth}>
      <DropdownButton
        onClick={() => setIsOpen(!isOpen)}
        chooseBackgroundColor={chooseBackgroundColor}
      >
        <Typography
          fontFamily={DalegriaFontesEnum.ManualBasic}
          textColor={
            chooseHeaderTextColor
              ? chooseHeaderTextColor
              : DalegriaColorsEnum.Black
          }
          fontSize={24}
          style={{ textShadow: "1px 1px 1px 1px white"}}
        >
          {chooseHeaderText}
        </Typography>
        {isOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
      </DropdownButton>
      {isOpen && <DropdownContent show={isOpen}>{children}</DropdownContent>}
    </DropdownContainer>
  );
};
