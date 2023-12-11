import axios from "axios";

const instance = axios.create({
  baseURL: "https://sl6qp09xxc.execute-api.us-east-2.amazonaws.com/CORS-test",
  timeout: 3000,
});

instance.interceptors.request.use(
  function (config) {
    if (instance.defaults.headers.common["Authorization"] === undefined) {
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("Re-day-token")}`;
    }
    // console.log("aToken", instance.defaults.headers.common["Authorization"]);
    console.log(config.url);
    return config;
  },
  async function (error) {
    return error;
  }
);

export default instance;
