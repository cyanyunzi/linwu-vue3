import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosStatic
} from "axios";
import axios, { AxiosError } from "axios";
import { request } from "@/utils/Axios";
import  { BaseResp } from "@/model/BaseModle";
import { ElLoading, ElMessage } from "element-plus";
import { BasePageListResp, BasePageReq, BasePageResp, Result } from "@/model/BaseModle";
import { reactive, ref } from "vue";

export class Request {
  private static axiosInstance: AxiosInstance = Request.initAxios();

  private static initAxios() {
    axios.defaults.baseURL = "/api/";
    const instance = axios.create({
      timeout: 5000 // request timeout
    });
    Request.requestInterceptors(instance);
    Request.responseInterceptors(instance);
    return instance;
  }

  private static requestInterceptors(axiosInstance: AxiosInstance) {
    // request拦截器
    axiosInstance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        console.log(
          "远程请求 url:%s method:%s req:%s",
          config.url,
          config.method,
          JSON.stringify(config.params)
        );
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  static responseInterceptors(axiosInstance: AxiosInstance) {
    // 添加响应拦截器
    axiosInstance.interceptors.response.use(
      function(response) {
        const remoteResp = response.data;
        if (remoteResp === null || remoteResp === undefined) {
          throw new Error("未获取到服务器资源");
        }

        if ("0000" !== remoteResp.respCode) {
          throw new Error(remoteResp.respMsg);
        }
        return remoteResp;
      },
      function(error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }

  private static sendData<T extends BaseResp>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Request.axiosInstance.request(config);
  }


  private static sendList<T extends BaseResp>(config: AxiosRequestConfig): Promise<AxiosResponse<T[]>> {
    return Request.axiosInstance.request(config);
  }

  private static sendPage<T extends BasePageResp, P = BasePageListResp<T>>(config: AxiosRequestConfig): Promise<AxiosResponse<P>> {
    return Request.axiosInstance.request(config);
  }

  static getPageData<T extends BasePageResp>(config: AxiosRequestConfig, clazz: any): Promise<BasePageListResp<any>> {
    return Request.sendPage(config).then((axiosResponse) => {
      const basePageListResp = new BasePageListResp();
      const pageData = reactive(basePageListResp);

      const remotePageResp = axiosResponse;
      const result = remotePageResp.data;

      pageData.pages = result.pages;
      pageData.total = result.total;
      pageData.page = result.page;
      pageData.size = result.size;
      result.list.forEach(item => {
        const resp = Reflect.construct(clazz, []);
        Object.assign(resp, item);
        pageData.list.push(resp);
      });
      return pageData;

    }).catch(error => {
      console.log(error);
      if (error instanceof AxiosError) {
        ElMessage.error(`调用API错误 url:[${config.url}] method:[${config.method}] httpcode:[${error?.response?.status}] msg:[${error?.response?.statusText}]`);
      } else {
        ElMessage.error(error.message);
      }
      return new BasePageListResp();
    });
  }


  static getListData<T extends BaseResp, R = T[]>(config: AxiosRequestConfig, clazz: any): Promise<any> {
    return Request.sendList(config).then((axiosResponse) => {
      const arr: Array<T> = [];
      const listData = reactive(arr);

      axiosResponse.data.forEach(item => {
        const resp = Reflect.construct(clazz, []);
        Object.assign(resp, item);
        listData.push(resp);
      });

      return listData;
    });
  }

  static getData<T extends BaseResp>(config: AxiosRequestConfig, clazz: any): Promise<any> {
     return Request.sendData(config).then((axiosResponse) => {
       const resp = Reflect.construct(clazz, []);
       Object.assign(resp, axiosResponse.data);
      return resp;
    }).catch(error => {
       console.log(error);
       if (error instanceof AxiosError) {
         ElMessage.error(`调用API错误 url:[${config.url}] method:[${config.method}] httpcode:[${error?.response?.status}] msg:[${error?.response?.statusText}]`);
       } else {
         ElMessage.error(error.message);
       }
       return new BaseResp();
     });
  }


}


