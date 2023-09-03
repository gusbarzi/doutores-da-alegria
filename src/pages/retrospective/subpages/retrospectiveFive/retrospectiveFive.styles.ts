import { DalegriaColorsEnum } from '../../../../utils/colors';
import { DalegriaFontesEnum } from '../../../../utils/fontes';
import { styled } from "styled-components";

interface IRetrospectiveStyles {
  chooseWidth?: number;
  chooseGap?: number;
}

export const RetrospectiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
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

export const OriginalArtTree = styled.img`
  width: 100%;
`;

export const TextDivision = styled.div<IRetrospectiveStyles>`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: ${({ chooseGap }) => chooseGap ? `${chooseGap}px` : '32px'};
`;

export const TextSideDivision = styled.div<IRetrospectiveStyles>`
  width: ${({ chooseWidth }) => chooseWidth ? `${chooseWidth}px` : '100%'};
`

export const PinkBackgroundDesktop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 32px;
  background-color: ${DalegriaColorsEnum.Pink};
`;