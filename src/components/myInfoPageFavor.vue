<!--
 * @Author: rosalee
 * @Date: 2019-11-11 17:48:20
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 18:21:51
 * @Description: 
 -->
<template>
  <div class="favorBox">
    <div class="listenList">
      <i class="iconImg icon iconfont icon-bofang4"></i>
      <div class="listenList__titBox">
        <span>听歌排行</span>
        <span>累计听歌1581首</span>
      </div>
    </div>
    <div class="listenList">
      <i class="iconImg icon iconfont icon-tinggeshiquyishoucang"></i>
      <div class="listenList__titBox">
        <span>我喜欢的音乐</span>
        <span>172首</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myInfoPageFavor",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.favorBox {
  width: 90%;
  padding: 0.3rem 5%;
}
.listenList {
  margin-top: 5px;
  height: 0.5rem;
}
.iconImg {
  float: left;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 5px;
  width: 0.5rem;
  height: 0.5rem;
  color: white;
}
.icon-bofang4 {
  background: linear-gradient(top, rgb(224, 17, 17), rgb(54, 4, 4));
}
.listenList__titBox {
  width: 80%;
  float: left;
}
.listenList__titBox span {
  width: 80%;
  margin-left: 10px;
  display: block;
  font-size: 12px;
  line-height: 0.25rem;
  color: gray;
}
.listenList__titBox span:nth-child(1) {
  font-size: 14px;
  color: black;
}
.icon-tinggeshiquyishoucang{
  color:red;
  line-height: .5rem;
  font-size:.3rem;
  background-color: rgb(255, 243, 239);
}
</style>