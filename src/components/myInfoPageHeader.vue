<!--
 * @Author: rosalee
 * @Date: 2019-11-11 10:27:53
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 16:46:45
 * @Description: 这是个人主页的显示头像，用户名等基本信息的部分
 -->
<template>
  <div class="headerBox">
    <img class="userHeaderimg" :src='userInfo.userHeader' alt="">
    <p class="userName">{{userInfo.name}}</p>
    <div class="info__details">
      <div class="details__left">
        <p class="left-top">
          <span class="mySubscribe">关注 5</span>
          <span class="myfans">粉丝 5</span>
        </p>
        <p class="left-bottom">
          <span class="sexAndAge">95后</span>
          <span>Lv.7</span>
        </p>
      </div>
      <div class="details__right"></div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name:"myInfoPageHeader",
  data(){
    return{
      userInfo:{}
    }
  },
  created(){
    Axios.get('/user')
    .then(response=>{
      this.userInfo = response.data[0];
      console.log(response.data[0]);
    })
  }
}
</script>

<style scoped>
.headerBox{
  /* height:2.14rem; */
  width:90%;
  background: none;
  margin:0 auto;
  padding-top: .33rem;
  box-sizing: border-box;
}
.userHeaderimg{
  height:.8rem;
  border-radius: 50%;
}
.userName{
  padding-left: 5px;
  font-size:.17rem;
  letter-spacing: 3px;
  color:white;
  margin-top: .2rem;
  line-height: .17rem;
  height: .17rem;
  font-weight: bolder;
}
.info__details{
  height:.68rem;
  width:100%;
  margin: 0 auto;
}
.details__left{
  width:50%;
  float: left;
}
.left-top{
  height:.34rem;
  line-height: .34rem;
}
.mySubscribe,.myfans{
  position: relative;
  padding-left: 5px;
  padding-right: 10px;
  font-size:13px;
  color:rgba(255, 255, 255, 0.925);
  letter-spacing: 1px;
}
.mySubscribe:after{
  height:60%;
  width:1px;
  content:'';
  background: rgba(255, 255, 255, 0.623);
  position: absolute;
  right:0;
  top: 20%;
}
.left-bottom span{
  background: rgba(255, 255, 255, 0.24);
  height:15px;
  padding-left: 8px;
  padding-right: 8px;
  float: left;
  font-size:10px;
  line-height: 15px;
  color: white;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
.left-bottom .sexAndAge{
  background: #90bfcd;
}
</style>