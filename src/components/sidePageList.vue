<!--
 * @Author: rosalee
 * @Date: 2019-11-09 14:54:48
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 15:21:35
 * @Description: 这是侧边栏页面的各种列表选项
 -->
<template>
  <div class="Lists">
    <div class="listBox">
      <div class="list-item">
        <span
          class="icon iconfont icon-piao"
          style="font-size:.2rem;padding-right:.1rem;line-height:.43rem;"
        ></span>
        <span class="item-titSpan">演出</span>
        <img class="item-img" src="../../static/img/music_Cover12.jpg" alt="">
        <span class="item-detailSpan">莫文蔚北京</span>
      </div>
      <div class="list-item">
        <span
          class="icon iconfont icon-shangcheng"
          style="font-size:.2rem;padding-right:.1rem;line-height:.43rem;"
        ></span>
        <span class="item-titSpan">商城</span>
        <img class="item-img" src="../../static/img/music_Cover09.jpg" alt="">
        <span class="item-detailSpan">网易严选耳机上线,要买的抓紧了啊</span>
      </div>
      <div class="list-item">
        <span
          class="icon iconfont icon-tinggeshiqu"
          style="font-size:.2rem;padding-right:.1rem;line-height:.43rem;"
        ></span>
        <span class="item-titSpan">附近的人</span>
        <span class="item-detailSpan"></span>
      </div>
      <div class="list-item">
        <span
          class="icon iconfont icon-youxi"
          style="font-size:.2rem;padding-right:.1rem;line-height:.43rem;"
        ></span>
        <span class="item-titSpan">游戏推荐</span>
        <img class="item-img" src="../../static/img/music_Cover19.jpg" alt="">
        <span class="item-detailSpan">与赖美云入学</span>
      </div>
      <div class="list-item">
        <span
          class="icon iconfont icon-cailing"
          style="font-size:.2rem;padding-right:.1rem;line-height:.43rem;"
        ></span>
        <span class="item-titSpan">口袋彩铃</span>
        <span class="item-detailSpan"></span>
      </div>
    </div>
    <div class="listBox">
      <div class="list-item">
        <span
          class="icon iconfont icon-geshou"
          style="font-size:.2rem;padding-right:.1rem;line-height:.43rem;"
        ></span>
        <span class="item-titSpan">创作者中心</span>
        <span class="item-detailSpan"></span>
      </div>
    </div>
    <div class="listBox">
      <div class="list-item">
        <span
          class="icon iconfont icon-piao"
          style="font-size:.2rem;padding-right:.1rem;line-height:.43rem;"
        ></span>
        <span class="item-titSpan">演出</span>
        <span class="item-detailSpan"></span>
      </div>
      <div class="list-item">
        <span
          class="icon iconfont icon-piao"
          style="font-size:.2rem;padding-right:.1rem;line-height:.43rem;">
        </span>
        <span class="item-titSpan">演出</span>
        <span class="item-detailSpan"></span>
      </div>
      <div class="list-item">
        <span
          class="icon iconfont icon-piao"
          style="font-size:.2rem;padding-right:.1rem;line-height:.43rem;">
        </span>
        <span class="item-titSpan">演出</span>
        <span class="item-detailSpan"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidePageList",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url(..\assets\font\iconfont.css);
.Lists{
  margin-bottom: .5rem;
}
.listBox {
  width: 2.78rem;
  padding:0.1rem 0;
  margin: 0 auto;
  /* background: blueviolet; */
  border-top: 1px solid rgba(221, 221, 221, 0.445);
}
.list-item {
  height: 0.4rem;
  width: 100%;
}
.list-item span {
  line-height: 0.4rem;
}
.list-item .item-titSpan {
  letter-spacing: 2px;
}
.list-item .item-detailSpan {
  float: right;
  font-size: 12px;
  width:1rem;
  text-align: right;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow:hidden;
}
.item-img{
  height:70%;
  vertical-align: middle;
  float: right;
  border-radius: 50%;
  margin-top: 5px;
  margin-left: 5px;
}
.icontfont{
  color:black;
}
.icon-tinggeshiqu{
  font-weight: bolder;
}
</style>