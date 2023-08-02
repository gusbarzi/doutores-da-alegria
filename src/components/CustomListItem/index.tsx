import React from "react";
import { ListItem, ListItemText, StyledCircleIcon } from "./customListItem.styles";

export interface ICustomListItem {
  text: string;
  width: number;
  height: number;
}

export const CustomListItem: React.FC<ICustomListItem> = ({ text, width, height }) => {
  return (
    <ListItem>
      <StyledCircleIcon width={width} height={height}/>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  )
}