<template>
  <div class="home">
    <el-container class="home-container">
      <el-header>
        <el-menu  background-color="#7e7e7e" text-color="#ffffff" active-text-color="#1cc7cc" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <el-button class="login" type="text">Login</el-button>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        activeIndex: '0',
      }
    },

    methods: {


    }
  }

</script>
<style>
  .login{
    color: #ffffff;
    float: left;
  }
  .el-header {
    background-color: #7e7e7e;
  }

  .el-main {
    background-color: #ffffff;
  }

  .home{
    height: 100%;
  }
  .home-container{
    height: 100%;
  }
</style>