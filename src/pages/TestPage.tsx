import React, { useEffect } from "react";
import { getSpotifyUri } from "../libs/apis/GetList";
import Text from "../components/atoms/Text";
import { getCheerList } from "../libs/apis/Cheer";

const TestPage = () => {
  useEffect(() => {
    getSpotifyUri().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <Text color="white">테스트 페이지</Text>
    </div>
  );
};

export default TestPage;
