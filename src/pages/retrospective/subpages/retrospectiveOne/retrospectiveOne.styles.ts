import { DalegriaColorsEnum } from './../../../../utils/colors';
import { DalegriaFontesEnum } from './../../../../utils/fontes';
import { styled } from "styled-components";

export const DivisorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const LeftTextFirstStanza = styled.div`
  display: flex;
  margin-left: 15px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const RightTextFirstStanza = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 8px;
  text-transform: uppercase;
`;

export const SecondStanzaDivisor = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TwoHundredContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftTextSecondStanza = styled.div`
  display: flex;
  width: 120px;
  margin-left: 20px;
  margin-bottom: 65px;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: right;
`;

export const RightTextSecondStanza = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 8px;
  text-transform: uppercase;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
