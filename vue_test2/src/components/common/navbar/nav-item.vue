<template>
	<div class="link">
		<router-link :to="to.path">
	    <span>{{to.name}}</span>
	  </router-link>
	</div>
</template>

<script>
import HelloBro from 'components/HelloBro.vue'
	export default{
		props: {
			to: Object
		}
	}
</script>

<style lang="scss" scoped>
	@font-face{
		font-family: 'PingFangSC Regular';
		src: url('./PingFang-Regular.ttf')
	}
	.link{
		&.active{
			border-bottom: 1px solid white;
		}
		a{
			font-family: 'PingFangSC Regular';
			text-decoration: none;
			color: white;
			&.active{
		    color: #3DA5FE;
		    border-bottom: 2px solid #3DA5FE;
		    background-color: rgb(119, 192, 254);
		  }
		  &:hover{
		  	border-bottom: 2px solid white;
		  }
		}
		color: white;
	}
</style>