<template>
	<div class="login-box">
		<header>
			<h3>Login</h3>
		</header>
		<div class="form">
			<el-form ref="loginForm" :model="loginForm">
				<el-form-item prop="userName">
					<el-input v-model="loginForm.userName" placeholder="请输入用户名" prefix-icon="el-icon-mobile-phone"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input 
						v-model="loginForm.password" 
						placeholder="请输入密码"  
						prefix-icon="el-icon-goods"
						type="password"></el-input>
				</el-form-item>
			</el-form>
		</div>
		<div class="err" v-show="err">
			<p>用户名或密码错误</p>
		</div>
		<div class="btn">
			<el-button @click="login()">登录</el-button>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				loginForm: {
					userName: '',
					password: ''
				},
				err: false,
				// rules: {
				// 	userName: [
				// 	{ required: true, message: '请输入用户名', trigger: 'blur'}
				// 	],
				// 	password: [
				// 	{ required: true, message: '请输入密码', trigger: 'blur' }
				// 	]
				// }
			}
		},
		methods: {
			login () {
				fetch('/api/login/submit', {
					credentials: 'include',
					method: 'POST',
					headers: {
						'Accept': 'application/json',
    				'Content-Type': 'application/json'
					},
					body: JSON.stringify(this.loginForm)
				}).then(res => res.json()).then(data => {
					data ? this.$router.push({path: '/'}) : this.showErr()
				})
			},
			showErr () {
				this.err = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-box{
		width: 300px;
		height: 300px;
		background-color: white;
		border-radius: 10px;
		box-shadow: -5px 5px 25px gray;
		position: absolute;
		top: 100px;
		right: 50px;
		header{
			width: 100%;
			height: 50px;
			background-color: #ff2f01;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.form{
			.el-form{
				width: 80%;
				margin-top: 50px;
			}
			width: 300px;
			height: 160px;
			margin-top: 50px;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			.el-input{
				width: 100%;
			}
		}
		.err{
			width: 100%;
			height: 15px;
			color: #ff2f01;
			text-align: center;
			font-size: 12px;
		}
		.btn{
			width: 80%;
			position: relative;
			top: 10px;
			margin: 0 auto;
			border-radius: 10px;
		}
		.el-button{
			background-color: #ff2f01;
			color: white;
			width: 100%;
			margin: 0 auto;
		}
	}
</style>