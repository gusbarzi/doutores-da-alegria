import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const FilteredListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  width: 800px;
  border: 1px solid ${DalegriaColorsEnum.Purple};
  border-radius: 4px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;

  ${breakpoints.higherThan('desktop')} {
    flex-direction: row;
    width: 100%;
  }
`;

export const Column = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 32%;
  margin-right: 1%;

  &:last-child {
    margin-right: 0;
  }
`;
