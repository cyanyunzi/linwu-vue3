import axios from "axios";
import type { BaseReq } from "@/model/BaseModle";
import { DictPageResp } from "@/model/DictModel";

axios.defaults.baseURL = "/api/";

//创建axios实例
export const request = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});


// 添加响应拦截器
request.interceptors.response.use(function(response) {
  const remoteResp = response.data;
  const respData = remoteResp.data;
  console.log("远程:",remoteResp);

  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function(error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});




