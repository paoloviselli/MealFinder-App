import { realpathSync } from "fs";
import styled from "styled-components";

interface TitleProps {
  fontSize: number;
  color: "primary" | "secondary" | "active" | "clickable";
  bold?: boolean;
  light?: boolean;
  align?: string;
  underline?: boolean;
}

export const TitleContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const TitleText = styled.p<TitleProps>`
  font-family: "Roboto";
  margin: ${({ theme }) => theme.spacing.single} 0;
  font-size: ${({ fontSize }) => fontSize}px;

  color: ${({ theme, color }) => {
    switch (color) {
      case "primary": {
        return theme.colors.dark;
      }

      case "secondary": {
        return theme.colors.white;
      }

      case "active": {
        return theme.colors.active;
      }

      case "clickable": {
        return theme.colors.linkBlue;
      }

      default:
        return theme.colors.dark;
    }
  }};

  ${({ underline }) => underline && "text-decoration: underline"};

  ${({ bold, light }) =>
    bold
      ? "font-weight: bold"
      : light
      ? "font-weight: 300"
      : "font-weight: 400"};
`;
