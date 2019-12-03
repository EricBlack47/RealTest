module.exports = {
	outputDir: 'answer', //自定义打包名称
	devServer: {
		open: process.platform === "darwin",
		disableHostCheck: true, //关闭心跳检测  开发环境下不用关闭  生成环境下载nginx反向代理中必须关闭
		host: "0.0.0.0",
		port: 8088,
		https: false,
		hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
		// 配置http跨域代理
		proxy: {
			'/api': {
				target: 'http://api.ceshixia.com',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}, // string | Object

	},
	// rem自适应配置
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-pxtorem')({ // 把px单位换算成rem单位
						rootValue: 37.5, // 换算的基数(设计图750的根字体为32)
						selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
						propList: ['*']
					})
				]
			}
		}
	}


}
