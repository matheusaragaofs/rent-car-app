import React from "react";
import { FilledButton, OutlinedButton } from "./styles";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

export const Button: React.FC<IButtonProps> = ({ text, theme, className }) => {
  if (theme === "outlined")
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;
};
