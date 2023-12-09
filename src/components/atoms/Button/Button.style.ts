import styled from 'styled-components';

export const StyledButton = styled.button<{
  width: string;
  height: string;
  fontSize: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize}rem;
  padding: ${(props) => (props.width === 'auto' ? '10px' : '0')};
  border-radius: 10px;
`;
