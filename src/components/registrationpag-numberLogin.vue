<!--
 * @Author: Eternal
 * @Date: 2019-11-11 21:47:42
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 10:51:04
 * @Description: 登录注册组件
 -->
<template>
  <div class="login">
      <div class="login_w">
          <div class="login_w-header">
                <i class="icon iconfont" @click="back()">&#xe605;</i>
                <p class="login_left">手机号登录</p>
           </div>
           <div class="login-center">
               <ul class="login-center_ul">
                   <li>未注册手机号登录后将自动创建账号</li>
                    <li class="login-center-li_boder">
                        <label for="">+86</label><input type="text" class="login-center-ul_input" placeholder="请输入手机号" v-model="ff">
                    </li>
                    <li>
                      <input type="button" class="btn" value="下一步" @click="change()">
                    </li>
               </ul>
           </div>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name: "numberLogin",
    data(){
        return {
            ff: ""
        }
    },
     methods:{
         back(){
             this.$router.go(-1) 
         },
         change(){
             let iphone = /^1(3|4|5|7|8)\d{9}$/;
               if(!iphone.test(this.ff)){
                    Toast({
                        message: '请输入有效的手机号码！',
                        duration: 1000
                    });
                }else{
                    this.$router.push('/index');
                    this.$router.go(1);
            }
         }
    }
}
</script>
<style coped>
@import url(../assets/font/iconfont.css);
    .login {
        width: 100%;
        height: .43rem;
    }
    .login_w {
        width: 3.48rem;
        height: 100%;
        margin:auto;
    }
    .login_w-header {
        display: flex;
        align-items: center;
        padding-bottom: .23rem;
        padding-top: .18rem;
    }
    .login_left {
        margin-left: .16rem;
        font-size: .17rem;
        color: #2d2d2d;
    }
    .login-center_ul li {
        width: 100%;
        height: .48rem;
        line-height: .48rem;
        color: #a0a0a0;
        margin-bottom: .24rem;
    }
    .login-center_ul li label {
        font-size: .18rem;
        color: #c6c6c6; 
    }
    .login-center-li_boder {
        border-bottom: 1px solid #d1d1d1;
        margin-bottom: .68rem;
    }
    .login-center-ul_input {
        width: 82%;
        height: .25rem;
        margin-left: .06rem;
        border:none;
        background: transparent;
        outline: none;
        font-size: .18rem;
        color: #c6c6c6;
        caret-color:red;
    }
    .btn {
        width: 100%;
        height: 100%;
        border-radius: .28rem;
        border: 0;
        background: #ff3a3a;
        color: #fff;
        font-size: .15rem;
        outline: none;
        margin-top: .06rem;
    }
</style>