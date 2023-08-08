import React from "react";
import { List, ListItem } from "./customList.styles";
import { ICustomList } from "./customList.types";

export const CustomList: React.FC<ICustomList> = ({ list }) => {
  return (
    <List>
      {list.map((item) => (
        <ListItem
          key={item.itemId}
          chooseColor={item.color}
          chooseFontFamily={item.fontFamily}
          chooseFontSize={item.fontSize}
        >{item.text}</ListItem>
      ))}
    </List>
  );
};