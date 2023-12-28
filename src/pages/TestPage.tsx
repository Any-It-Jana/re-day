import React, { useEffect } from "react";
import { getSpotifyUri } from "../libs/apis/GetList";
import axios from "axios";
import Text from "../components/atoms/Text";

const TestPage = () => {
  useEffect(() => {
    getSpotifyUri();
  }, []);

  return (
    <div className="App">
      <Text color="white">테스트 페이지</Text>
    </div>
  );
};

export default TestPage;
