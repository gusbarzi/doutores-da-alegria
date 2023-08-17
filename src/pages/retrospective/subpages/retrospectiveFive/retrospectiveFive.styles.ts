import { DalegriaColorsEnum } from '../../../../utils/colors';
import { DalegriaFontesEnum } from '../../../../utils/fontes';
import { styled } from "styled-components";

export const RetrospectiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BackgroundPinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Pink};
  padding: 16px;
`;