<template lang="html">
	<div>
		<button @click="httpsuccess()">请求成功</button>
		<ul>
			<li v-for="(item,index) in lsit" :key="index">
				{{item.title}}
				<ul>
					<li v-for="(item2,index2) in item.option" :key="index2">
						<van-row>
							<van-col span="3">
								<div v-if="item2.bindclasssssss=='lefts'">
									<div class="lefts"></div>
								</div>
								<div v-if="item2.bindclasssssss=='yes'">
									<div class="yes"></div>
								</div>
								<div v-if="item2.bindclasssssss=='error'">
									<div class="error"></div>
								</div>
							</van-col>
							<van-col span="21">
								<div>{{item2.bindclasssssss}}</div>
								<div @click="active(index,index2)">
									{{item2.title}}{{item2.text}}
								</div>

							</van-col>
						</van-row>

					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isyessss: 0,
				lsit: [{
						title: "标题1",
						option: [{
								"title": 'A',
								'text': '选项A',

							},
							{
								"title": 'B',
								'text': '选项B'
							},
							{
								"title": 'C',
								'text': '选项C'
							},
							{
								"title": 'D',
								'text': '选项D'
							}
						],
						rig_key: 'A'
					},
					{
						title: "标题2",
						option: [{
								"title": 'A',
								'text': '选项A'
							},
							{
								"title": 'B',
								'text': '选项B'
							},
							{
								"title": 'C',
								'text': '选项C'
							},
							{
								"title": 'D',
								'text': '选项D'
							}
						],
						rig_key: 'B'
					}
				]
			}
		},
		watch: {
			list(newdata) {
				return newdata;
			}
		},
		created() {
			for (var i = 0; i < this.lsit.length; i++) {
				for (var k = 0; k < this.lsit[i].option.length; k++) {
					this.lsit[i].option[k].bindclasssssss = "lefts";
				}
			}
			window.console.log(this.lsit)
		},
		methods: {
			active(index, index2) {
				window.console.log(index)
				window.console.log(index2)

				if (this.lsit[index].option[index2].title == this.lsit[index].rig_key) {
					this.lsit[index].option[index2].bindclasssssss = "yes";
				} else {
					this.lsit[index].option[index2].bindclasssssss = "error";
					for (var i = 0; i < this.lsit[index].option.length; i++) {
						if (this.lsit[index].option[i].title == this.lsit[index].rig_key) {
							this.lsit[index].option[i].bindclasssssss = "yes";
						}
					}
				}

				this.$forceUpdate();
			},


		}
	}
</script>

<style lang="css" scoped>
	.lefts {
		background-color: gainsboro;
		height: 10px;
		width: 10px;
	}

	.yes {
		background-color: blue;
		height: 10px;
		width: 10px;
	}

	.error {
		background-color: red;
		height: 10px;
		width: 10px;
	}
</style>
