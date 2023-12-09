import React from "react";
import styles from "./Button.module.css";
import { StyledButton } from "./Button.style";

type Props = {
  style?: any;
  width?: string;
  height?: string;
  onClick: any;
  children: React.ReactNode;
  fontSize?: number;
  color?: string;
  type?: string;
};

const Button = ({
  style,
  width = "auto",
  height = "auto",
  onClick,
  children,
  fontSize = 1,
  color = "transparent",
  type = "bg",
}: Props) => {
  return (
    <StyledButton
      className={`${type === "bg" ? styles.bg : styles.border} ${
        color === "transparent"
          ? styles.transparent
          : color === "black"
          ? styles.black
          : styles.white
      }`}
      style={style}
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}>
      {children}
    </StyledButton>
  );
};

export default Button;
