import axios from "axios";
import qs from "qs";


//允许跨域
//默认axios不发送cookie，需要全局设置以下项，允许跨域发送cookie。
axios.defaults.withCredentials = true;
//全局请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
})
//全局响应拦截器
axios.interceptors.response.use(function (response) {
    //如果状态吗正常直接返回data中的数据
    if (response && response.status === 200) {
        if (response.data && response.data.code === "01") {
            if (response.data.version && (response.data.version == '1.0.0')) {
                return Promise.resolve({
                    code: -100,
                    msg: "系统出错，请检查‘服务商编号’与‘机构商标号’填写是否正确！",
                });
            } else {
                localStorage.setItem("isLogin", "0");
                setTimeout(() => {
                    location.reload();
                }, 100);
                return {
                    code: -103,
                    msg: "用户过期，请重新登录"
                };
            }
        }
        return response.data;
    } else {
        return {
            code: -102,
            msg: "HTTP状态码：" + response.status + "异常"
        };
    }
}, function (error) {
    //请求超时
    if (error.code == "ECONNABORTED") {
        // return Promise.reject();
        return Promise.resolve({
            code: -100,
            msg: "请求超时,请稍候再试！",
        });
    } else if (error.code == undefined) {
        return Promise.resolve({
            code: -104,
            msg: "请检查网络！",
        });
    } else {
        return Promise.resolve({
            code: -101,
            msg: "未知错误！ERROR_CODE:" + error.code,
        });
    }
})
export default {
    merpost: function (baseURL, url, data) {
        return axios({
            method: "post",
            url: url,
            baseURL: baseURL,
            data: data,
            timeout: 10000,
            headers: {
                "X-requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        })
    },
    post: function (baseURL, url, data) {
        return axios({
            method: "post",
            url: url,
            baseURL: baseURL,
            data: qs.stringify(data),
            timeout: 10000,
            headers: {
                "X-requested-With": "XMLHttpRequest",
                //使用form表单进行数据交互
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        })
    },
    jsonGet: function (baseURL, url, params) {
        return axios({
            method: "GET",
            url: url,
            baseURL: baseURL,
            params: params,
            // data: params,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    get: function (baseURL, url, params) {
        return axios({
            method: "GET",
            url: url,
            baseURL: baseURL,
            params: params,
            timeout: 10000,
            headers: {
                "X-requested-With": "XMLHttpRequest"
            }
        })
    },
    delete: function (baseURL, url, params) {
        return axios({
            method: "DELETE",
            url: url,
            baseURL: baseURL,
            params: params,
            timeout: 10000,
            // headers: {
            //           "X-requested-With": "XMLHttpRequest"
            // }
        })
    },
    put: function (baseURL, url, params) {
        return axios({
            method: "PUT",
            url: url,
            baseURL: baseURL,
            params: params,
            timeout: 10000,
            // headers: {
            //           "X-requested-With": "XMLHttpRequest"
            // }
        })
    },
    patch: function (baseURL, url, params) {
        return axios({
            method: "PATCH",
            url: url,
            baseURL: baseURL,
            // params: params,
            data: qs.stringify(params),
            timeout: 10000,
            // headers: {
            //     "Content-Type": ""
            // }
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            //使用form表单进行数据交互
            // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            // "Content-Type": "application/json;charset=UTF-8"
            // },
        })
    },
    delete: function (baseURL, url, params) {
        return axios({
            method: "DELETE",
            url: url + '/' + params,
            baseURL: baseURL,
            // params: params,
            timeout: 10000,
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            //使用form表单进行数据交互
            // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            // "Content-Type": "application/json;charset=UTF-8"
            // },
        })
    }
}