<!--
 * @Author: rosalee
 * @Date: 2019-11-11 09:59:12
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 15:33:44
 * @Description: 这是个人资料主页的返回、分享栏
 -->
<template>
  <div class="backBox">
    <span class="icon iconfont icon-jiantou" @click="goBack()"></span>
    <span class="backTitle">{{backTitle}}</span>
  </div>
</template>

<script>
export default {
  name:"changeMyInfoBack",
  props:['backTitle'],
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
  height:.56rem;
  padding:0 5%;
  line-height: .56rem;
  background: white;
}
.backBox .icon-jiantou{
  float: left;
  line-height: .6rem;
  font-size:.18rem;
}
.backTitle{
  float: left;
  margin-left: .24rem;
  letter-spacing: 2px;
  font-size:.18rem;
}
</style>