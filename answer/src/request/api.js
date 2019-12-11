/**   
 * api接口统一管理
 */
import {
	postfromdata
} from './http'

// 接口示例
// export const Upimg=obj=>post('/api/v1/upload',obj)

// 注册
export const PostRegister=obj=>postfromdata('/api/register',obj)
// 登录
export const PostLogin=obj=>postfromdata('/api/login',obj)