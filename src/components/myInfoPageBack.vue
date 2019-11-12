<!--
 * @Author: rosalee
 * @Date: 2019-11-11 09:59:12
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 10:30:04
 * @Description: 这是个人资料主页的返回、分享栏
 -->
<template>
  <div class="backBox">
    <span class="icon iconfont icon-jiantou" @click="goBack()"></span>
    <span class="icon iconfont icon-fenxiang1"></span>
  </div>
</template>

<script>
export default {
  name:"myInfoPageBack",
  data(){
    return{}
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.backBox{
  width:90%;
  height:.41rem;
  margin:0 auto;
  line-height: .41rem;
}
.backBox .icon-jiantou{
  float: left;
  font-size:.18rem;
}
.backBox .icon-fenxiang1{
  float: right;
  font-weight: bolder;
  font-size:.2rem;
}
</style>