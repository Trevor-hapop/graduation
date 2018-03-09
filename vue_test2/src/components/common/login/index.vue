<template>
	<div class="back">
		<loginBox></loginBox>
	</div>
</template>
<script>
import loginBox from './login-box.vue'
export default{
	name: 'login-box',
	components: {
		loginBox
	}
}
	
</script>

<style lang="scss" scoped>
	body{
		background-color: blue;
	}
	.back{
		width: 100%;
		height: 735px;
		background-image: url(../../../assets/image/niutou.jpg);
		background-size: 100% 100%;
	}
</style>