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
					<van-col span="7">
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
								<div class="add_like">
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
					<van-col span="7">
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
					<p><span><img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/SingleBox.png" /></span>{{active+"、"+lists[0].title}}</p>
				</div>
				<!-- 选项对错 -->
				<div class="question_text" style="margin-top: 20px;">
					<van-row style="padding: 5px 20px 5px 20px;" v-for="(item,index) in lists[0].option" :key="index">
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
	import Bg2 from "@/components/Bg2.vue"
	export default {
		data() {
			return {
				lists: [{
						id: 69,
						title: "11以下关于循环结构的描述，错误的是：",
						sorts: 49,
						grouping: "第一套真题模拟",
						right_key: "A",
						analysis: "暂无解析",
						option: [{
							title: "遍历循环使用 for < 循环变量> in < 循环结构>语句，其中循环结构不能是文件",
							sorts: "A"
						}, {
							title: "使用 range() 函数可以指定 for 循环的次数",
							sorts: "B"
						}, {
							title: "for i in range(5) 表示循环 5 次，i 的值是从 0 到 4",
							sorts: "C"
						}, {
							title: "用字符串做循环结构的时候，循环的次数是字符串的长度",
							sorts: "D"
						}]
					},
					{
						id: 70,
						title: "22以下关于循环结构的描述，错误的是：",
						sorts: 49,
						grouping: "第一套真题模拟",
						right_key: "A",
						analysis: "暂无解析",
						option: [{
							title: "遍历循环使用 for < 循环变量> in < 循环结构>语句，其中循环结构不能是文件",
							sorts: "A"
						}, {
							title: "使用 range() 函数可以指定 for 循环的次数",
							sorts: "B"
						}, {
							title: "for i in range(5) 表示循环 5 次，i 的值是从 0 到 4",
							sorts: "C"
						}, {
							title: "用字符串做循环结构的时候，循环的次数是字符串的长度",
							sorts: "D"
						}]
					},
					{
						id: 71,
						title: "33以下关于循环结构的描述，错误的是：",
						sorts: 49,
						grouping: "第一套真题模拟",
						right_key: "A",
						analysis: "暂无解析",
						option: [{
							title: "遍历循环使用 for < 循环变量> in < 循环结构>语句，其中循环结构不能是文件",
							sorts: "A"
						}, {
							title: "使用 range() 函数可以指定 for 循环的次数",
							sorts: "B"
						}, {
							title: "for i in range(5) 表示循环 5 次，i 的值是从 0 到 4",
							sorts: "C"
						}, {
							title: "用字符串做循环结构的时候，循环的次数是字符串的长度",
							sorts: "D"
						}]
					}
				],
				active: 0
			}
		},
		components: {
			Bg2
		},
		created() {
			for (var i = 0; i < this.lists[0].option.length; i++) {
				this.lists[0].option[i].bindclass = "icon-xxx iconfont checkbox"
			}
		},
		methods:{
			go_back(){
				this.$router.push("/mycollection")
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
