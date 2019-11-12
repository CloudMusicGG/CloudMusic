<!--
 * @Author: rosalee
 * @Date: 2019-11-09 11:06:33
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-09 15:34:44
 * @Description: 这是侧边栏中间包含，我的消息，好友等的模块，开通黑胶vip模块
 -->
<template>
  <div class="headerNav">
    <div class="headerNav__vipBox">
      <div class="vipBox__leftBox">
        <span>开通黑胶VIP</span>
        <span>新客仅5元</span>
      </div>
      <div class="vipBox__rightBox">
        <img src="..\..\static\img\music_Cover05.jpg" alt />
        <span>黑胶新客首月5元</span>
      </div>
    </div>
    <div class="headerNav__navList">
      <div class="navList-item">
        <span class="icon iconfont icon-message"></span>
        <span>我的消息</span>
      </div>
      <div class="navList-item">
        <span class="icon iconfont icon-xiazai2"></span>
        <span>我的好友</span>
      </div>
      <div class="navList-item">
        <span class="icon iconfont icon-tinggeshiqu1" style="font-size:.21rem;"></span>
        <span>听歌识曲</span>
      </div>
      <div class="navList-item">
        <span class="icon iconfont icon-gexingzhuangban" style="font-size:.27rem;"></span>
        <span>个性装扮</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidePageNav",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url(..\assets\font\iconfont.css);
.headerNav {
  box-sizing: border-box;
  height: 1.16rem;
  width: 100%;
  padding-right: 0.19rem;
  padding-left: 0.19rem;
  background: white;
}
.headerNav__vipBox {
  position: relative;
  top: -0.23rem;
  border-radius: 5px;
  height: 0.52rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.12rem 0.1rem;
  box-shadow: 2px 5px 10px rgb(107, 107, 107);
  background: linear-gradient(left, black, rgb(54, 54, 54));
}
.vipBox__leftBox {
  width: 0.78rem;
  position: relative;
  float: left;
}
.vipBox__leftBox:after {
  position: absolute;
  top: 4px;
  right: 0;
  height: 0.2rem;
  width: 1px;
  background: rgb(73, 73, 73);
  content: "";
}
.vipBox__leftBox span {
  color: rgb(240, 240, 240);
  display: block;
  font-size: 0.11rem;
  line-height: 0.14rem;
  font-weight: bolder;
}
.vipBox__leftBox span:nth-child(2) {
  font-weight: normal;
  color: rgb(126, 126, 126);
  font-size: 8px;
  line-height: 15px;
}
.vipBox__rightBox {
  width: 1.5rem;
  float: right;
  height: 100%;
  color: white;
}
.vipBox__rightBox span {
  float: right;
  padding-right: 8px;
  line-height: 0.28rem;
  font-size: 12px;
  color: rgb(167, 167, 167);
}
.vipBox__rightBox img {
  height: 100%;
  float: right;
  border-radius: 50%;
}
.headerNav__navList {
  width: 100%;
  height: 0.54rem;
  padding-bottom: 0.1rem;
}
.headerNav__navList .navList-item {
  display:flex;
  flex-direction: column;
  justify-items: center;
  width: 25%;
  height: 100%;
  float: left;
  text-align: center;
  padding:10px;
  box-sizing: border-box;
  line-height: 0.54rem;
  color: black;
}
.headerNav__navList .navList-item span {
  float: left;
  width:100%;
  text-align: center;
  line-height: .22rem;
  font-size: 12px;
}
.headerNav__navList .navList-item .iconfont{
  font-weight: bolder;
  font-size: .2rem;
  color:#ff2828;
}
</style>