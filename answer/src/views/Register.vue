<template>
	<div>
		<LGbg>
			<div class="input_list">
				<div class="border">
					<input class="input_txt" placeholder="请填写手机号" v-model="username" type="tel" />
				</div>
				<div class="border">
					<input class="input_txt" placeholder="请填写密码" v-model="password" type="password" />
				</div>
				<div class="border">
					<input class="input_txt" placeholder="请填写邀请码" v-model="invitation_code" />
				</div>
				<button class="commit_btn" @click="regist">立即注册</button>
				<div class="go_login" @click="go_login">
					<p>已有账号？登陆</p>
				</div>
			</div>
		</LGbg>
	</div>
</template>

<script>
	import {
		PostRegister
	} from '@/request/api.js'
	import LGbg from '@/components/LGbg.vue'
	export default {
		data() {
			return {
				username: '',
				password: '',
				invitation_code: '',
				totalTime: 3
			}
		},
		components: {
			LGbg
		},
		methods: {
			regist() {
				// 手机号是否为空
				if (this.username != "") {
					// 校验手机号是否正确
					let reg = /^1[3|4|5|7|8][0-9]{9}$/
					if (reg.test(this.username) == false) {
						this.$toast("请输入正确的手机号")
						return
					}
				} else {
					this.$toast("请输入手机号")
					return
				}
				// 密码是否为空
				if (this.password != "") {
					// 密码长度校验
					if (this.password.length < 6) {
						this.$toast("密码至少6位数")
						return
					} else if (this.password.length > 13) {
						this.$toast("密码最多13位数")
						return
					}
				} else {
					this.$toast("请输入密码")
					return
				}
				// 注册码是否为空
				if (this.invitation_code == "") {
					this.$toast("请输入注册码")
					return
				}
				// 等待注册
				this.$toast.loading({
					message: '注册中。。。',
					forbidClick: true,
					loadingType: 'spinner'
				});
				// 接口提交数据
				var query = {
					username: this.username,
					password: this.password,
					invitation_code: this.invitation_code
				}
				// 请求接口
				PostRegister(query).then(res => {
					// 失败则返回错误信息
					if (res.code == "201") {
						this.$toast(res.msg)
						// 成功
					} else if (res.code == "200") {
						this.$toast.clear();
						this.$toast(res.msg + "3秒后自动返回登录页")
						// 提示成功后倒计时3s自动跳转首页
						let clock = window.setInterval(() => {
							this.totalTime--
							//当倒计时等于0时清除定时器跳转
							if (this.totalTime == 0) {
								window.clearInterval(clock)
								this.$router.push({
									path: '/login'
								})
							}
						}, 1000)
					}
				})
			},
			// 返回登录页
			go_login() {
				this.$router.push({
					path: '/login'
				})
			}
		}
	}
</script>

<style lang="css" scoped>
	.input_list {
		padding-top: 110px;
	}

	.border{
		border: 1px solid #c1c1c1;
		width: 216.5px;
		height: 49.5px;
		border-radius: 49px;
		margin: 0 auto;
		margin-top: 25px;
	}

	.input_txt {
		width: 200px;
		height: 40px;
		border-radius: 40px;
		text-align: center;
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #666666;
		outline: none;
		border: none;
		line-height: 2;
		margin-top: 2px;
	}

	.commit_btn {
		border: 1px solid #66A1F2;
		width: 216.5px;
		height: 49.5px;
		border-radius: 49px;
		background-color: #66A1F2;
		text-align: center;
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		margin-top: 45px;
	}

	.go_login p {
		font-size: 12px;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(145, 189, 250, 1);
		line-height: 2.5
	}


	.input_txt::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: #CCCCCC
	}

	::-moz-placeholder {
		/* Firefox 19+ */
		color: #FFFFFF;
	}

	:-ms-input-placeholder {
		/* IE 10+ */
		color: #FFFFFF;
	}

	:-moz-placeholder {
		/* Firefox 18- */
		color: #FFFFFF;
	}
</style>
