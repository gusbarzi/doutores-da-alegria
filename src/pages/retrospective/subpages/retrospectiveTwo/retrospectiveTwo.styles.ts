import { DalegriaColorsEnum } from '../../../../utils/colors';
import { DalegriaFontesEnum } from '../../../../utils/fontes';
import { styled } from "styled-components";

export const RetrospectiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 12px;
  gap: 8px;
`;

export const LeftText = styled.div`
  display: flex;
`;

export const RightText = styled.div`
  display: flex;
  width: 120px;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 16px;
`;

export const TextDirection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;