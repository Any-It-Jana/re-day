import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecordDetail } from "../libs/apis/GetList";
import Text from "../components/atoms/Text";
import { dateFormatting } from "../components/molecules/RecordListItem";
import Spinner from "../components/atoms/Spinner";
import styled from "styled-components";
import { userStore } from "../libs/store/UserStore";

const DetailPage = () => {
  const { dateKey } = useParams();
  const [txt, setTxt] = useState([]);
  const [colorCode, setColorCode] = useState("white");
  const [isLoading, setIsLoading] = useState(true);
  const { userToken } = userStore();

  useEffect(() => {
    getRecordDetail(userToken, dateKey as string).then((res) => {
      console.log("detail", res);
      setTxt(res.body.text.split("."));
      setColorCode(res.body.colorCode);
      setIsLoading(false);
    });
  }, []);

  return (
    <Article color={colorCode}>
      <Text color={isLoading ? "black" : "white"} fontSize={1.3}>
        {dateFormatting(dateKey as string)}
      </Text>
      {isLoading ? (
        <Spinner color="dark" />
      ) : (
        <Div>
          {txt.map((text: string, idx: number) => {
            return (
              <Text
                color={isLoading ? "black" : "white"}
                key={`${dateKey}_${idx}`}
                fontSize={1.2}>
                {text}
              </Text>
            );
          })}
        </Div>
      )}
    </Article>
  );
};

const Article = styled.article<{ color: string }>`
  background-color: ${(props) => props.color};
  gap: 50px;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default DetailPage;
