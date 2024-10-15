import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? '' // 开发环境使用相对路径
      : `https://${window.location.host}/`, // 生产环境使用当前主机的 HTTPS 地址
  withCredentials: true, // 确保发送跨域请求时携带凭证
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  }
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    updateHeaders(config); // 更新请求头
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, status } = response;
    if (status === 200) {
      if (data.status === -45592) {
        // 可在此处理登录过期逻辑，比如重定向到登录页面
        // window.location.href = '/login';
      } else if (data.status && data.status !== 0) {
        // 可以在此处理其他非 0 状态码的情况
      }
      return Promise.resolve(data);
    }
    return Promise.reject(data);
  },
  error => {
    return Promise.reject(error);
  }
);

// 更新headers函数
function updateHeaders(config: InternalAxiosRequestConfig) {
  const userInfo =
    JSON.parse(localStorage.getItem('isg_ha') || '{}')?.userInfo || {};
  const commonHeaders = config.headers || {};

  // 仅当用户信息变化时才更新 headers
  if (commonHeaders['userid'] !== userInfo?.userid) {
    Object.assign(commonHeaders, {
      companyid: userInfo?.companyid,
      reqUserId: userInfo?.userid,
      loginsession: userInfo?.loginsession,
      userDid: userInfo?.did,
      userid: userInfo?.userid
    });
  }

  // 确保 config.headers 保持最新
  config.headers = commonHeaders;
}

// 简单封装请求方法
export const Get = (url: string, config?: InternalAxiosRequestConfig) => {
  return axiosInstance.get(url, config);
};

export const Post = (
  url: string,
  data = {},
  config?: InternalAxiosRequestConfig
) => {
  return axiosInstance.post(url, data, config);
};

export const Delete = (url: string, config?: InternalAxiosRequestConfig) => {
  return axiosInstance.delete(url, config);
};

export default axiosInstance;
