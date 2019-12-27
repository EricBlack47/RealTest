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
					<p>我的收藏</p>
				</van-col>
				<van-col span="4">
					<div class="title" @click="confige">
						<p style="font-size: 15px;margin: 20px 0;">编辑</p>
					</div>
				</van-col>
			</van-row>
			<error-list></error-list>
		</Bg3>
	</div>
</template>

<script>
	import Bg3 from "@/components/Bg3.vue"
	import ErrorList from '@/components/ErrorList.vue'
	export default {
		components: {
			Bg3,
			ErrorList
		},
		methods: {
			go_back() {
				this.$router.push('/index')
			},
			confige() {

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
