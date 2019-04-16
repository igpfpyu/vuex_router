import axios from 'axios';
import Vue from "vue";
let baseUrl="";
//dev环境时，baseUrl的地址
if(process.env.NODE_ENV==="development"){
    baseUrl="http://jsonplaceholder.typicode.com";
}else{
    baseUrl=""
}
//
const service=axios.create({
    baseURL:baseUrl,
    headers:{ 'Content-Type': 'application/json; charset=utf-8' },
    timeout:50000,

})
service.interceptors.request.use(config=>{
    console.log(config);
    return config;
},error => reject(error));

export default {
    NetworkPost(url, params){
        return new Promise((resolve, reject)=>{
            service.post(url,params).then(response=>{
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
            service.get(url, {params}).then(response => {
                resolve(response);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

