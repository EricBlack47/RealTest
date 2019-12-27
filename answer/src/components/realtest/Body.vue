<template>
	<div>
		<!-- 头部 -->
		<div class="head_bg">
			<van-row style="line-height:2 ;">
				<van-col span="11" v-show="showAdd">
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
								<p style="color: #85B8FD;margin: 10px 0 14px 0;">收藏此题</p>
							</div>
							<div class="add_like" v-show="liked" @click="changeUnlike">
								<p style="color: #85B8FD;margin: 10px 0 14px 0;">取消收藏</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
				<van-col span="11" v-show="showRed">
					<van-row>
						<van-col offset="4" span="6">
							<div class="like_icon" @click="show = true">
								<i class="iconfont icon-xxx" style="color: #83B6FF;">&#xe600;</i>
							</div>
						</van-col>
						<van-col span="12">
							<div class="add_like" @click="show_errow">
								<p style="color: #85B8FD;margin: 10px 0 14px 0;">只看错题</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
				<!-- 竖线 -->
				<van-col span="2">
					<div class="blue_down_line"></div>
				</van-col>
				<van-col span="11" v-show="selectTest">
					<van-row>
						<van-col offset="2" span="6">
							<div class="like_icon" @click="show = true">
								<i class="iconfont icon-xxx" style="color: #83B6FF;">&#xe6a6;</i>
							</div>
						</van-col>
						<van-col span="12">
							<div class="add_like" @click="show = true">
								<p style="color: #85B8FD;margin: 10px 0 14px 0;">跳转试题</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
				<van-col span="11" v-show="moreTest">
					<van-row>
						<van-col offset="2" span="6">
							<div class="like_icon">
								<i class="iconfont icon-xxx" style="color: #83B6FF;">&#xe650;</i>
							</div>
						</van-col>
						<van-col span="12">
							<div class="add_like" @click="go_more">
								<p style="color: #85B8FD;margin: 10px 0 14px 0;">继续刷题</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
			</van-row>
			<!-- 正确率 -->
			<div v-if="showResult" class="test_result">
				<h2>{{"正确率:&nbsp;&nbsp;"+score+"&nbsp;%"}}</h2>
			</div>
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

		<!-- 单个题目 -->
		<div class="question_body" v-if="question" v-show="oneQuestion">
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
		</div>

		<!-- 题目列表 -->
		<div class="question_body" v-if="question" v-show="questionList">
			<div v-for="(item,index) in resultlist" :key="index">
				<!-- 题目描述 -->
				<div class="question_text">
					<p><span><img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/SingleBox.png" /></span>{{(index+1)+"、"+item.title}}</p>
				</div>
				<!-- 选项对错 -->
				<div class="question_text" style="margin-top: 20px;margin-bottom: 40px;">
					<van-row style="padding: 5px 20px 5px 20px;" v-for="(item2,index2) in item.option" :key="index2">
						<van-col span="1">
							<div style="margin-top: 18px;">
								<i v-bind:class="item2.bindclassss">&#xe622;</i>
							</div>
						</van-col>
						<van-col span="22">
							<div>
								<p>{{item2.sorts+'.'+item2.title}}</p>
							</div>
						</van-col>
					</van-row>
				</div>
			</div>
		</div>


		<!-- 只看错题 -->
		<div class="question_body" v-if="question" v-show="onlyerrow">
			<div v-for="(item,index) in errowlist" :key="index">
				<!-- 题目描述 -->
				<div class="question_text">
					<p><span><img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/SingleBox.png" /></span>{{(index+1)+"、"+item.title}}</p>
				</div>
				<!-- 选项对错 -->
				<div class="question_text" style="margin-top: 20px;margin-bottom: 40px;">
					<van-row style="padding: 5px 20px 5px 20px;" v-for="(item2,index2) in item.option" :key="index2">
						<van-col span="1">
							<div style="margin-top: 18px;">
								<i v-bind:class="item2.bindclassss">&#xe622;</i>
							</div>
						</van-col>
						<van-col span="22">
							<div>
								<p>{{item2.sorts+'.'+item2.title}}</p>
							</div>
						</van-col>
					</van-row>
				</div>
			</div>
		</div>
		
		
		<!-- 底部按钮 -->
		<div class="prve_next" v-show="showComit">
			<van-row>
				<van-col span="7">
					<van-row>
						<van-col offset="3" span="6">
							<!-- 上一题图标 -->
							<div class="like_icon" @click="go_prve">
								<i class="iconfont icon-xxx" style="color: #FFFFFF;">&#xe616;</i>
							</div>
						</van-col>
						<van-col span="12">
							<!-- 上一题 -->
							<div class="add_like" @click="go_prve">
								<p style="color: #FFFFFF;">上一题</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
				<!-- 倒计时 -->
				<van-col span="10" style="background: #FFFFFF;">
					<van-row>
						<van-col span="7" style="margin: 12px 0;text-align: right;">
							<i class="iconfont icon-xxx" style="color: #85B8FD;font-size: 18px;">&#xe617;</i>
						</van-col>
						<van-col span="14">
							<van-count-down :time="time" style="font-size: 13px;" format="倒计时:mm:ss" ref="countDown" @finish="finish" />
						</van-col>
					</van-row>
				</van-col>
				<van-col span="7" v-if="active<100">
					<van-row>
						<van-col offset="3" span="6">
							<div class="like_icon" @click="go_next">
								<i class="iconfont icon-xxx" style="color: #FFFFFF;">&#xe700;</i>
							</div>
						</van-col>
						<van-col span="12">
							<div class="add_like" @click="go_next">
								<p>下一题</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
				<van-col span="7" v-if="active==100" @click="commit_test">
					<van-row>
						<van-col offset="4" span="6">
							<div class="like_icon">
								<i class="iconfont icon-xxx" style="color: #FFFFFF;">&#xe650;</i>
							</div>
						</van-col>
						<van-col span="8">
							<div class="add_like">
								<p style="color: #FFFFFF;">交卷</p>
							</div>
						</van-col>
					</van-row>
				</van-col>
			</van-row>
		</div>
		<!-- 底部按钮样式二 -->
		<div class="prve_next" v-show="showBack">
			<van-row>
				<van-col span="12" style="background: #FFFFFF;">
					<van-row>
						<van-col offset="2" span="6" style="margin-top: 14px;">
							<i class="iconfont icon-xxx" style="color: #85B8FD;font-size: 18px;">&#xe617;</i>
						</van-col>
						<van-col span="14" style="text-align: left;">
							<p style="color: #85B8FD;font-size: 14px;">
								<van-count-down :time="(7200000-lefttime)" style="font-size: 13px;padding: 0 0;" format="用时:mm:ss" :auto-start="false" />
							</p>
						</van-col>
					</van-row>
				</van-col>
				<van-col span="12" style="">
					<van-row>
						<van-col offset="4" span="6" style="margin-top: 11px;text-align: right;">
							<i class="iconfont icon-xxx" style="color: #FFFFFF;font-size: 22px;">&#xe6cd;</i>
						</van-col>
						<van-col span="12" style="text-align: left;margin-left: 10px;">
							<div @click="go_home">
								<p style="color: #FFFFFF;font-size: 14px;">回主页</p>
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
		GetRealTest,
		GetAddcollection,
		GetCancelcollection,
		GetRecord,
		PostRecord
	} from '@/request/api.js'
	export default {
		props: ['name'],
		data() {
			return {
				liked: false,
				unlike: true,
				show: false,
				selectTest:true,
				moreTest:false,
				active: 1,
				right_key: '',
				checked: '',
				score: 0,
				finalresult: '',
				question: '',
				lists: [],
				resultlist: [],
				errowlist: [],
				userid: '',
				addid: '',
				subjectid: 0,
				title: '',
				limit: 100,
				testname: '',
				percentage: 0,
				time: 7200000,
				showResult: false,
				showRed: false,
				showAdd: true,
				showBack: false,
				showComit: true,
				oneQuestion: true,
				questionList: false,
				onlyerrow: false,
				lefttime: '',
				totalTime: 2,
				testover: false
			}
		},
		created() {
			var name = this.$route.query.name
			this.userid = localStorage.getItem("userid")
			this.testname = name
			this.getRecord()
			this.getRealTest()
		},
		methods: {
			// 收藏
			changeLike() {
				this.liked = true
				this.unlike = false
				var query = {
					userid: this.userid,
					subjectid: this.question[0].id
				}
				GetAddcollection(query).then(res => {
					window.console.log(res)
					this.$toast("收藏成功！")
				})
			},
			// 获取题目
			getRealTest() {
				var query = {
					questionname: this.testname
				}
				GetRealTest(query).then(res => {
					this.lists = res.data
					this.question = this.lists[0]
					this.right_key = this.question[0].right_key
					var str_subject_list = JSON.parse(localStorage.getItem("real_array"))
					for (var i = 0; i < this.question[0].option.length; i++) {
						this.question[0].option[i].bindclass = "icon-xxx iconfont checkbox"
					}
					if(str_subject_list.length!=0){
						for (var z = 0; z < this.lists.length; z++) {
							if (this.lists[z][0].id == str_subject_list[str_subject_list.length - 1].subject_id) {
								this.selected(z)
							}
						}
					}
					// 返回已做过的题目时，将已选择的选项标上颜色
					for (var k = 0; k < str_subject_list.length; k++) {
						if (this.question[0].id == str_subject_list[k].subject_id) {
							for (var j = 0; j < this.question[0].option.length; j++) {
								if (this.question[0].option[j].sorts == str_subject_list[k].subject_item) {
									this.question[0].option[j].bindclass = 'icon-xxx iconfont checkedbox'
								}
							}
						}
					}

				})

			},
			// 获取缓存
			getRecord() {
				var query = {
					userid: this.userid,
					answers: this.testname
				}
				GetRecord(query).then(res => {
					if (res.data.cache == null) {
						var empty_array = []
						localStorage.setItem("real_array",JSON.stringify(empty_array))
					} else {
						localStorage.setItem("real_array", res.data.cache)
						this.score = parseInt(res.data.rate)
						this.time = res.data.times
					}
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
				this.active = index + 1
				this.question = this.lists[index]
				this.show = false
				this.checked = ''
				this.right_key = ''
				var str_subject_list = JSON.parse(localStorage.getItem("real_array"))
				for (var i = 0; i < this.question[0].option.length; i++) {
					this.question[0].option[i].bindclass = "icon-xxx iconfont checkbox"
				}
				// 返回已做过的题目时，将已选择的选项标上颜色
				for (var k = 0; k < str_subject_list.length; k++) {
					if (this.question[0].id == str_subject_list[k].subject_id) {
						for (var j = 0; j < this.question[0].option.length; j++) {
							if (this.question[0].option[j].sorts == str_subject_list[k].subject_item) {
								this.question[0].option[j].bindclass = 'icon-xxx iconfont checkedbox'
							}
						}
					}
				}

			},
			// 选择选项
			selectItem(index) {
				if (this.checked == '') {
					if (this.question[0].right_key == this.question[0].option[index].sorts) {
						this.score += 1
						this.question[0].option[index].bindclass = 'icon-xxx iconfont checkedbox'
					} else {
						this.question[0].option[index].bindclass = 'icon-xxx iconfont checkedbox'
					}
					this.checked = this.question[0].option[index].sorts
					this.right_key = this.question[0].right_key
					// 当前选项数据
					var subjectdata = {
						"subject_id": this.question[0].id,
						"subject_item": this.checked,
						"subject_right": this.right_key,
						"subject_index": index + 1,
						"subject_score": this.score
					}
					// 取出localstorage里的数组
					var str_subject_list = JSON.parse(localStorage.getItem("real_array"))
					// 如果数组为空，则添加当前选项数据	
					str_subject_list.push(subjectdata)
					localStorage.setItem("real_array", JSON.stringify(str_subject_list))
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
				if (this.active < 100) {
					var next = this.active
					this.selected(next)
				} else {
					this.$toast("已经是最后一题了！")
				}
			},
			// 提交
			commit_test() {
				if (this.active == 100 || this.lefttime == 0) {
					this.stop_time()
					this.time = this.$refs.countDown.remain
					var str_subject_list = JSON.parse(localStorage.getItem("real_array"))
					this.score = str_subject_list[str_subject_list.length - 1].subject_score
					if (str_subject_list.length > 0) {
						this.showComit = false
						this.showBack = true
						this.showResult = true
						this.questionList = true
						this.oneQuestion = false
						this.showRed = true
						this.showAdd = false
						this.moreTest = true
						this.selectTest = false
						for (var i = 0; i < str_subject_list.length; i++) {
							for (var k = 0; k < this.lists.length; k++) {
								if (this.lists[k][0].id == str_subject_list[i].subject_id) {
									this.resultlist.push(this.lists[k][0])
									if (this.lists[k][0].right_key != str_subject_list[i].subject_item) {
										this.errowlist.push(this.lists[k][0])
									}
								}
							}
						}
						for (var j = 0; j < this.resultlist.length; j++) {
							for (var z = 0; z < this.resultlist[j].option.length; z++) {
								this.resultlist[j].option[z].bindclassss = 'icon-xxx iconfont checkbox'
								if (this.resultlist[j].right_key == this.resultlist[j].option[z].sorts) {
									this.resultlist[j].option[z].bindclassss = 'icon-xxx iconfont checkedbox'
								} else {
									if (this.resultlist[j].option[z].sorts == str_subject_list[j].subject_item) {
										this.resultlist[j].option[z].bindclassss = 'icon-xxx iconfont checedfalse'
									}
								}
							}
						}
						this.testover = true
						this.$emit('input',this.testover)
						var query2 ={
							userid:this.userid,
							answer:this.name,
							percentage:str_subject_list.length,
							times:this.time,
							rate:this.score+"%",
							cache:JSON.stringify(str_subject_list),
							subject_over:true
						}
						PostRecord(query2).then(res =>{
							window.console.log(res)
						})
					}
				} else {
					this.$toast("还一题都没有做！")

				}
			},
			// 只看错题
			show_errow() {
				this.onlyerrow = true;
				this.questionList = false
			},
			// 回到主页
			go_home() {
				this.$router.push({
					path: "/index"
				})
			},
			// 暂停时间
			stop_time() {
				this.$refs.countDown.pause();
				this.time = this.$refs.countDown.remain
				this.lefttime = this.$refs.countDown.remain
			},
			// 时间到
			finish() {
				this.$toast('时间到，即将自动交卷');
				let clock = window.setInterval(() => {
					this.totalTime--
					//当倒计时等于0时清除定时器跳转
					if (this.totalTime == 0) {
						window.clearInterval(clock)
						this.commit_test()
					}
				}, 1000)
			},
			// 继续刷题
			go_more(){
				this.$router.push('/lists')
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
		/* height: 54px; */
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
		color: #FFFFFF;
	}

	.wrapper {
		display: block;
		/* align-items: center; */
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

	.blue_down_line {
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/BlueLine.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 20px;
		width: 2px;
		margin: 0 auto;
		margin-top: 14px;
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
		background: #85B8FD;
		box-shadow: 0px -1.5px 2px -0.5px rgba(133, 184, 253, 0.4);
	}

	.test_desc p {
		font-size: 16px;
		color: #7AAFFA;
	}

	.van-count-down {
		color: #85B8FD;
		padding: 12px 0;
		font-size: 12px;
	}

	.test_result h2 {
		padding: 12px 0 42px 0;
		margin: 0 auto;
		border-top: 1px solid #E3E3E3;
		width: 95%;
		font-size: 28px;
		color: #83B6FF;
	}
</style>
