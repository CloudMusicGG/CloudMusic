<!--
 * @Author: rosalee
 * @Date: 2019-11-11 20:50:17
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 11:03:19
 * @Description: 这是专辑的介绍
 -->
<template>
  <div class="albumInfoBox">
    <div class="albumInfoBox__topBox">
      <img :src='recommend.href' alt="" class="albumInfoBox__topBox-img">
      <div class="albumInfoBox__topBox__infoBox">
        <h3>{{recommend.title}}</h3>
        <img src="..\assets\img\header02.jpg" alt="">
        <span class="author">KillBunny ></span>
        <p class="detailInfo">【双数男声|单数女声|最末和声】</p>
      </div>
    </div>
    <div class="albumInfoBox__bottomBox">
      <div class="albumInfoBox__bottomBox__item">
        <span class="icon iconfont icon-pinglun"></span>
        <span>评论</span>
      </div>
      <div class="albumInfoBox__bottomBox__item">
        <span class="icon iconfont icon-fenxiang1"></span>
        <span>分享</span>
      </div>
      <div class="albumInfoBox__bottomBox__item">
        <span class="icon iconfont icon-xiazai1"></span>
        <span>下载</span>
      </div>
      <div class="albumInfoBox__bottomBox__item">
        <span class="icon iconfont icon-xinjiangedan"></span>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name:"albumPageInfo",
  props:['id'],
  data(){
    return{
      recommend:{}
    }
  },
  created(){
    console.log(this.id);
    Axios.get("/recommend",{params:{id:this.id}})
    .then(Response=>{
      console.log(Response.data[0].title);
      this.recommend = Response.data[0];
    })
  }
}
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.albumInfoBox{
  /* height:1.95rem; */
  width:90%;
  letter-spacing: .5px;
  color:white;
  margin:0 auto;
  padding-top: .25rem;
  box-sizing: border-box;
}
.albumInfoBox__topBox{
  height:1.23rem;
  width:100%;
}
.albumInfoBox__topBox-img{
  height:100%;
  float: left;
  border-radius: 5px;
}
.albumInfoBox__topBox__infoBox{
  height:1.23rem;
}
.albumInfoBox__topBox__infoBox h3{
 margin-bottom: .2rem;
}
.albumInfoBox__topBox__infoBox img{
  width: 0.26rem;
  height: .26rem;
  border-radius: 50%;
  vertical-align: middle;
}
.albumInfoBox__topBox__infoBox .detailInfo{
  color:gray;
  font-size: 12px;
  height: .4rem;
  line-height: .4rem;
  text-align: left;
  text-indent: -5px;
}
.albumInfoBox__topBox__infoBox{
  width:2rem;
  margin-left: .1rem;
  float: left;
}
.author{
  font-size: 12px;
  color: gray;
}
.albumInfoBox__bottomBox{
  width:100%;
  height:.73rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.albumInfoBox__bottomBox__item{
  height:100%;
  width:25%;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background:chocolate; */
  font-size: .08rem;
}
.albumInfoBox__bottomBox__item .iconfont{
  font-size: .2rem;
  margin-bottom: 3px;
}
</style>