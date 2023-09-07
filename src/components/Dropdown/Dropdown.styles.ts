import styled, { keyframes } from "styled-components";

interface IDropdownStylesProps {
  chooseBackgroundColor?: string;
  chooseWidth?: string;
  show?: boolean;
}

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const DropdownContainer = styled.div<IDropdownStylesProps>`
  width: ${({ chooseWidth }) => chooseWidth};
  user-select: none;
`;

export const DropdownButton = styled.div<IDropdownStylesProps>`
  padding: 15px 20px;
  background-color: ${({ chooseBackgroundColor }) => chooseBackgroundColor};
  border: 1px solid #e9e9e9;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownContent = styled.div<IDropdownStylesProps>`
  padding: 15px 0;

  width: 100%;

  display: ${(props) => (props.show ? "block" : "none")};
  animation: ${(props) => (props.show ? fadeInDown : fadeOutUp)} 1s forwards;
`;