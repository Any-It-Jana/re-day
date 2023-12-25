import instance from "./Instance";
import axios from "axios";

export async function uploadText(email: string, dateKey: string, text: string) {
  return instance
    .post("/analyze/callGPT", { email: email, dateKey: dateKey, text: text }, {
        'headers': {
          Authorization: `Bearer ${localStorage.getItem('Re-day-token')}`,
          "Content-Type": "application/json"
        }
    })
    .then((response) => {
      console.log("RESPONSE", response);
      if (response.data.statusCode === 200) {
        console.log("callGPT", response.data.response);
      }
      return response.data;
    })
    .catch((error) => {
      console.error("ERROR", error);
      return error.response.data;
    });
}

export async function createPresinedURL(file: File) {
  return instance
    .post(
      "/presigned",
      { filename: file.name }
    )
    .then((response) => {
      const presignedUrl = response.data; // 여기서 S3 접근 url 확보
      console.log(presignedUrl);
      uploadAudioToS3(presignedUrl.body, file); // 확보한 url 이용하여 파일 업로드 함수 수행
    })
    .catch((error) => {
      console.error(error);
      return error.response.data;
    });
}

// 파일 업로드 수행 함수
async function uploadAudioToS3(url: string, file: File) {
  // const formData = new FormData();
  // formData.append('audio-file', file);
  axios
    .put(url, file, {
      headers: {
        'Content-Type': 'audio/webm',
      }
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}
