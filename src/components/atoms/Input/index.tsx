import React from 'react';
import { Inp } from './Input.style';

type Props = {
  type?: 'text' | 'password';
  name: string;
  width?: string;
  height?: string;
  placeholder?: string;
  value: any;
  onChange: any;
  color?: 'black' | 'orange';
  fontSize?: number;
};

const Input = ({
  type = 'text',
  name,
  width = 'auto',
  height = 'auto',
  placeholder = '',
  value,
  onChange,
  color = 'black',
  fontSize = 1,
}: Props) => {
  return (
    <Inp
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
    />
  );
};

export default Input;
