<template>
	<div>
		<div class="gray_background">
			<div class="blue_title">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="css" scoped>
	.gray_background{
		background-image: url("https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/BgGray.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 667px;
	}
	.blue_title{
		background-image: url("https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/BlueTitle.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 138px;
	}
</style>
