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
							<p>{{item}}</p>
						</div>
						<div class="test_progress">
							
						</div>
					</van-col>
					<van-col span="4">
						<div class="go_test">
							<p></p>
						</div>
					</van-col>
				</van-row>
			</div>
		</div>
	</div>
</template>

<script>
	import {GetRealTest} from '@/request/api.js'
	export default{
		data(){
			return{
				subject:''
			}
		},
		mounted() {
			this.getRealTest()
		},
		methods:{
			getRealTest(){
				GetRealTest().then(res =>{
					window.console.log(res)
					this.subject = res.data
				})
			}
		}
	}
</script>

<style lang="css" scoped>
	.empty_blank{
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
	.go_test{
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/BlueBtnSmall.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 56px;
		height: 28px;
		margin: 0 auto;
		margin-top: 15px;
	}
	.go_test p{
		font-size: 12px;
		color: #FFFFFF;
	}
</style>
