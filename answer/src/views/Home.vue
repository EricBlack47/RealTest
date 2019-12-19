<template>
	<div class="home">
		<div>
			<img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/004.jpg" style="width: 100%;" />
		</div>
		<div style="position: fixed;left: 0px;bottom: 40px;" :class="qrcode==true?'yes':'no'" @click="setqrcode()">
			<img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/001.png" style="width: 37px;height: 40px;" />
		</div>
		<div style="position: fixed;right: 0px;bottom: 40px;">
			<a href="http://m.study.163.com/provider/480000002169546/index.htm?share=2&shareId=480000002169546">
				<img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/003.png" style="width: 48px;height: 40px;" />
			</a>
		</div>
		<div style="position: fixed;left: 0px;bottom: 36px;transition: display 2s;" :class="qrcode==false?'yes':'no'" id="qrcode">
			<div style="display: flex;" id="qrcodediv">
				<div style="padding-top: 119px;z-index: 10;" @click="setqrcode()">
					<img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/006.png" style="width: 20px;" />
				</div>
				<div style="margin-left: -7px;z-index: 9;">

					<img src="https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/005.png" style="width: 130px;" />


				</div>
			</div>
		</div>
		<!-- <div style="position: absolute;left: 30px;top: 20px;">

		</div>
		<div style="position: absolute;left: 30px;top: 20px;width: 97px;height: 80px;">

		</div> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				qrcode: true
			}
		},
		methods: {
			setqrcode() {
				if (this.qrcode == true) {
					this.qrcode = false
				} else {
					this.qrcode = true
				}
			}
		}
	}
</script>
<style>
	.yes {
		display: block;
	}

	.no {
		display: none;
	}
</style>
