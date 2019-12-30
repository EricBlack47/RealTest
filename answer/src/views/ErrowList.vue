<template>
	<div style="overflow-y: scroll;">
		<Bg3>
			<van-row>
				<van-col span="4">
					<div class="back_icon" @click="go_back">
						<van-icon name="arrow-left" color="#ffffff" size="0.6rem" />
					</div>
				</van-col>
				<van-col span="16" class="title">
					<p>错题本</p>
				</van-col>
				<van-col span="4">
					<div class="title" @click="confige" v-show="edit">
						<p style="font-size: 15px;margin: 20px 0;">编辑</p>
					</div>
					<div class="title" @click="complit" v-show="noedit">
						<p style="font-size: 15px;margin: 20px 0;">完成</p>
					</div>
				</van-col>
			</van-row>
			<div style="padding-bottom: 50px;">
				<div v-for="(item,index) in lists" :key="index">
					<!-- 题目描述 -->
					<div @click="godetail==true?gotodetail(item):selected(index)">
						<div v-bind:class="item.bindclass">
							<p><span><img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/SingleBox.png" /></span>{{item.title}}</p>
						</div>
					</div>
				</div>
			</div>
			<!-- 底部按钮-->
			<div class="prve_next" v-show="noedit">
				<van-row>
					<van-col span="6" style="background: #FFFFFF;">
						<div @click="all==true?selecteall():cancel()">
							<p style="font-size: 15px;">{{all==true?'全选':'全不选'}}</p>
						</div>
					</van-col>
					<van-col span="18" style="background: #85B8FD;">
						<div @click="cancelcollection">
							<p style="color: #FFFFFF;font-size: 15px;">移除</p>
						</div>
					</van-col>
				</van-row>
			</div>
		</Bg3>
	</div>
</template>

<script>
	import {
		GetErrowList,
		GetdelErrow
	} from '@/request/api.js'
	import Bg3 from "@/components/Bg3.vue"
	export default {
		data() {
			return {
				edit: true,
				noedit: false,
				lists: [],
				userid: '',
				selectedlists: [],
				godetail: true,
				all: true,
				isselected: false
			}
		},
		components: {
			Bg3
		},
		created() {
			this.userid = localStorage.getItem("userid")
			this.getErrow()
			var userid = localStorage.getItem("userid")
			if(!userid){
				this.$router.push("/login")
			}
		},
		methods: {
			// 获取收藏列表
			getErrow() {
				var query = {
					userid: this.userid
				}
				GetErrowList(query).then(res => {
					this.lists = res.data
					for (var i = 0; i < this.lists.length; i++) {
						this.lists[i].bindclass = 'question_text'
					}
				})
			},
			// 返回
			go_back() {
				this.$router.push('/')
			},
			// 编辑
			confige() {
				this.edit = false
				this.noedit = true
				this.godetail = false
			},
			// 完成
			complit() {
				this.edit = true
				this.noedit = false
				this.godetail = true
				for (var i = 0; i < this.lists.length; i++) {
					this.lists[i].bindclass = 'question_text'
				}
			},
			// 选中题目
			selected(index) {
				window.console.log(index)
				if (this.selectedlists.length == 0) {
					this.selectedlists.push(this.lists[index])
				}
				var pushcode = 0
				for (var i = 0; i < this.selectedlists.length; i++) {
					if (this.lists[index].errorid == this.selectedlists[i].errorid) {
						pushcode = 1
						this.lists[index].bindclass = 'question_text'
						this.selectedlists[i] = ""
					}
				}
				if (pushcode == 0) {
					this.lists[index].bindclass = 'question_text background_green'
					this.selectedlists.push(this.lists[index])
				}
				this.$forceUpdate()
			},
			// 跳转题目详情
			gotodetail(item) {
				this.$router.push({path:"/questiondetail2",query:{subjectid:item.subjectid,userid:this.userid}})
			},
			// 全选
			selecteall() {
				for (var i = 0; i < this.lists.length; i++) {
					this.lists[i].bindclass = 'question_text background_green'
					this.selectedlists.push(this.lists[i])
				}
				this.all = false
			},

			// 全不选
			cancel() {
				for (var i = 0; i < this.lists.length; i++) {
					this.lists[i].bindclass = 'question_text'
					this.selectedlists = []
				}
				this.all = true
			},

			// 移除
			cancelcollection() {
				if(this.selectedlists.length == 0){
					this.$toast("暂无选中题目！")
					return
				}
				for (var i = 0; i < this.selectedlists.length; i++) {
					if(this.selectedlists[i] != ""){
						var query = {
							errorid: this.selectedlists[i].errorid
						}
						GetdelErrow(query).then(res => {
							window.console.log(res)
							this.$toast("移除成功！")
							this.getErrow()
						})
					}	
				}
			}

		}

	}
</script>

<style lang="css" scoped>
	.back_icon {
		margin-top: 20px;
	}

	.title p {
		font-size: 18px;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	.prve_next {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 10;
		background: #85B8FD;
		box-shadow: 0px -1.5px 2px -0.5px rgba(133, 184, 253, 0.4);
	}

	.question_text {
		width: 345px;
		height: 100%;
		background: #FFFFFF;
		text-align: left;
		margin: 0 auto;
		border-radius: 5px;
		padding-bottom: 5px;
		box-shadow: 0px 1px 2px 0.5px rgba(133, 184, 253, 0.4);
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.background_green {
		background: #F6F5F6;
	}

	.question_text img {
		width: 54px;
		height: 18px;
		position: relative;
		bottom: -4px;
		padding-right: 10px;
	}

	.question_text p {
		font-size: 14px;
		color: #333333;
		padding: 10px 20px;
		line-height: 1.8;
		margin: 5px 0 0 0;
	}
</style>
