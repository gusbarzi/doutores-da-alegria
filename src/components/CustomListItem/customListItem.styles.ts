import { styled } from "styled-components";
import { ReactComponent as LosangoIcon } from "../../../public/assets/losangulo.svg"
import { DalegriaFontesEnum } from "../../utils/fontes";

export interface ICustomListItemStyles {
  height: number;
  width: number;
}

export const StyledCircleIcon = styled(LosangoIcon)<ICustomListItemStyles>`
  height: ${({ height }) => height && `${height}px`};
  width: ${({ width }) => width && `${width}px`};
`;

export const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ListItemText = styled.span`
  margin-left: -8px;
  text-indent: 16px;
  font-family: ${DalegriaFontesEnum.StdLight};
  font-size: 20px;
`;