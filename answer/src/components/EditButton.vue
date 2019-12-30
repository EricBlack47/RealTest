<template>
	<div>
		<!-- 底部按钮-->
		<div class="prve_next" v-show="showButton">
			<van-row>
				<van-col span="6" style="background: #FFFFFF;">
					<div >
						<p style="font-size: 15px;">全选</p>
					</div>
				</van-col>
				<van-col span="18" style="background: #85B8FD;">
					<div >
						<p style="color: #FFFFFF;font-size: 15px;">移除</p>
					</div>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	export default{
		props:['showButton'],
		data(){
			return{
				
			}
		},
	}
</script>

<style lang="css" scoped>
	.prve_next {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 10;
		background: #85B8FD;
		box-shadow: 0px -1.5px 2px -0.5px rgba(133, 184, 253, 0.4);
	}
</style>
