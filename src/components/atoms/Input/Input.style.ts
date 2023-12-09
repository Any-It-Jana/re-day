import styled from "styled-components";

export const Inp = styled.input<{
  width: string;
  height: string;
  color: string;
  fontSize: number;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 10px;
  color: ${(props) => (props.color === "black" ? "black" : "#10346c")};
  font-size: ${(props) => props.fontSize}rem;
  border: 1px solid black;
  border-radius: 10px;
  &:focus {
    border-color: #10346c;
    outline: 1px solid #10346c;
  }
`;
