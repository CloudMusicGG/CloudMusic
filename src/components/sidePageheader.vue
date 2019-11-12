<!--
 * @Author: rosalee
 * @Date: 2019-11-09 09:44:46
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 09:34:33
 * @Description: 
 -->
<template>
  <div class="headerbox">
    <router-link :to='"/myInfoPage/"+userInfo.telephoneNum' class="headerbox-header" >
      <img :src='userInfo.userHeader' alt="" @click="clickHeader">
    </router-link>
    <div class="headerbox__infobox">
      <span class="headerbox-username">{{userInfo.name}}</span>
      <i class="headerbox-userlevel">Lv.{{userInfo.userLevel}}</i>
      <div class="headerbox-signIn" >
        <span class="icon iconfont icon-biaoqing" style="font-size:14px;line-height:.25rem;vertical-align:middle;"></span>
        <span>签到</span>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name:"sidePageheader",
  data(){
    return {
      userInfo:[]
    }
  },
  created(){
    Axios.get("/user")
    .then(response=>{
      this.userInfo = response.data[0];
      // console.log(this.userInfo);
    })
  },
  methods:{
    clickHeader:function(){
      this.$emit("clickParent",1);
    }
  }
}
</script>

<style scoped>
@import url(..\assets\font\iconfont.css);
  .headerbox{
    height:1.61rem;
    width:100%;
    background: url(..\..\static\img\music_Cover14.jpg) center 40%;
    padding:.23rem .2rem;
    box-sizing: border-box;
  }
  .headerbox-header{
    display: block;
    height:.63rem;
    width:.63rem;
  }
  .headerbox-header img{
    height:100%;
    width:100%;
    border-radius: 50%;
  }
  .headerbox__infobox{
    box-sizing: border-box;
    /* background:antiquewhite; */
    width:100%;
    height:.52rem;
    padding-bottom: .2rem;
  }
  .headerbox-username{
    float: left;
    /* width:2.15rem; */
    font-size: .16rem;
    color: black;
    line-height: .32rem;
    text-align: left;
    letter-spacing: 3px;
    font-weight: bolder;
    padding-left: .05rem;
    padding-right: .05rem;
  }
  .headerbox-userlevel{
    float: left;
    font-size: 10px;
    height:.1rem;
    line-height: .1rem;
    width:.3rem;
    text-align: center;
    border-radius: 10px;
    background:rgba(0, 0, 0, 0.247);
    padding:2px;
    margin-top: .1rem;
    color: rgb(56, 56, 56);
  }
  .headerbox-signIn{
    float: right;
    width:.65rem;
    height:.24rem;
    border-radius: .12rem;
    line-height: .2rem;
    color:white;
    background:#ff3a3a;
    font-size: 10px;
    margin-top: 3.5px;
    text-align: center;
    letter-spacing: 2px;
  }
</style>