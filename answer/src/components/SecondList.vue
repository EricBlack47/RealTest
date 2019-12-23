<template>
	<div>
		<div v-for="(item,index) in subject" :key="index">
			<div class="empty_blank">
				<van-row>
					<van-col span="4">
						<div class="blue_down_line"></div>
					</van-col>
					<van-col span="14">
						<div class="test_name">
							<p>{{item.answer}}</p>
						</div>
						<div class="test_progress">
							<van-row>
								<van-col span="8">
									<div class="list_sub">
										<p>{{item.times==7200?"未开始":(item.percentage=="100%"?"已考完":"已考"+item.percentage)}}</p>
									</div>
								</van-col>
								<van-col span="16">
									<div class="list_sub">
										<p>{{item.percentage=="100%"?item.rate+"正确率":"剩余时间："}}</p>
									</div>
								</van-col>
							</van-row>
						</div>
					</van-col>
					<van-col span="4">
						<div class="go_test" @click="goRealTest(item)">
							<p>{{item.percentage=="100%"?"重考":"去考试"}}</p>
						</div>
					</van-col>
				</van-row>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		GetRealTestList
	} from '@/request/api.js'
	export default {
		data() {
			return {
				subject: '',
				userid: '',
				minutes: 0,
				seconds: 0,
				gettime:7200
			}
		},
		mounted() {
			var userid = localStorage.getItem("userid")
			this.userid = userid
			this.getRealTest()
			var subject_list = []
			localStorage.setItem("real_array", JSON.stringify(subject_list))
		},
		created() {
			
		},
		methods: {
			getRealTest() {
				var query = {
					"userid": this.userid
				}
				GetRealTestList(query).then(res => {
					this.subject = res.data
				})
			},
			goRealTest(item) {
				this.$router.push({
					path: "/RealTest",
					query:{"name":item.answer}
				})
			}
		}
	}
</script>

<style lang="css" scoped>
	.empty_blank {
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/EmptyBlank.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 355px;
		height: 67px;
		margin: 12px auto;
	}

	.blue_down_line {
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/BlueLine.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 20px;
		width: 2px;
		margin: 0 auto;
		margin-top: 18px;
	}

	.go_test {
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/BlueBtnSmall.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 56px;
		height: 28px;
		margin: 0 auto;
		margin-top: 16px;
	}

	.go_test p {
		font-size: 12px;
		color: #FFFFFF;
		line-height: 2;
	}

	.test_name p {
		text-align: left;
		font-size: 14px;
		margin: 10px 0 0 0;
	}

	.list_sub p {
		margin: 5px 0;
		text-align: left;
		font-size: 11px;
		color: #999999;
	}
</style>
