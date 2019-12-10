import axios from 'axios';
import QS from 'qs'
// 请求域名
// axios.defaults.baseURL = 'http://api.ceshixia.com';
axios.defaults.timeout = 100000;
// json方式发送
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';


// 响应拦截器
// axios.interceptors.response.use(response => {
//   if (response.status === 200) {
// 	    console.log('errstatus---200')
//     if (response.data.code === 511) {
//       // 未授权调取授权接口
// 	  console.log('errcode---511')
//     } else if (response.data.code === 510) {
//       // 未登录跳转登录页
// 	  console.log('errcode---510')
//     } else {
//       return Promise.resolve(response)
//     }
//   } else {
//     return Promise.reject(response)
//   }
// }, error => {
// 	console.log('errcode---err')
//  
// })
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url,params){
	return new Promise((resolve,reject)=>{
		axios.get(url,{
			params:params
		}).then(res=>{
			resolve(res.data);
		}).catch(err=>{
			reject(err.data)
		})
	})
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
// export function post(url, params) {
//     return new Promise((resolve, reject) => {
//          axios.post(url, QS.stringify(params))
//         .then(res => {
//             resolve(res.data);
//         })
//         .catch(err =>{
//             reject(err.data)
//         })
//     });
// }
export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}
export function postfromdata(url,params){
	// formdata方式发送
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
	return new Promise((resolve, reject) => {
         axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}
