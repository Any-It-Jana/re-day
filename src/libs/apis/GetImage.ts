import instance from "./Instance";
import { useNavigate } from "react-router-dom";

export async function getWordCloudImage(userToken: string) {
  return instance
    .get("/word-cloud", {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("응답: ", response);
      if (response.status === 200) {
        console.log("RES", response);
        return response.data;
      } else {
        alert("통계를 조회할 수 없습니다.");
        const navigate = useNavigate();
        navigate("/");
      }
    })
    .catch((error) => console.error());
}
