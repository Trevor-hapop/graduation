<template>
	<div class="shop-content">
		<div class="container">
			<div class="header">
				<h2>汪星人</h2>
			</div>
			<div class="main">
				<ul>
					<li v-for="item in dogs">
						<div class="pet">
							<img :src="item.picPath">
							<p>{{item.name}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="container">
			<div class="header">
				<h2>喵星人</h2>
			</div>
			<div class="main">
				<ul>
					<li v-for="item in cats">
						<div class="pet">
							<img :src="item.picPath">
							<p>{{item.name}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="container">
			<div class="header">
				<h2>其他星人</h2>
			</div>
			<div class="main">
				<ul>
					<li v-for="item in others">
						<div class="pet">
							<img :src="item.picPath">
							<p>{{item.name}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'shop-content',
		data () {
			return {
				dogs: [],
				cats: [],
				others: []
			}
		},
		created () {
			fetch('/api/show/dogs', {
				credentials: 'include',
    		method: 'GET'
			}).then(res => res.json()).then(data => {
				this.dogs = data
				console.log(this.dogs)
			}),
			fetch('/api/show/cats', {
				credentials: 'include',
    		method: 'GET'
			}).then(res => res.json()).then(data => {
				this.cats = data
			}),
			fetch('/api/show/others', {
				credentials: 'include',
    		method: 'GET'
			}).then(res => res.json()).then(data => {
				this.others = data
			})
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.shop-content{
		font-family: 'PingFangSc Regular';
		color: #ff2f01;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.container{
			width: 1000px;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.header{
				width: 1000px;
				display: flex;
				justify-content: center;

				h2::before{
					content: '·';
					width: 20px;
					height: 1px;
				}
				h2::after{
					content: '·';
					width: 20px;
					height: 1px;
				}
			}
			.main{
				width: 100%;
				ul{
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
				}
				li{
					width: 200px;
					list-style-type: none;
				}
				.pet{
					img{
						width: 200px;
						height: 200px;
					}
					p{
						display: flex;
						justify-content: center;
					}
				}
			}
		}
	}
</style>