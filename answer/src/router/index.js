import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DailyTest from '../views/DailyTest.vue'
import Lists from '../views/Lists.vue'
import RealTest from '../views/RealTest.vue'
import MyCollection from '../views/MyCollection.vue'
import QuestionDetail from '../views/QuestionDetail.vue'
import QuestionDetail2 from '../views/QuestionDetail2.vue'
import ErrowList from '../views/ErrowList.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'index',
		component: Index
	},
	{
		path: '/extension',
		name: 'home',
		component: Home
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/dailytest',
		name: 'dailytest',
		component: DailyTest
	},
	{
		path: '/lists',
		name: 'lists',
		component: Lists
	},
	{
		path: '/realtest',
		name: 'realtest',
		component: RealTest
	},
	{
		path: '/mycollection',
		name: 'mycollection',
		component: MyCollection
	},
	{
		path: '/questiondetail',
		name: 'questiondetail',
		component: QuestionDetail
	},
	{
		path: '/questiondetail2',
		name: 'questiondetail2',
		component: QuestionDetail2
	},
	{
		path: '/errowlist',
		name: 'ErrowList',
		component: ErrowList
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
