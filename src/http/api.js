import http from "./http.js"
const oaIp = "http://www.laomengx.com/mock/5cac4ea03e94b50da7d7c5de";
// 
const getArticalLists = () => { return (params) => { return http.get(oaIp, "/articalList", params) } }
export {
    getArticalLists
}