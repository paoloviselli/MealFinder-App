import React from "react";

import { TitleText, TitleContainer } from "./styles";

export interface TextProps {
  fontSize: number;
  color: "primary" | "secondary" | "active" | "clickable";
  bold?: boolean;
  light?: boolean;
  align?: string;
  underline?: boolean;
}

const Text: React.FunctionComponent<TextProps> = ({
  align = "left",
  bold,
  children,
  color,
  fontSize,
  light,
  underline,
}) => {
  return (
    <TitleContainer>
      <TitleText
        align={align}
        bold={bold}
        color={color}
        fontSize={fontSize}
        light={light}
        underline={underline}
      >
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Text;
