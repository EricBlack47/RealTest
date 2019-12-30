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
					<p>真题模拟</p>
				</van-col>
			</van-row>
			<second-list></second-list>
		</Bg3>
	</div>
</template>

<script>
	import Bg3 from "@/components/Bg3.vue"
	import SecondList from '@/components/SecondList.vue'
	export default {
		components: {
			Bg3,
			SecondList
		},
		created() {
			var userid = localStorage.getItem("userid")
			if(!userid){
				this.$router.push("/login")
			}
		},
		methods:{
			go_back() {
				this.$router.push('/')
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
