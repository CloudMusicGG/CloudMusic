<!--
 * @Author: rosalee
 * @Date: 2019-11-11 18:29:05
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 15:57:45
 * @Description: 
 -->
<template>
  <div class="unLoginBox">
    <p class="unLoginBox-p">登陆网易云音乐</p>
    <p class="unLoginBox-p">手机电脑多端同步，尽享海量高品质音乐</p>
    <p class="loginNow" @click="clickHeader"><router-link to="" >立即登录</router-link></p>
  </div>
</template>

<script>
export default {
  name:"sidePageUnLogin",
  data(){
    return{}
  },
  methods:{
    clickHeader:function(){
      this.$emit("clickParent",1);
    }
  }
}
</script>

<style scoped>
.unLoginBox{
  height:1.61rem;
  width:100%;
  background:rgb(160, 5, 5);
  padding:.3rem;
  box-sizing: border-box;
}
.unLoginBox-p{
  color:rgba(245, 245, 245, 0.719);
  font-size: .10rem;
  text-align: center;
  line-height: .2rem;
  letter-spacing: 2px;
}
.loginNow a{
  color:rgba(245, 245, 245, 0.719);
}
.loginNow{
  width:1rem;
  height:.23rem;
  line-height: .23rem;
  font-size: 13px;
  text-align: center;
  border-radius: 15px;
  color:rgba(245, 245, 245, 0.719);
  border:.5px solid rgba(245, 245, 245, 0.719);
  margin:.15rem auto 0px; 
}
</style>