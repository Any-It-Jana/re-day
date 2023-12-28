import React, { useState, useEffect } from "react";
import { getWordCloudImage } from "../libs/apis/GetImage";
import Text from "../components/atoms/Text";
import { userStore } from "../libs/store/UserStore";
import Flex from "../components/atoms/Layout";
import Button from "../components/atoms/Button";
import styled from "styled-components";
import Spinner from "../components/atoms/Spinner";
import { getCheerList } from "../libs/apis/Cheer";

const StatisticPage = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [canUpdate, setCanUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cheerList, setCheerList] = useState([]);
  const { userToken } = userStore();

  const updateWordCloud = () => {
    return;
  };
  const cheerUp = () => {
    return;
  };

  useEffect(() => {
    getWordCloudImage(userToken).then((res) => {
      // data에 message 담긴 경우 -> 이미지 생성 중
      setIsLoading(false);
      console.log(res.body);
      if (res.statusCode === 200) {
        setImgUrl(res.body.url);
        setIsUpdating(res.body.img_making);
        setCanUpdate(res.body.update_exist);
        // setIsUpdating(true);
        // setCanUpdate(true);
      }
    });
    getCheerList(userToken).then((res) => {
      if (res.statusCode === 200) {
        setCheerList(res.body);
      }
    });
  }, []);

  return (
    <article className="whiteBackground recordList">
      <Head>통계</Head>
      <Section>
        <Flex width="100%">
          <Text fontSize={1.5}>Word Cloud</Text>
        </Flex>
        <Flex direction="column" gap="20px">
          <Flex width="100%" height="calc(100dvw - 80px)" align="center">
            {isLoading ? (
              <Spinner color="dark" />
            ) : imgUrl ? (
              <WordCloud src={imgUrl} alt="Word Cloud" />
            ) : (
              <Text>생성된 워드클라우드가 없어요</Text>
            )}
          </Flex>
          {canUpdate && (
            <Button color="black" onClick={updateWordCloud}>
              최근 일기 적용하기
            </Button>
          )}
          {isUpdating && (
            <Text fontSize={1.2}>최근 일기를 적용해 생성 중...</Text>
          )}
        </Flex>
      </Section>
      <Section>
        <Flex width="100%">
          <Text fontSize={1.5}>공감 글귀</Text>
        </Flex>
        <Flex width="100%" direction="column" gap="10px">
          {cheerList.map((e: any) => {
            return (
              <Flex
                key={`CheerItem_${e.text}`}
                width="100%"
                align="space-between">
                <Flex width="50dvw">
                  <Text>{e.text}</Text>
                </Flex>
                <Flex gap="10px">
                  <Text>{e.likeCount}</Text>
                  <Button color="black" onClick={cheerUp}>
                    <img src="/thumb_up.svg" />
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Section>
    </article>
  );
};

const Head = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #ccc;
  color: #10346c;
`;
const Section = styled.section`
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px #ccc;
  padding: 20px;
`;
const WordCloud = styled.img`
  width: calc(100dvw - 80px);
  height: calc(100dvw - 80px);
  object-fit: contain;
  /* border: 1px solid #eee; */
`;

export default StatisticPage;
