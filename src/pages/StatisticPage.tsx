import React, { useState, useEffect } from "react";
import { getWordCloudImage } from "../libs/apis/GetImage";
import Text from "../components/atoms/Text";
import { userStore } from "../libs/store/UserStore";
import Flex from "../components/atoms/Layout";
import Button from "../components/atoms/Button";
import styled from "styled-components";
import Spinner from "../components/atoms/Spinner";

const StatisticPage = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [canUpdate, setCanUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { userToken } = userStore();

  const updateWordCloud = () => {
    return;
  };

  useEffect(() => {
    getWordCloudImage(userToken).then((res) => {
      console.log(res);
      // data에 message 담긴 경우 -> 이미지 생성 중
      setIsLoading(false);
      if (res.statusCode === 200) {
        setImgUrl(res.body.url);
        setIsUpdating(res.body.img_making);
        setCanUpdate(res.body.update_exist);
        // setIsUpdating(true);
        // setCanUpdate(true);
      }
    });
  });

  return (
    <article className="whiteBackground recordList">
      <Head>통계</Head>
      <Section>
        <Flex width="100%">
          <Text fontSize={1.5}>Word Cloud</Text>
        </Flex>
        {isLoading ? (
          <Flex width="100%" height="calc(100dvw - 80px)" align="center">
            <Spinner color="dark" />
          </Flex>
        ) : imgUrl ? (
          <Flex direction="column" gap="20px">
            <WordCloud src={imgUrl} alt="Word Cloud" />
            {canUpdate && (
              <Button color="black" onClick={updateWordCloud}>
                최근 일기 적용하기
              </Button>
            )}
            {isUpdating && (
              <Text fontSize={1.2}>최근 일기를 적용해 생성 중...</Text>
            )}
          </Flex>
        ) : (
          <Text>녹음이 없거나 생성할 수 없어요...</Text>
        )}
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
