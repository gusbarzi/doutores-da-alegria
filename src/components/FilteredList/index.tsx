import React, { useState } from "react";
import {
  Column,
  FilteredListContainer,
  Input,
  InputContainer,
  ListContainer,
} from "./FilteredList.styles";
import { IFilteredListProps } from "./FilteredList.types";
import { TextContainer, Typography } from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const FilteredList: React.FC<IFilteredListProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((name: string) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const colLength = Math.ceil(filteredData.length / 3);
  const column1 = filteredData.slice(0, colLength);
  const column2 = filteredData.slice(colLength, colLength * 2);
  const column3 = filteredData.slice(colLength * 2, filteredData.length);

  return (
    <FilteredListContainer>
      <InputContainer>
        <TextContainer
          textAlign="left"
          justifyContent="flex-start"
          align="flex-start"
          marginTop={16}
          marginBottom={16}
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasic}
            textColor={DalegriaColorsEnum.Red}
            lineHeight={1}
            fontSize={32}
          >
            Sócios
          </Typography>
        </TextContainer>
        <Input
          type="text"
          placeholder="Digite o nome para filtrar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputContainer>
      <ListContainer>
        <Column>
          {column1.map((name) => (
            <TextContainer textAlign="left" justifyContent="flex-start" align="flex-start">
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Gray}
                lineHeight={1.5}
                textTransform="uppercase"
                fontSize={16}
                key={name}
              >
                {name}
              </Typography>
            </TextContainer>
          ))}
        </Column>
        <Column>
          {column2.map((name, index) => (
            <TextContainer textAlign="left" justifyContent="flex-start" align="flex-start">
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Gray}
                lineHeight={1.5}
                textTransform="uppercase"
                fontSize={16}
                key={index + colLength}
              >
                {name}
              </Typography>
            </TextContainer>
          ))}
        </Column>
        <Column>
          {column3.map((name, index) => (
            <TextContainer textAlign="left" justifyContent="flex-start" align="flex-start">
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Gray}
                lineHeight={1.5}
                textTransform="uppercase"
                fontSize={16}
                key={index + colLength * 2}
              >
                {name}
              </Typography>
              
            </TextContainer>
          ))}
        </Column>
      </ListContainer>
    </FilteredListContainer>
  );
};
