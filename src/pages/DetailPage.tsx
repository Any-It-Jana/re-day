import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecordDetail } from "../libs/apis/GetList";
import Text from "../components/atoms/Text";
import { dateFormatting } from "../components/molecules/RecordListItem";
import Spinner from "../components/atoms/Spinner";
import styled from "styled-components";
import { userStore } from "../libs/store/UserStore";
import Flex from "../components/atoms/Layout";

const DetailPage = () => {
  const { dateKey } = useParams();
  const [txt, setTxt] = useState([]);
  const [colorCode, setColorCode] = useState("white");
  const [isLoading, setIsLoading] = useState(true);
  const [graphNums, setGraphNums] = useState<any[]>([]);
  const { userToken } = userStore();

  const EMOTIONS = ["긍정", "부정", "혼합", "중립"];

  useEffect(() => {
    getRecordDetail(userToken, dateKey as string).then((res) => {
      if (res.statusCode === 200) {
        // console.log("detail", res.body.emotionScore);
        setTxt(res.body.text.split("."));
        setColorCode(res.body.colorCode);

        let temp = [];
        temp.push({ val: res.body.emotionScore.Positive, color: "#FF5050" });
        temp.push({ val: res.body.emotionScore.Negative, color: "#5050FF" });
        temp.push({ val: res.body.emotionScore.Mixed, color: "#B4B4B4" });
        temp.push({ val: res.body.emotionScore.Neutral, color: "#50FF50" });
        setGraphNums(temp);

        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <article className="whiteBackground">
        <Text color="black" fontSize={1.3}>
          {dateFormatting(dateKey as string)}
        </Text>
        <Spinner color="dark" />
      </article>
    );
  }
  return (
    <Article color={colorCode} className="recordList">
      <Head>
        <Text color="white" fontSize={1.3}>
          {dateFormatting(dateKey as string)}
        </Text>
      </Head>

      <iframe
        title="spotify"
        style={{ borderRadius: "10px" }}
        src="https://open.spotify.com/embed/track/7jPCPDYoiaKeK7cgNGpIzq?utm_source=generator"
        width="100%"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />

      <GraphSection>
        <GraphWrapper>
          <Flex height="100%" direction="column" align="space-around">
            {EMOTIONS.map((e) => {
              return <Text key={`GraphTitle_${e}`}>{e}</Text>;
            })}
          </Flex>
          <GraphBarWrapper>
            {graphNums.map((e, idx) => {
              return (
                <Flex key={`GraphBar_${idx}`} width="100%" gap="10px">
                  <GraphBar width={`${e.val * 100}%`} color={e.color} />
                  <Text fontSize={0.8}>{Math.round(e.val * 100)}%</Text>
                </Flex>
              );
            })}
          </GraphBarWrapper>
        </GraphWrapper>
        <GraphCaption>
          긍정을 분홍, 부정을 파랑, 중립을 초록, 혼합을 흰색에 대응시킨 다음 RGB
          체계를 이용해 색상 코드를 추출
        </GraphCaption>
      </GraphSection>

      <TextWrapper>
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
      </TextWrapper>
    </Article>
  );
};

const Article = styled.article<{ color: string }>`
  background-color: ${(props) => props.color};
  gap: 30px;
`;
const Head = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid white;
`;
const GraphSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const GraphWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: 300px;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
`;
const GraphBarWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-left: 1px solid #eee;
  padding-left: 10px;
`;
const GraphBar = styled.div<{ width: string; color: string }>`
  width: ${(props) => props.width};
  height: 50px;
  background-color: ${(props) => props.color};
`;
const GraphCaption = styled.div`
  text-align: left;
  color: #eee;
  font-size: 0.7rem;
`;
const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default DetailPage;
