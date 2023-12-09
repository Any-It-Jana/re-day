import styled from "styled-components";

export const Txt = styled.div<{ color: string; fontSize: number }>`
  vertical-align: middle;
  text-align: center;
  color: ${(props) => (props.color === "black" ? "#10346C" : "white")};
  font-size: ${(props) => props.fontSize}rem;
`;
