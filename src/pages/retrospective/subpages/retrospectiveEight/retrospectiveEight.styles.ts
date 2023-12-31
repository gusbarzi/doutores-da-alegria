import breakpoints from '../../../../utils/breakpoints';
import { DalegriaColorsEnum } from '../../../../utils/colors';
import { styled } from "styled-components";

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
  position: relative;
  padding: 16px;

  ${breakpoints.higherThan("desktop")} {
    padding: 24px 40px;
  }
`;

export const BlueBox = styled.div`
  width: 450px;
  position: absolute;
  right: 580px;
  bottom: -610px;
`;