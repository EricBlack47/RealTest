import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/testss.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DailyTest from '../views/DailyTest.vue'
import Lists from '../views/Lists.vue'
import RealTest from '../views/RealTest.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/test',
		name: 'test',
		component: Test
	},
	{
		path: '/index',
		name: 'index',
		component: Index
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
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
