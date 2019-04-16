import axios from 'axios';
import Vue from "vue";
let baseUrl="";
//dev环境时，baseUrl的地址
if(process.env.NODE_ENV==="development"){
    baseUrl="http://jsonplaceholder.typicode.com";
}else{
    baseUrl=""
}
// 拦截器
axios.interceptors.request.use(config=>{
    config.baseURL=baseUrl;
    config.withCredentials=true;//允许携带token ,这个是解决跨域产生的相关问题
    config.timeout=15000;
    let token=sessionStorage.getItem("assess_token");
    config.headers={
        "token":token?token:"",
        "Content-Type": 'application/x-www-form-urlencoded'
    }
    return config;
},error => Promise.reject(error));

export default {
    NetworkPost(url, params){
        return new Promise((resolve, reject)=>{
            axios.post(url,params).then(response=>{
                return response;
            }).then(data=>{
                resolve(data);
            }), error=>{
                reject(error)
            }
        })
    },
    NetworkGet(url, params={}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {params}).then(response => {
                resolve(response);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

