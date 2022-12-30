<template>
  <div class="home">
    <el-container class="home-container">
      <el-header>
        <div class="wow wobble"  data-wow-duration ="3s" data-wow-delay ="0s">
          <img src="../../assets/img/logo.png">
        </div>
        <div class="login wow bounceIn">
          <el-menu background-color="#7e7e7e" text-color="#ffffff" active-text-color="#1cc7cc"
            :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
              <el-button class="login" type="text" style="font-size: 20px;">Login</el-button>
            </el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-container>
        <el-main>

          <div class="wow  fadeInLeft">
            <p style="font-size:30px" class="wow swing" data-wow-duration ="3s" data-wow-delay ="0s">头部</p>
          </div>
          <div class="wow bounce " data-wow-delay="1.5s" data-wow-iteration:1>
            <p style="font-size:30px" class="wow swing" data-wow-duration ="3s" data-wow-delay ="0s">头部</p>
          </div>
         
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
   import { WOW } from 'wowjs'
  export default {
    name: 'home',
    data() {
      return {
        activeIndex: '0',
      }
    },

    methods: {
      handleSelect() {
        this.$router.push({ name: 'login' });
      }
    },
    mounted() {  
      // 在项目加载完成之后初始化wow    
       this.$nextTick(() => {      
         new this.$wow().init()   
        })  
     },   
  }

</script>
<style>
  img {
    margin-left: 50px;
  }

  .login {
    margin-right: 25px;
    color: #ffffff;
    float: left;
  }

  .el-header {
    background-color: #7e7e7e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    height: 55px;
    padding-left: 32px;
    padding-right: 10px;
  }

  .el-main {
    background-color: #ffffff;
  }

  .home {
    height: 100%;
  }

  .home-container {
    height: 100%;
  }
</style>