<template>
  <div>
    <div class="loginDisplay">
      <div class="login-img">
        <!-- 图片 -->
        <img src="../assets/img/views.png"  width="480" height="450">
      </div>
      <div class="login-body">
           <!--登录页-->
            <el-form class="login-form" :model="dataForm" :rules="dataRule" ref="dataForm"
            @keyup.enter.native="" status-icon>
            <h1 class="login-title wow rotateIn">登录通行证</h1>
            <el-form-item prop="username">
                <el-input v-model="dataForm.username" placeholder="用户名">
                    <span slot="prefix" class="el-input__icon">
                      
                    </span>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="dataForm.password" type="password"
                    placeholder="密码">
                    <span slot="prefix" class="el-input__icon">
                   
                    </span>
                </el-input>
            </el-form-item>
            <el-form-item prop="captcha">
                <el-row :gutter="20">
                    <el-col :span="14">
                        <el-input v-model="dataForm.captcha" placeholder="验证码">
                            <span slot="prefix" class="el-input__icon">
                                
                            </span>
                        </el-input>
                    </el-col>
                </el-row>
            </el-form-item>
            <div class="remember-psw">
                <div class="re-psw" @click="forgetPage">忘记密码?</div>
                <div class="re-psw" @click="registerPage" >立即注册</div>
            </div>
            <el-form-item>
              <el-button :round="true" type="primary" @click=""
                  class="w-percent">登录
              </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        dataForm: {
          username: '',
          password: '',
          uuid: '',
          captcha: '',
          grant_type: 'password' //后台会验证这个数据
        },
      }
    },
    mounted() {  
      // 在项目加载完成之后初始化wow    
       this.$nextTick(() => {      
         new this.$wow().init()   
        })  
     },    
    
    computed: {
      dataRule() {
        return {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          captcha: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      forgetPage(){
        this.$router.push({ name: 'forget' });
      },
      registerPage(){
        this.$router.push({ name: 'register' });
      }
      
      
    }
  }
</script>

<style lang="scss" scoped>
  
.loginDisplay{
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh;
    /* text-align: center; */

   padding: 50px 20px 150px;
}
.login-img{

}
.login-body {
    display: inline-block;
    z-index: 1001;
    box-shadow: 0 0 10px rgba(191, 191, 191, 0.57);
    height: 450px;
    width: 500px;
    vertical-align: top;
    background-color:#fff;
}
.login-form {
    /* margin: 20px 100px 50px 20px; */
    margin: auto;
    width: 300px;
    display: block;
    /* .el-form-item {
        margin-bottom: 22px;
    } */
}

.remember-psw {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    position: relative;
    top: -4px;
}
.re-psw {
    font-size: 14px;
    position: relative;
    top: 2px;
    color: #606266;

    &:hover {
        cursor: pointer;
        color: #00AAFE;
    }
}
.login-title {
    font-size: 24px !important;
    font-weight: 600 !important;
    color: #158b3d;
    line-height: 32px !important;
    margin-bottom: 35px;
    margin-top: 50PX;
    position: relative;
    top: -10px;
}

</style>