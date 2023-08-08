import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const ColorideBackground = styled.div`
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 32px 16px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 10px;
  margin-bottom: 10px;
  text-indent: 15px;
  font-family: ${DalegriaFontesEnum.StdLight};

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0.3em;
    height: 8px;
    width: 8px;
    background: ${DalegriaColorsEnum.LightBlue};
    border-radius: 2px;
    transform: rotate(45deg);
  }
`;
