<template>
  <div id="app">
    
    <!-- 左侧导航 -->
    <!-- <leftNav></leftNav> -->
    <!--操作区域-->
    <div class="main">
      <!-- <HelloWorld></HelloWorld> -->
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
  import leftNav from '@/components/common/leftNav'
  export default {
    name: 'App',
    components: {
      leftNav,
    },
    
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .main{
  float:left;
  width:100%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;
}
</style>