import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken, getTenant, getUserId } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  // withCredentials: false, // true 跨域请求时发送 cookies
  // timeout: 5000 // request timeout
  timeout: 30000
});

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers["tenant"] = getTenant();
    config.headers["userId"] = getUserId();
    if (store.getters.token) {
      config.headers["Authorization"] = getToken(); // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data;
    if (response.status === 401 || res.status === 40101) {
      MessageBox.confirm(
        "你已被登出，可以取消继续留在该页面，或者重新登录",
        "确定登出",
        {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        store.dispatch("FedLogOut").then(() => {
          location.reload(); // 为了重新实例化vue-router对象 避免bug
        });
      });
      return Promise.reject("error");
    }
    if (res.status === 40301) {
      Message({
        message: "当前用户无相关操作权限！",
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject("error");
    }
    if (res.status === 40001) {
      Message({
        message: "账户或密码错误！",
        type: "warning"
      });
      return Promise.reject("error");
    }
    if (response.status !== 200 && res.status !== 200) {
      Message({
        message: res.message,
        type: "error",
        duration: 5 * 1000
      });
    } else {
      return response.data;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
