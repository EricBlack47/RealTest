<template>
	<div>
		<!-- 头部 -->
		<div class="head_bg">
			<van-row>
				<van-col span="11">
					<van-row>
						<van-col offset="4" span="6">
							<!-- 添加收藏图标 -->
							<div class="like_icon" v-show="unlike" @click="changeLike">
								<i class="iconfont icon-xxx" style="color: #83B6FF;">&#xe665;</i>
							</div>
							<div class="like_icon" v-show="liked" @click="changeUnlike">
								<i class="iconfont icon-xxx" style="color: #66A1F2;">&#xe612;</i>
							</div>
						</van-col>
						<van-col span="12">
							<!-- 添加收藏文字 -->
							<div class="add_like" v-show="unlike" @click="changeLike">
								<p>收藏此题</p>
							</div>
							<div class="add_like" v-show="liked" @click="changeUnlike">
								<p>取消收藏</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
				<!-- 竖线 -->
				<van-col span="2">
					<div class="blue_down_line"></div>
				</van-col>
				<van-col span="11">
					<van-row>
						<van-col offset="2" span="6">
							<div class="like_icon" @click="show = true">
								<i class="iconfont icon-xxx" style="color: #83B6FF;">&#xe6a6;</i>
							</div>
						</van-col>
						<van-col span="12">
							<div class="add_like" @click="show = true">
								<p>跳转试题</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
			</van-row>
			<!-- 跳转弹出窗 -->
			<van-overlay :show="show">
				<div class="wrapper" @click.stop>
					<div class="block">
						<div class="num_list" v-for="(item,index) in lists" :key="index">
							<span class="num" @click="selected(index)" :class="active==index+1?'blueNum':'num'">{{index+1}}</span>
						</div>
						<div style="clear: both;"></div>
					</div>
					<div style="margin-top: 20px;" @click="show = false">
						<i class="iconfont icon-xxx" style="color:#FFFFFF;font-size: 40px;">&#xe615;</i>
					</div>
				</div>
			</van-overlay>
		</div>
		<!-- 题目 -->
		<div class="question_body" v-if="question">
			<!-- 题目描述 -->
			<div class="question_text">
				<p><span><img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/SingleBox.png" /></span>{{active+"、"+question[0].title}}</p>
			</div>
			<!-- 选项对错 -->
			<div class="question_text" style="margin-top: 20px;">
				<van-row style="padding: 5px 20px 5px 20px;" v-for="(item,index) in question[0].option" :key="index" @click="selectItem(index)">
					<van-col span="1">
						<div style="margin-top: 18px;">
							<i v-bind:class="item.bindclass">&#xe622;</i>
						</div>
					</van-col>
					<van-col span="22">
						<div>
							<p>{{item.sorts+'.'+item.title}}</p>
						</div>
					</van-col>
				</van-row>
			</div>
			<!-- 共几题 -->
			<div class="test_num">
				<p>{{'第'+active+'题/共'+limit+'题'}}</p>
			</div>
			<!-- 答案解析 -->
			<!-- <div class="test_desc question_text" v-if="checked!=''" style="margin-bottom: 100px;">
				<p>试题解析</p>
				<p>【答案】{{question[0].right_key}}</p>
				<p>{{question[0].analysis}}</p>
			</div> -->
		</div>
		<!-- 底部按钮 -->
		<div class="prve_next">
			<van-row>
				<van-col span="11">
					<van-row>
						<van-col offset="6" span="6">
							<!-- 上一题图标 -->
							<div class="like_icon" @click="go_prve">
								<i class="iconfont icon-xxx" style="color: #C1C1C1;">&#xe616;</i>
							</div>
						</van-col>
						<van-col span="8">
							<!-- 上一题 -->
							<div class="add_like" @click="go_prve">
								<p style="color: #C1C1C1;">上一题</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
				<!-- 竖线 -->
				<van-col span="2">
					<div class="blue_down_line"></div>
				</van-col>
				<van-col span="11" v-if="active<30">
					<van-row>
						<van-col offset="4" span="6">
							<div class="like_icon" @click="go_next">
								<i class="iconfont icon-xxx" style="color: #83B6FF;">&#xe700;</i>
							</div>
						</van-col>
						<van-col span="8">
							<div class="add_like" @click="go_next">
								<p>下一题</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
				<van-col span="11" v-if="active==30">
					<van-row>
						<van-col offset="4" span="6">
							<div class="like_icon" @click="go_more">
								<i class="iconfont icon-xxx" style="color: #83B6FF;">&#xe650;</i>
							</div>
						</van-col>
						<van-col span="8">
							<div class="add_like" @click="go_more">
								<p>继续刷题</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	import {
		GetDailyTest,
		GetAddcollection,
		GetCancelcollection
	} from '@/request/api.js'
	export default {
		data() {
			return {
				liked: false,
				unlike: true,
				show: false,
				active: 1,
				right_key: '',
				checked: '',
				score: 0,
				finalresult: '',
				question: '',
				lists: [],
				userid: '',
				addid: '',
				page: 1,
				limit: 30,
				subjectid: 0
			}
		},
		mounted() {
			var subject_list = []
			localStorage.setItem("array", JSON.stringify(subject_list))
		},
		created() {
			var userid = localStorage.getItem("userid")
			this.userid = userid
			var query = {
				userid: this.userid
			}
			GetDailyTest(query).then(res => {
				this.lists = res.data
				this.question = this.lists[0]
				this.right_key = this.question[0].right_key
				for (var i = 0; i < this.question[0].option.length; i++) {
					this.question[0].option[i].bindclass = "icon-xxx iconfont checkbox"
				}
				if (this.question[0].collections == true) {
					this.unlike = false
					this.liked = true
				} else {
					this.unlike = true
					this.liked = false
				}
			})

		},
		methods: {
			// 收藏
			changeLike() {
				this.liked = true
				this.unlike = false
				var query = {
					userid: this.userid,
					subjectid: this.question[0].id,
					option: this.checked
				}
				GetAddcollection(query).then(res => {
					window.console.log(res)
					this.subjectid = res.data.id
					this.$toast("收藏成功！")
				})
			},
			// 取消收藏
			changeUnlike() {
				this.liked = false
				this.unlike = true
				var query = {
					id: this.subjectid
				}
				GetCancelcollection(query).then(res => {
					window.console.log(res)
					this.$toast("取消收藏成功！")
				})
			},
			// 显示弹出窗
			showList() {
				this.show = true
			},
			// 跳转题目
			selected(index) {
				window.console.log(1)
				this.active = index + 1
				this.question = this.lists[index]
				this.show = false
				this.checked = ''
				this.right_key = ''
				var str_subject_list = JSON.parse(localStorage.getItem("array"))
				for (var i = 0; i < this.question[0].option.length; i++) {
					this.question[0].option[i].bindclass = "icon-xxx iconfont checkbox"
				}
				// 返回已做过的题目时，将已选择的选项标上颜色
				for (var k = 0; k < str_subject_list.length; k++) {
					if (this.question[0].id == str_subject_list[k].subject_id) {
						this.checked = str_subject_list[k].subject_item
						this.right_key = str_subject_list[k].right_key
						for (var j = 0; j < this.question[0].option.length; j++) {
							if (this.question[0].option[j].sorts == str_subject_list[k].subject_right) {
								this.question[0].option[j].bindclass = 'icon-xxx iconfont checkedbox'
							} else {
								if (this.question[0].option[j].sorts == str_subject_list[k].subject_item) {
									this.question[0].option[j].bindclass = 'icon-xxx iconfont checedfalse'
								}
							}
						}
					}
				}
				if (this.question[0].collections == true) {
					this.unlike = false
					this.liked = true
				} else {
					this.unlike = true
					this.liked = false
				}
			},
			// 选择选项
			selectItem(index) {
				if (this.checked == '') {
					if (this.question[0].right_key == this.question[0].option[index].sorts) {
						this.question[0].option[index].bindclass = 'icon-xxx iconfont checkedbox'
					} else {
						this.question[0].option[index].bindclass = 'icon-xxx iconfont checedfalse'
						for (var i = 0; i < this.question[0].option.length; i++) {
							if (this.question[0].option[i].sorts == this.question[0].right_key) {
								this.question[0].option[i].bindclass = 'icon-xxx iconfont checkedbox'
							}
						}
					}
					this.score += 1
					this.checked = this.question[0].option[index].sorts
					this.right_key = this.question[0].right_key
					// 当前选项数据
					var subjectdata = {
						"subject_id": this.question[0].id,
						"subject_item": this.checked,
						"subject_right": this.right_key
					}
					// 取出localstorage里的数组
					var str_subject_list = JSON.parse(localStorage.getItem("array"))
					// 如果数组为空，则添加当前选项数据	
					str_subject_list.push(subjectdata)
					localStorage.setItem("array", JSON.stringify(str_subject_list))
					this.$forceUpdate()
				}
			},
			// 上一题
			go_prve() {
				if (this.active == 1) {
					this.$toast("已经是第一题了！")
					return
				} else {
					var prve = this.active - 2
					this.selected(prve)
				}
			},
			// 下一题
			go_next() {
				if (this.active < 30) {
					var next = this.active
					this.selected(next)
				} else {
					this.$toast("已经是最后一题了！")
				}
			},
			// 继续刷题
			go_more() {
				GetDailyTest().then(res => {
					this.lists = res.data;
					this.question = this.lists[0];
					this.right_key = this.question[0].right_key;
					for (var i = 0; i < this.question[0].option.length; i++) {
						this.question[0].option[i].bindclass = "icon-xxx iconfont checkbox"
					}
				})
				var subject_list = []
				localStorage.setItem("array", JSON.stringify(subject_list))
				this.selected(0)
				this.$toast("已经刷新题目！")
			}
		}
	}
