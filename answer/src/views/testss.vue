<template lang="html">
	<div>
		福克斯大家
		<ej-question></ej-question>
	</div>
	
</template>
<script>
	import EjQuestion from '@/components/EjQuestion.vue'
	import{GetDailyTest} from '@/request/api.js'
	export default {
		created() {
			GetDailyTest().then(res=>{
				window.console.log(res)
				this.list=res.data
			})
		},
		components:{
			EjQuestion
		},
		data(){
			return{
				list:'',
				
			}
		}
	}
</script>
<style lang="css" scoped>
	
</style>