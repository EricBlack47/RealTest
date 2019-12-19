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
				<Body :name="name"></Body>
			</div>
		</Bg2>
	</div>
</template>

<script>
	import Bg2 from "@/components/Bg2.vue"
	import Body from "@/components/realtest/Body.vue"
	export default {
		data() {
			return {
				subjectlist: '',
				activesubjec: [],
				activecode: 0,
				name:''
			}
		},
		components: {
			Bg2,
			Body
		},
		mounted() {
			var name = this.$route.query.name
			this.name = name
		},
		methods: {
			go_back() {
				this.$router.push('/lists')
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
</style>
