import { ReactNode } from "react";

export interface IDropdownProps {
  children: ReactNode;
  chooseWidth: string;
  chooseHeaderText: string;
  chooseBackgroundColor?: string;
  chooseHeaderTextColor?: string;
}
