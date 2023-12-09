import React, { useRef } from 'react';
import { styled } from 'styled-components';
import Button from '../Button';

type Props = {
  onChange: (e: any) => void;
  multiple?: boolean;
  width?: string;
  height?: string;
};

const ImageUploader = ({
  onChange,
  multiple = true,
  width = '200px',
  height = '200px',
}: Props) => {
  const inpElement = useRef<HTMLInputElement>(null);

  return (
    <Button
      style={{
        flex: '0 0 auto',
      }}
      color="grey"
      width={width}
      height={height}
      onClick={() => {
        inpElement.current?.click();
      }}
    >
      클릭해서
      <br />
      업로드
      <Inp
        ref={inpElement}
        type="file"
        accept="image/*"
        name="images"
        onChange={onChange}
        multiple={multiple}
      ></Inp>
    </Button>
  );
};

const Inp = styled.input`
  display: none;
`;

export default ImageUploader;
