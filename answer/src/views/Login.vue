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
				<button class="commit_btn" @click="login">登录</button>
				<div class="go_register" @click="go_register">
					<p>立即注册</p>
				</div>
			</div>
		</LGbg>
	</div>
</template>

<script>
	import {
		PostLogin
	} from '@/request/api.js'
	import LGbg from '@/components/LGbg.vue'
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		components: {
			LGbg
		},
		methods: {
			login() {
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
				if (this.password == "") {
					this.$toast("请输入密码")
					return
				}
				// 等待登录
				this.$toast.loading({
					message: '登录中。。。',
					forbidClick: true,
					loadingType: 'spinner'
				});
				// 接口提交数据
				var query = {
					username: this.username,
					password: this.password
				}
				// 请求接口
				PostLogin(query).then(res => {
					// 失败则返回错误信息
					if (res.code == "201") {
						this.$toast(res.msg)
						// 成功
					} else if (res.code == "200") {
						this.$toast.clear();
						this.$toast(res.msg)
						localStorage.setItem("userid",res.userid)
						this.$router.push({
							path: '/index'
						})
					}
				})
			},
			go_register() {
				this.$router.push({
					path: '/register'
				})
			}
		}
	}
</script>

<style lang="css" scoped>
	.input_list {
		padding-top: 110px;
	}

	.border {
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
		height: 50px;
		border-radius: 49px;
		background-color: #66A1F2;
		text-align: center;
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		margin-top: 121px;
	}

	.go_register p {
		font-size: 12px;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(145, 189, 250, 1);
		line-height:2.5;
	}

	/* placeholder字体样式 */
	.commit_btn::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: #FFFFFF;
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
