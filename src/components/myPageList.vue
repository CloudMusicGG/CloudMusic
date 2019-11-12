<!--
 * @Author: rosalee
 * @Date: 2019-11-10 20:22:32
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-10 21:58:50
 * @Description: 
 -->
<template>
  <div class="listbox">
    <div class="listbox__item">
      <span class="icon iconfont icon-yinyue"></span>
      <span class="item-title">
        本地音乐
        <b>(12)</b>
      </span>
    </div>
    <div class="listbox__item">
      <span class="icon iconfont icon-zuijinbofang1"></span>
      <span class="item-title">
        最近播放
        <b>(232)</b>
      </span>
    </div>
    <div class="listbox__item">
      <span class="icon iconfont icon-xiazai1"></span>
      <span class="item-title">
        下载管理
        <b>(0)</b>
      </span>
    </div>
    <div class="listbox__item">
      <span class="icon iconfont icon-diantai"></span>
      <span class="item-title">
        我的电台
        <b>(2)</b>
      </span>
    </div>
    <div class="listbox__item">
      <span class="icon iconfont icon-shoucanggeshou"></span>
      <span class="item-title">
        我的收藏
        <b>(12)</b>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPageList",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.listbox {
  width: 100%;
  /* height: 2.44rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  background: #f5f5f5;
}
.listbox__item {
  background:white;
  height: 0.5rem;
  width: 100%;
  position: relative;
}
.iconfont {
  width: 0.7rem;
  height: 100%;
  display: block;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.5rem;
  float: left;
  /* background: black; */
}

.item-title {
  float: left;
  width: 3.03rem;
  border-top: 1px solid rgba(233, 233, 233, 0.363);
  height: 100%;
  text-align: left;
  letter-spacing: 2px;
  line-height: 0.5rem;
}
.listbox .listbox__item:nth-child(1) .item-title{
  border:none;
}
.item-title b {
  font-weight: normal;
  color: gray;
  font-size: 12px;
  letter-spacing: .5px;
}
</style>