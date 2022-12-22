import React from "react";
import { FilledButton, OutlinedButton } from "./styles";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
}

export const Button: React.FC<IButtonProps> = ({ text, theme }) => {
  if (theme === "outlined") return <FilledButton>{text}</FilledButton>;
  else return <OutlinedButton>{text}</OutlinedButton>;
};
