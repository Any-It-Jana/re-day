import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getWordCloudImage } from "../libs/apis/GetImage";
import Text from "../components/atoms/Text";
import { userStore } from "../libs/store/UserStore";

const WordCloudPage = () => {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState(null);
  const { userToken } = userStore();

  useEffect(() => {
    getWordCloudImage(userToken).then((res) => {
      // data에 message 담긴 경우 -> 이미지 생성 중
      if (res.hasOwnProperty("message")) {
        console.log(res.message);
      } else {
        setImgUrl(res.url);
      }
    });
  });

  return (
    <article>
      <Text color="white">Word Cloud</Text>
      {imgUrl ? (
        <img src={imgUrl} alt="word cloud" height={300} width={300} />
      ) : (
        <Text color="white">아직 생성되지 않았습니다.</Text>
      )}
    </article>
  );
};

export default WordCloudPage;
