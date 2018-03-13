<template>
	<div class="container">
		<div class="input">
			<el-input
				type="text"
		    placeholder="Input Your Pet"
		    suffix-icon="el-icon-search"
		    align="center">
		  </el-input>
		</div>
		<carousel class="carousel"></carousel>
		<shop-content></shop-content>
	</div>
</template>

<script>
import carousel from "./carousel.vue"
import shopContent from './shop-content.vue'
export default {
	name: 'container',
	components: {
		carousel,
		shopContent
	}

}
</script>

<style lang="scss">
	.input{
		width: 30%;
		margin: 0 auto;
		.el-input{
			text-align: center;
		}
	}
	.el-input__inner{
		border: 1 solid #FFC001 !important;
		border-radius: 25px;
		text-align: center;
		font-family: 'PingFangSC Regular';
	}
	.carousel{
		margin-top: 50px;
	}
</style>