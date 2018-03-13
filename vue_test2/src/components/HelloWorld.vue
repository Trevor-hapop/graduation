<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="../assets/image/logo-white.png">
      </div>
      <navbar class="navbar">
        <nav-item v-for="item in items" :to="item">
        </nav-item>
      </navbar>
      <div class="admin">
        <router-link to="/login" v-if="!isLogin">
          <img src="../assets/image/admin.png">
        </router-link>
        <el-dropdown v-else @command="logout">
          <img src="../assets/image/laugh.jpg">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">个人资料</el-dropdown-item>
            <el-dropdown-item command="b" divided @click="logout()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <router-view></router-view>
    </div>
    <container class="container"></container>
    <copyright></copyright>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar"
import navItem from "components/common/navbar/nav-item"
import container from "components/common/container/container"
import copyright from 'components/common/container/copyright'
export default {
  name: 'HelloWorld',
  components: {
    navbar,
    navItem,
    container,
    copyright
  },
  created () {
    fetch('/api/isLogin', {
      credentials: 'include',
      method: 'GET'
    }).then(res => res.json()).then(data => {
      this.isLogin = data
    })
  },
  data () {
    return {
      items: [
        { path: '/PetStore', name: '宠物店', img: '../../../assets/image/PetStore.png' },
        { path: '/PetFosterage', name: '宠物寄养', img: '../assets/image/PetFosterage.png' },
        { path: '/PetHospital', name: '宠物医院', img: '../assets/image/PetHospital.png' },
        { path: '/PetOther', name: '周边商城', img: '../assets/image/PetOther.png' }
      ],
      isLogin: false
    }
  },
  methods: {
    logout () {
      console.log('yyy')
      fetch('/api/logout', {
        credentials: 'include',
        methods: 'GET'
      }).then(res => res.json()).then(data => {
        this.isLogin = data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .header{
  position: fixed;
  display: flex;
  justify-content: space-around;
  height: 60px;
  padding: 0 30px 0 0;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  background-color: #FF2F01;
  border: 0 solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.10);
    .logo{
      width: 150px;
      height: 100%;
      img{
        height: 100%;
      }
    }
    .navbar{
      width: 800px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .admin{
      width: 200px;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img{
        width: 40px;
        height: 40px;
        border-radius: 100px;
      }
    }
 }
 .container{
  height: 300px;
  margin-top: 100px;
 }
</style>
