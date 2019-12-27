/**   
 * api接口统一管理
 */
import {
	postfromdata,
	get
} from './http'

// 接口示例
// export const Upimg=obj=>post('/api/v1/upload',obj)

// 注册
export const PostRegister=obj=>postfromdata('/api/register',obj)
// 登录
export const PostLogin=obj=>postfromdata('/api/login',obj)
// 查询题目
export const GetDailyTest=obj=>get('/api/oneday',obj)
// 收藏题目
export const GetAddcollection=obj=>get('/api/addcollection',obj)
// 取消收藏
export const GetCancelcollection=obj=>get('/api/deletcollection',obj)
// 请求真题列表
export const GetRealTestList=obj=>get('/api/queryrecord',obj)
// 根据真题名字请求真题
export const GetRealTest=obj=>get('/api/getquestion',obj)
// 保存当前题目进度
export const PostRecord=obj=>postfromdata('/api/addrecord',obj)
// 查询当前进度
export const GetRecord=obj=>get('/api/queryrecords',obj)