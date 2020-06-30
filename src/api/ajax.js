import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
  if(type==='GET'){
    return axios.get(url,{params:data})
  }else
    return axios.post(url,data)
}
export const jsonp = (url, callback) => {
  if(!url){
    console.error('Axios.JSONP 至少需要一个url参数!')
    return;
  }
  return new Promise((resolve,reject) => {
    // 此处将回调函数名加入 window, 并传入 Promise.resolve
    window[callback] = (result) => {
        resolve(result)
    }
    // 创建跨域请求
    const JSONP=document.createElement("script");
    JSONP.type="text/javascript";
    JSONP.src=`${url}`;
    document.getElementsByTagName("head")[0].appendChild(JSONP);
    setTimeout(() => {
        document.getElementsByTagName("head")[0].removeChild(JSONP)
    },500)
  })
}