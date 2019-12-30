<template>
	<div>
		<div v-for="(item,index) in lists" :key="index">
			<!-- 题目描述 -->
			<div class="question_text">
				<p><span><img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/SingleBox.png" /></span>{{item.title}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['lists'],
		data() {
			return {
				selectedlist:[],
				
			}
		},
		watch:{
			lists(newData) {
				return newData
			}
		}

	}
</script>

<style lang="css" scoped>
	.question_text {
		width: 345px;
		height: 100%;
		background: #FFFFFF;
		text-align: left;
		margin: 0 auto;
		border-radius: 5px;
		padding-bottom: 5px;
		box-shadow: 0px 1px 2px 0.5px rgba(133, 184, 253, 0.4);
		margin-top: 20px;
		margin-bottom: 20px;
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
