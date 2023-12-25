import axios from "axios";

const instance = axios.create({
  baseURL: "https://sl6qp09xxc.execute-api.us-east-2.amazonaws.com/TEST-TEXT",
  // baseURL: "https://d26pcu9btq324o.cloudfront.net/api",
  timeout: 10000,
});

instance.interceptors.request.use(
  function (config) {
    // console.log(instance.defaults.headers.common["Authorization"]);
    // if (instance.defaults.headers.common["Authorization"] === undefined) {
    //   instance.defaults.headers.common[
    //     "Authorization"
    //   ] = `Bearer ${localStorage.getItem("Re-day-token")}`;
    //   console.log("Undefined Authorization, So set now!");
    // }
    // else {
    //   console.log("Doesn't need to set Authorization");
    // }
    if (config.headers.Authorization === undefined) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "Re-day-token"
      )}`;
      console.log("Undefined Authorization, So set now!");
    } else {
      console.log("Doesn't need to set Authorization");
    }
    if (config.method === "get") {
      config.timeout = 12000;
    }
    // console.log(config.url);
    // console.log("aToken", instance.defaults.headers.common["Authorization"]);
    // console.log("aToken", config.headers.Authorization);
    return config;
  },
  async function (error) {
    return error;
  }
);

export default instance;
