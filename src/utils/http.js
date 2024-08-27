import axios from "axios";
import { showDialog } from "vant";

import { useCounterStore } from "@/stores/useUserInfo";
/**
 * 正式 http 请求封装
 */
// 创建 Axios 实例
const http = axios.create({
  baseURL: import.meta.env.DEV ? "/cockpit" : "https://cockpit.ycbrain.com/cockpit",
  timeout: 20000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const useCounter = useCounterStore();
    
    console.log(useCounter.userToken, "useCounter.userToken");
    // // 配置请求头
    config.headers["x-auth-token"] = useCounter.userToken;
    // 仅在生产环境中动态更改 baseURL
    return config;
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // console.log(response.headers, "response.headers");
    const useCounter = useCounterStore();
    // 登录的token失效过期
    if (response.data.code === "10001") {
      // 清空token
      useCounter.setToken("");
      showDialog({
        message: response.data.msg,
      }).then(() => {
        // 网页向小程序 postMessage 消息
        dd.postMessage({ quit: true });
      });
    }
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    console.error("响应拦截器拦截到错误", error.message);
    // 可以根据error.response做更详细的处理，例如根据状态码进行特定操作
    return Promise.reject(error);
  }
);
export default http;
