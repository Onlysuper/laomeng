import http from "./http.js"
const oaIp = "http://45.40.195.222/mock/5cac4ea03e94b50da7d7c5de";
const getArticleLists = () => { return (params) => { return http.get(oaIp, "/articleList", params) } }
const getArticleDetail = () => { return (params) => { return http.get(oaIp, "/article/detail", params) } }
export {
    getArticleLists,
    getArticleDetail
}