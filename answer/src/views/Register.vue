<template>
	<div>
		<LGbg>
			<div class="input_list">
				<input class="input_txt" placeholder="请填写手机号"/>
				<input class="input_txt" placeholder="请填写手机号"/>
				<input class="input_txt" placeholder="请填写手机号"/>
				<input class="commit_btn" placeholder="请填写手机号"/>
			</div>
		</LGbg>
	</div>
</template>

<script>
	import LGbg from '@/components/LGbg.vue'
	export default{
		components:{
			LGbg
		}
	}
</script>

<style>
	.input_list{
		padding-top: 110px;
	}
	.input_txt{
		border: 1px solid rgba(153,153,153,1);
		width: 216.5px;
		height: 49.5px;
		border-radius: 25px;
		text-align: center;
		font-size:14px;
		font-family:PingFang SC;
		font-weight:400;
		color:#666666;
		margin-top: 30px;
	}
	.commit_btn{
		border: 1px solid #66A1F2;
		width: 216.5px;
		height: 49.5px;
		border-radius: 25px;
		background-color: #66A1F2;
		text-align: center;
		font-size:14px;
		font-family:PingFang SC;
		font-weight:400;
		color:#FFFFFF;
		margin-top: 30px;
	}
</style>
