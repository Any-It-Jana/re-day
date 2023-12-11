import axios from "axios";

export async function createPresinedURL(file: File) {
  axios
    .post(
      "https://sl6qp09xxc.execute-api.us-east-2.amazonaws.com/CORS-test/presigned",
      { filename: file.name }
    )
    .then((response) => {
      const presignedUrl = response.data; // 여기서 S3 접근 url 확보
      console.log(presignedUrl);
      uploadAudioToS3(presignedUrl.body, file); // 확보한 url 이용하여 파일 업로드 함수 수행
    })
    .catch((error) => console.error(error));
}

// 파일 업로드 수행 함수
async function uploadAudioToS3(url: string, file: File) {
  axios
    .put(url, file)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}
