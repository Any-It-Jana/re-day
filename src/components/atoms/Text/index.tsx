import React from "react";
import { Txt } from "./Text.style";

type Props = {
  style?: any;
  children: React.ReactNode;
  color?: "black" | "white";
  fontSize?: number;
};

const Text = ({ style, children, color = "black", fontSize = 1 }: Props) => {
  return (
    <Txt style={style} color={color} fontSize={fontSize}>
      {children}
    </Txt>
  );
};

export default Text;