</script>

<style lang="css" scoped>
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 1545572 */
		src: url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.eot');
		src: url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.woff') format('woff'),
			url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.svg#iconfont') format('svg');
	}

	.head_bg {
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/EmptyBlank.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 358px;
		height: 54px;
		margin: 0 auto;
	}

	.like_icon {
		line-height: 3;
	}

	.add_like p {
		margin: 14px 0;
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(133, 184, 253, 1);
	}

	.blue_down_line {
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/BlueLine.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 20px;
		width: 2px;
		margin: 0 auto;
		margin-top: 14px;
	}

	.wrapper {
		display: block;
		justify-content: center;
		height: 100%;
		margin-top: 130px;
	}

	.block {
		width: 345px;
		height: 260px;
		background-color: #fff;
		margin: 0 auto;
		overflow-y: scroll;
		overflow: hidden scroll;
		
	}

	.num {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #C1C1C1;
		display: inline-block;
		vertical-align: top;
		line-height: 2;
		font-size: 19px;
		color: #C1C1C1;
		margin: 15px 12px 15px 14px;
		float: left;
	}

	.blueNum {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #85B8FD;
		display: inline-block;
		vertical-align: top;
		line-height: 2;
		font-size: 19px;
		color: #FFFFFF;
		background: #85B8FD;
		margin: 15px 12px 15px 14px;
		float: left;
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

	.checkbox {
		font-size: 16px;
		color: #999999;
	}

	.checkedbox {
		font-size: 16px;
		color: #7AAFFA;
	}

	.checedfalse {
		font-size: 16px;
		color: #F1234F;
	}

	.test_num {
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/TestNum.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		width: 130px;
		height: 24px;
		margin: 15px auto;
	}

	.test_num p {
		line-height: 2;
		font-size: 12px;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}

	.prve_next {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 43.5px;
		z-index: 10;
		background: #FFFFFF;
		box-shadow: 0px -1.5px 2px -0.5px rgba(133, 184, 253, 0.4);
	}

	.test_desc p {
		font-size: 16px;
		color: #7AAFFA;
	}

	.question_body {
		margin-bottom: 80px;
	}
</style>
