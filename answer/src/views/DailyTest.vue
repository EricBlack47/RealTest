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
						<p>每日一练</p>
					</van-col>
				</van-row>
				<Head></Head>
			</div>
		</Bg2>
	</div>
</template>

<script>
	import Bg2 from "@/components/Bg2.vue"
	import Head from "@/components/dailytest/Head.vue"
	export default {
		data() {
			return {
				subjectlist: '',
				activesubjec: [],
				activecode: 0
			}
		},
		components: {
			Bg2,
			Head
		},
		// created() {
		// 	GetDailyTest({
		// 		page: 1,
		// 		limit: 30
		// 	}).then(res => {
		// 		window.console.log(res)
		// 		this.subjectlist = res.data
		// 		this.activesubjec = -res.data[this.activecode]
		// 	})
		// },
		methods: {
			go_back() {
				this.$router.push('/index')
			},
			last() {
				if (this.activecode == 0) {
					alert("已经是第一题了")
				} else {
					this.activecode -= 1
				}
				window.console.log(this.activecode)
			},
			next() {
				if (this.activecode == this.subjectlist.length - 1) {
					alert("已经是最后一题了")
				} else {
					this.activecode += 1
				}
				window.console.log(this.activecode)
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
