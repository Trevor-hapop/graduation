<template>
	<div class="footer">
		<div class="content">
			<ul>
				<li>项目简介  |</li>
				<li>项目作者  |</li>
				<li>关于毕设  |</li>
				<li>积极承认错误 坚决不改  |</li>
				<li>法律声明</li>
			</ul>
			<p>Copyright by Trevor-Hapop 版权所有</p>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.footer{
		font-family: 'PingFangSc Regular';
		font-size: 14px;
		color: white;
		width: 100%;
		height: 100px;
		background-color: #ff2f01;
		margin-top: 1900px;
		display: flex;
		justify-content: center;
		.content{
			width: 600px;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			ul{
				display: flex;
				height: 15px;
				li{
					height: 18px;
					margin-right: 10px;
					list-style-type: none;
				}
			}
		}
	}
</style>