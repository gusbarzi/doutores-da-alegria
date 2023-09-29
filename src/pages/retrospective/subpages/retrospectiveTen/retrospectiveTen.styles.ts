import { DalegriaColorsEnum } from './../../../../utils/colors';
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const RetrospectiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinkPersonal = styled(Link)`
  text-decoration: none;
  color: ${DalegriaColorsEnum.White};

  &:hover {
    color: ${DalegriaColorsEnum.Yellow};
    text-decoration: underline;
  }
`;
