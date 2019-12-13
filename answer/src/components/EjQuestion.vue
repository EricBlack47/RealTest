<template lang="html">
	<div>

		<div>
			{{subjet[0].title}}
		</div>
		<div>
			<ul>
				<li v-for="(item,index) in subjet[0].option" :key="index">
					<van-row>
						<van-col span="3">
						<i v-bind:class="item.bainclass">&#xe622;</i>
						</van-col>
						<van-col span="21">
							<div @click="slelect(index)">
								{{item.sorts}}{{item.title}}
							</div>
							
						</van-col>
					</van-row>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['subjet'],

		watch: {
			subjet(newsubject) {
				window.console.log(newsubject)
				for (var i = 0; i < newsubject[0].option.length; i++) {
					newsubject[0].option[i].bainclass = "icon-xxx iconfont lefts"
				}
				return newsubject;
			}
		},
		methods:{
			slelect(index){
				window.console.log(this.subjet[0].right_key)
				window.console.log(this.subjet[0].option[index].sorts)
				if(this.subjet[0].right_key==this.subjet[0].option[index].sorts){
					this.subjet[0].option[index].bainclass = "icon-xxx iconfont yes"
				}else{
					this.subjet[0].option[index].bainclass = "icon-xxx iconfont error"
					for(var i=0;i<this.subjet[0].option.length;i++){
						if(this.subjet[0].option[i].sorts==this.subjet[0].right_key){
							this.subjet[0].option[i].bainclass = "icon-xxx iconfont yes"
						}
					}
				}
				window.console.log(this.subjet)
				this.$forceUpdate();
			}
		}
	}
</script>

<style lang="css" scoped>
	@font-face {
		font-family: 'iconfont';
		/* project id 1545572 */
		src: url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.eot');
		src: url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.woff') format('woff'),
			url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1545572_1ppfnmqy2vb.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	.lefts{
		color: #C1C1C1;
	}
	.yes{
		color: #0000FF;
	}
	.error{
		color: red;
	}
</style>
