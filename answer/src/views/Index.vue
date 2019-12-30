<template>
	<div>
		<Bg1>
			<!-- 标题部分 -->
			<div class="title">
				<h3>书鱼题库</h3>
				<!-- 公告 -->
				<van-row type="flex" justify="center">
					<van-col span="1" style="margin: 12px 0;">
						<i class="iconfont icon-xxx" style="color: #FFFFFF;">&#xe6ff;</i>
					</van-col>
					<van-col span="19">
						<marquee>
							<p style="font-size: 12px;color: #FFFFFF;">书鱼课堂最新计算机二级Web课程已上线，详情关注...</p>
						</marquee>
					</van-col>
				</van-row>
			</div>
			<!-- 已完成多少题 -->
			<div class="empty_blank" style="margin-top: -10px;">
				<van-row type="flex" justify="center" style="line-height: 3;">
					<van-col span="4">
						<img :src="clock" style="width: 80%; margin: 20px 0;" />
					</van-col>
					<van-col span="13" style="margin: 2px 0;">
						<p style="font-size: 16px;font-weight: 500;color:rgba(51,51,51,1);font-family:PingFang SC;">Python二级真题模拟(一)</p>
					</van-col>
					<van-col span="6" style="margin: 7px 0;">
						<p style="font-size: 14px;font-family:PingFang SC;color:rgba(51,51,51,1);">已答22题
							<van-icon name="arrow" style="bottom: -2px;font-size: 16px;" />
						</p>
					</van-col>
				</van-row>
			</div>
			<!-- 其它模块 -->
			<div>
				<!-- 每日一练 -->
				<div class="daily_test">
					<router-link to="/dailytest">
						<img :src="daily" width="93.75%" />
					</router-link>
				</div>
				<!-- 栅格 -->
				<van-row type="flex" justify="center" style="margin-top: -10px;">
					<!-- 真题模拟 -->
					<van-col span="11" style="margin-left:3px;">
						<router-link to="/lists">
							<img :src="real" width="100%" />
						</router-link>
					</van-col>
					<van-col span="11" style="margin-left: 5px;">
						<van-row>
							<!-- 我的收藏 -->
							<van-col span="24">
								<router-link to="/mycollection">
									<img :src="my" width="100%" />
								</router-link>
							</van-col>
							<!-- 错题本 -->
							<van-col span="24" style="margin-top: -7px;">
								<router-link to="/errowlist">
									<img :src="errow" width="100%" />
								</router-link>
							</van-col>
						</van-row>
					</van-col>
				</van-row>
			</div>

		</Bg1>
	</div>
</template>

<script>
	import Bg1 from '@/components/Bg1.vue'
	export default {
		data() {
			return {
				clock: 'https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/Clock.png',
				daily: 'https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/DailyTest.png',
				real: 'https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/RealTest.png',
				my: 'https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/MyFavorite.png',
				errow: 'https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/ErrowBook.png'
			}
		},
		components: {
			Bg1
		},
		created() {
			var userid = localStorage.getItem("userid")
			if(!userid){
				this.$router.push("/login")
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
		src: url('//at.alicdn.com/t/font_1545572_6yxpyr1vj8l.eot');
		src: url('//at.alicdn.com/t/font_1545572_6yxpyr1vj8l.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1545572_6yxpyr1vj8l.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1545572_6yxpyr1vj8l.woff') format('woff'),
			url('//at.alicdn.com/t/font_1545572_6yxpyr1vj8l.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1545572_6yxpyr1vj8l.svg#iconfont') format('svg');
	}

	.title {
		padding-top: 10px;
	}

	.title h3 {
		font-size: 20px;
		color: #FFFFFF;
		margin: 8px 0 2px 0;
	}

	.empty_blank {
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/EmptyBlank.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 355px;
		height: 91.5px;
		margin: 0 auto;
	}
</style>
