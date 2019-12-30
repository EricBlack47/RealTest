<template>
	<div>
		<Bg2>
			<!-- 我的收藏 -->
			<div>
				<van-row>
					<van-col span="4">
						<div class="back_icon" @click="go_back">
							<van-icon name="arrow-left" color="#ffffff" size="0.6rem" />
						</div>
					</van-col>
					<van-col span="16" class="title">
						<p>我的收藏</p>
					</van-col>
				</van-row>
				<Head></Head>
			</div>
			<div class="head_bg">
				<van-row>
					<!-- 上一题 -->
					<van-col span="7" @click="prve">
						<van-row>
							<van-col offset="4" span="6">
								<!-- 上一题图标 -->
								<div class="like_icon">
									<i class="iconfont icon-xxx" style="color: #C1C1C1;">&#xe616;</i>
								</div>
							</van-col>
							<van-col span="12">
								<!-- 上一题 -->
								<div class="add_like">
									<p style="color: #C1C1C1;">上一题</p>
								</div>
							</van-col>
						</van-row>
					</van-col>
					<!-- 竖线 -->
					<van-col span="1">
						<div class="blue_down_line"></div>
					</van-col>
					<!-- 移除此题 -->
					<van-col span="7">
						<van-row>
							<van-col offset="2" span="4">
								<div class="like_icon">
									<i class="iconfont icon-xxx" style="color: #83B6FF;">&#xe6b3;</i>
								</div>
							</van-col>
							<van-col span="16">
								<div class="add_like" @click="cancelcollection">
									<p>移除此题</p>
								</div>
							</van-col>
						</van-row>
					</van-col>
					<!-- 竖线 -->
					<van-col span="1">
						<div class="blue_down_line"></div>
					</van-col>
					<!-- 下一题 -->
					<van-col span="7" @click="next">
						<van-row>
							<van-col offset="4" span="6">
								<div class="like_icon">
									<i class="iconfont icon-xxx" style="color: #83B6FF;">&#xe700;</i>
								</div>
							</van-col>
							<van-col span="12">
								<div class="add_like">
									<p>下一题</p>
								</div>
							</van-col>
						</van-row>
					</van-col>
				</van-row>
			</div>
			<!-- 题目 -->
			<div class="question_body">
				<!-- 题目描述 -->
				<div class="question_text">
					<p><span><img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/SingleBox.png" /></span>{{active+1+"、"+lists[active].title}}</p>
				</div>
				<!-- 选项对错 -->
				<div class="question_text" style="margin-top: 20px;">
					<van-row style="padding: 5px 20px 5px 20px;" v-for="(item,index) in lists[active].options" :key="index">
						<van-col span="1">
							<div style="margin-top: 18px;">
								<i v-bind:class="item.bindclass">&#xe622;</i>
							</div>
						</van-col>
						<van-col span="22">
							<div>
								<p>{{item.sort+'.'+item.title}}</p>
							</div>
						</van-col>
					</van-row>
				</div>
				<!-- 答案解析 -->
				<div class="test_desc question_text" style="margin-bottom: 60px;margin-top: 20px;">
					<p>试题解析</p>
					<p>【答案】{{lists[0].right_key}}</p>
					<p>{{lists[0].analysis}}</p>
				</div>
			</div>
		</Bg2>
	</div>
</template>

<script>
	import {
		GetCollection,
		GetCancelcollection
	} from '@/request/api.js'
	import Bg2 from "@/components/Bg2.vue"
	export default {
		data() {
			return {
				lists: [],
				active: 0,
				activeid: '',
				userid: '',
				checked: '',
				right_key: '',
				question: ''
			}
		},
		components: {
			Bg2
		},
		mounted() {
			this.activeid = this.$route.query.subjectid
			this.userid = this.$route.query.userid
			this.getCollection()
		},
		methods: {
			go_back() {
				this.$router.push("/mycollection")
			},
			// 获取收藏列表
			getCollection() {
				var query = {
					userid: this.userid
				}
				GetCollection(query).then(res => {
					this.lists = res.data
					for (var i = 0; i < this.lists.length; i++) {
						for (var k = 0; k < this.lists[i].options.length; k++) {
							this.lists[i].options[k].bindclass = "icon-xxx iconfont checkbox"
							for (var z = 0; z < this.lists[i].options.length; z++) {
								if (this.lists[i].options[z].sort == this.lists[i].right_key) {
									this.lists[i].options[z].bindclass = "icon-xxx iconfont checkedbox"
								}
							}
						}
					}
				})
				this.getQuestion()
			},
			// 显示当前题
			getQuestion() {
				for (var i = 0; i < this.lists.length; i++) {
					if (this.lists[i].subjectid == this.activeid) {
						this.active = i
						this.selected(this.active)
					}
				}
			},
			// 移除
			cancelcollection() {
				var query = {
					collectionid: this.question.collectionid
				}
				GetCancelcollection(query).then(res => {
					window.console.log(res)
					this.$toast("取消收藏成功！")
					this.getCollection()
				})
			},
			// 跳转题目
			selected(index) {
				window.console.log(index)
				this.question = this.lists[index]
				this.active = index
				for (var i = 0; i < this.question.options.length; i++) {
					this.question.options[i].bindclass = "icon-xxx iconfont checkbox"
					for (var k = 0; k < this.question.options.length; k++) {
						if (this.question.options[k].sort == this.question.right_key) {
							this.question.options[k].bindclass = "icon-xxx iconfont checkedbox"
						}
					}
				}
			},
			// 上一题
			prve() {
				if(this.active+1 == 1){
					this.$toast("已经是第一题了！")
					return
				}else{
					var prve = this.active - 1
					this.selected(prve)
				}
			},
			// 下一题
			next() {
				if (this.active < this.lists.length-1) {
					var next = this.active + 1
					this.selected(next)
				} else {
					this.$toast("已经是最后一题了！")
				}
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


	.back_icon {
		margin-top: 20px;
	}

	.title p {
		font-size: 18px;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	.like_icon {
		line-height: 3;
	}

	.head_bg {
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/EmptyBlank.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 358px;
		height: 54px;
		margin: 0 auto;
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
</style>
