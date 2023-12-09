import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import { Link } from "react-router-dom";

type Props = {
  date?: string;
  color?: string;
  emotion?: string;
};

const RecordListItem = ({
  date = "2023-11-11",
  color = "black",
  emotion = "기쁨",
}: Props) => {
  return (
    <Link to={`/detail/${date}`}>
      <ItemBox color={color}>
        <Text color="white">{date}</Text>
        <Text color="white">{emotion}</Text>
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
