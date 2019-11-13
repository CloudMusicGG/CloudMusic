<!--
 * @Author: Eternal
 * @Date: 2019-11-11 17:26:13
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-13 08:38:39
 * @Description: 
 -->
<template>
    <div class="mobile">
        <!-- <router-link to="/registrationpag"> -->
            <input type="button" @click="showToast" class="mobile_input" value="手机号登录">
        <!-- </router-link> -->
        <router-link to='/index'>
            <input type="button" class="mobile_input mobile_background" value="立即体验">
        </router-link>
       <div class="mobile-ico">
            <i class="icon iconfont mobile-ico_size">&#xe62b;</i>
            <i class="icon iconfont mobile-ico_size">&#xe70c;</i>
            <i class="icon iconfont mobile-ico_size">&#xe658;</i>
            <i class="icon iconfont mobile-ico_size">&#xe659;</i>
       </div>
       <div class="mobile-Agreement">
           <input type="checkbox" v-model="flag" class="mobile-Agreement_size">
           <p class="mobile-Agreement-p_size"> <i>同意</i>《用户协议》《隐私政策》《儿童隐私政策》</p>
       </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    name:'mobile',
    data(){
        return {
            flag:false,
        }
    },
    methods:{
        showToast(){
            if(!this.flag){
                Toast({
                    message: ' 请先勾选同意《用户协议》《隐私政策》《儿童隐私政策》',
                    duration: 1000
                });
            }else{
                this.$router.push("/registrationpag");
                this.$router.go(1);
            }
        }
    }
}
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.mobile {
    position: absolute;
    bottom:0;
    margin-left: 13%;
    width: 2.85rem;
    height: 2.43rem;
}
.mobile_input {
    width: 100%;
    height: .37rem;
    border-radius: .4rem;
    border:0;
    text-align: center;
    line-height: .37rem;
    color: #ff4141;
    font-size: 14px;
    background: #fff;
    outline: none;
    margin-top: .26rem;
}
.mobile_background {
    background: transparent;
    border: 1px solid  #e2554a;
    color: #ffffff;
    margin-top: .15rem;
}
.mobile-ico {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: .37rem;
    margin-top: .15rem;
}
.mobile-ico_size {
    display: inline-block;
    width: .35rem;
    height: .35rem;
    border: 1px solid #e2554a;
    border-radius: 50%;
    font-size: .2rem;
    text-align: center;
    line-height: .35rem;
    color: #f8d6d3;
}
.mobile-Agreement {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: .37rem;
    margin-top: .15rem;
}
.mobile-Agreement_size {
    position: relative;
    display:block;
    width: .11rem;
    height: .11rem;
    outline: none;
}
.mobile-Agreement_size:checked:after{
    content: "✓";
    position: absolute;
    top: 0;
    left:0;
    color:white;
    font-size: .11rem;
    text-align: center;
    line-height: .12rem;
}
.mobile-Agreement_size:after{
    position: absolute;
    width: .12rem;
    height: .12rem;
    background: #db2c1f;
    top: 0;
    left: 0;
    content: "";
    border: 1px solid #ec938d;
    border-radius: .02rem; 
}
.mobile-Agreement-p_size {
    font-size: 12px;
    color: #fbe5e3;
}
.mobile-Agreement-p_size i {
    color: #ec938d;
}
</style>