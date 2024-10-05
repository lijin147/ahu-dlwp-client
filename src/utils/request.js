//封装axios，做请求处理
//导入axios
// import router from "@/router";
import axios from "axios";
import router from '@/router/index.js'
import { ElMessage } from "element-plus";
//获取token
import { getToken } from './token/index.js'
// import { el } from "element-plus/es/locale";
let token = '';
//创建axios
const request = axios.create({
    //根请求地 \
    baseURL:'http://localhost:8081',
    withCredentials: false,  //跨域是否需要凭证
    timeout: 30000 //超时时间
})
    
//配置请求头的参数类型,和编码格式
axios.defaults.headers['Content-Type'] = 'application/json?charset=utf-8'
//配置请求拦截器
request.interceptors.request.use((config) =>{
    //在请求头上加上token，判断是否需要token
    if(getToken("token")){
        config.headers['Authorization'] = getToken("token");
    }
    return config;},(error) =>{
        //发生异常
        console.log("请求异常：",error);
        return Promise.reject(error);
    })

//配置响应拦截器
request.interceptors.response.use((response) =>{
    //根据响应码做出判断，后端返回的数据 data  status message
    console.log("响应拦截器");
    let status = response.status;
    if(status == 200){
        return response;
    }else if(status == 500){
        ElMessage.error("服务端异常！");
    }else if(status == 401){
        ElMessage.error("没有操作权限！");
    }else if(status == 403){
        ElMessage.error("请重新登录");
        //需要重新登录，跳转到登录页面，清除pinia中的数据
        window.sessionStorage.clear();
        router.push('/login');
    }
    return Promise.reject();
},(error) => {
    ElMessage.error('没有操作权限');
    window.sessionStorage.clear();
    router.push('/login');
    return Promise.reject(error);
}
)

// 导出
export default request;