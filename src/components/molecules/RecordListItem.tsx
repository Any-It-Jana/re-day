import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import { Link } from "react-router-dom";

type Props = {
  date?: string;
  color?: string;
  emotion?: string;
};

// date 형식 변경: 2023_03_31T04_37 -> 2023/03/31 04:37
export const dateFormatting = (timestamp: String) => {
  const timeset = timestamp.split('T');
  const date = timeset[0];
  const time = timeset[1];
  
  return date.replaceAll('_', '/') + ' ' + time.replaceAll('_', ':');;
}

const RecordListItem = ({
  date = "2023-11-11",
  color = "black",
  emotion = "기쁨",
}: Props) => {
  return (
    <Link to={`/detail/${date}`}>
      <ItemBox color={color}>
        <Text color="white">{dateFormatting(date)}</Text>
        {/* <Text color="white">{emotion}</Text> */}
      </ItemBox>
    </Link>
  );
};

const ItemBox = styled.div<{ color: string }>`
  width: 80dvw;
  height: 70px;
  border-radius: 20px;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.color};
`;

export default RecordListItem;
