<template>
	<el-carousel type="card" height="400px" :autoplay="false">
    <el-carousel-item v-for="item in 3" :key="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
	
</script>

<style>
	.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__indicator.is-active button{
  	background-color: red;
  }

  .el-carousel__indicators--outside button{
  	background-color: red;
  }

  .el-carousel__item:nth-of-type(1) {
     background-image: url('../../../assets/image/taidi.jpg');
     background-size: 100% 100%;
  }
  
  .el-carousel__item:nth-of-type(2) {
     background-image: url('../../../assets/image/bade.jpg');
     background-size: 100% 100%;
  }

  .el-carousel__item:nth-of-type(3) {
     background-image: url('../../../assets/image/labuladuo.jpg');
     background-size: 100% 100%;
  }
</style>