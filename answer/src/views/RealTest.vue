<template>
	<div style="overflow-y: scroll;">
		<Bg2>
			<div>
				<van-row>
					<van-col span="4">
						<div class="back_icon" @click="go_back">
							<van-icon name="arrow-left" color="#ffffff" size="0.6rem" />
						</div>
					</van-col>
					<van-col span="16" class="title">
						<p>真题模拟</p>
					</van-col>
				</van-row>
				<Body :name="name" ref="bodyget" v-model="testover"></Body>
			</div>
		</Bg2>
	</div>
</template>

<script>
	import {
		PostRecord
	} from "@/request/api.js"
	import Bg2 from "@/components/Bg2.vue"
	import Body from "@/components/realtest/Body.vue"
	export default {
		data() {
			return {
				subjectlist: '',
				activesubjec: [],
				activecode: 0,
				name: '',
				userid: '',
				testover: ''
			}
		},
		components: {
			Bg2,
			Body
		},
		mounted() {
			var name = this.$route.query.name
			this.name = name
			this.userid = localStorage.getItem("userid")
			this.testover = this.$refs.bodyget.testover
			var userid = localStorage.getItem("userid")
			if(!userid){
				this.$router.push("/login")
			}
		},
		methods: {
			go_back() {
				var real_array = JSON.parse(localStorage.getItem("real_array"))
				this.$refs.bodyget.stop_time()
				if(this.testover == false){
					this.$toast.loading({
						message: '正在保存当前进度...',
						forbidClick: true,
						loadingType: 'spinner'
					});		
					var query = {
						userid: this.userid,
						answer: this.name,
						percentage: real_array.length,
						times: this.$refs.bodyget.time,
						rate: this.$refs.bodyget.score + "%",
						cache: JSON.stringify(real_array),
						subject_over:false
					}
					PostRecord(query).then(res => {
						window.console.log(res)
						this.$toast.clear();
						this.$router.push('/lists')
					})
				}else{
					this.$toast.loading({
						message: '正在返回...',
						forbidClick: true,
						loadingType: 'spinner'
					});
					var query2 = {
						userid: this.userid,
						answer: this.name,
						percentage: real_array.length,
						times: this.$refs.bodyget.time,
						rate: this.$refs.bodyget.score + "%",
						cache: JSON.stringify(real_array),
						subject_over:true
					}
					PostRecord(query2).then(res => {
						window.console.log(res)
						this.$toast.clear();
						var str_subject_list = []
						localStorage.setItem("real_array", JSON.stringify(str_subject_list))
						this.$router.push('/lists')
					})
				}
				
			},
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
</style>
