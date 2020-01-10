<template>
	<div>
		<div class="blue_bg">
			<div class="input_box_bg">
				<div class="input_bg">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="css" scoped>
	.all{
		margin: 0 auto;
	}
	.blue_bg{
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/BgBlue.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 100vh;
	}
	.input_box_bg{
		padding-top: 61px;
	}
	.input_bg{
		margin-top: 20px;
		background-image: url(https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/BgSmall.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 500px;
		width: 302px;
		margin: 0 auto;

	}
</style>
