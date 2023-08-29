import { css, styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import { DalegriaFontesEnum } from '../../utils/fontes';

export interface ICustomListItemStyles {
  chooseColor?: string;
  chooseFontFamily?: string;
  chooseFontSize?: number;
  chooseFontColor?: string;
}

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li<ICustomListItemStyles>`
  position: relative;
  padding-left: 10px;
  margin-bottom: 10px;
  text-indent: 15px;
  font-family: ${({ chooseFontFamily }) => chooseFontFamily ? chooseFontFamily : DalegriaFontesEnum.StdLight};
  font-size: ${({ chooseFontSize }) => chooseFontSize ? `${chooseFontSize}px` : '12px'};
  color: ${({ chooseFontColor }) => chooseFontColor ? chooseFontColor : DalegriaColorsEnum.Black};

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0.3em;
    height: 8px;
    width: 8px;
    background: ${({ chooseColor }) => chooseColor ? chooseColor : DalegriaColorsEnum.Yellow};
    border-radius: 2px;
    transform: rotate(45deg);
  }
`;