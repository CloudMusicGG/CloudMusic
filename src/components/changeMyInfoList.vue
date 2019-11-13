<!--
 * @Author: rosalee
 * @Date: 2019-11-13 14:47:50
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 16:23:29
 * @Description: 
 -->
<template>
  <div class="changeInfoBox">
    <ul class="changeInfoList">
      <li>
        <span class="title">头像</span>
        <img class="value" src="" alt />
      </li>
      <li>
        <span class="title">昵称</span>
        <span class="value">Pelo_Rosa</span>
      </li>
      <li>
        <span class="title">性别</span>
        <span class="value">女</span>
      </li>
    </ul>
    <ul class="changeInfoList">
      <li>
        <span class="title">生日</span>
        <span class="value">女</span>
      </li>
      <li>
        <span class="title">地区</span>
        <span class="value">Pelo_Rosa</span>
      </li>
    </ul>
    <ul class="changeInfoList">
      <li>
        <span class="title">签名</span>
        <span class="value">女</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"changeMyInfoList",
  data(){
    return{
    }
  },
  created(){
    console.log();
  }
};
</script>

<style scoped>
.changeInfoList {
  width: 95%;
  padding: 0 5%;
  padding-right: 0;
  margin-top: 5px;
  background: white;
  float: left;
}
.changeInfoList li {
  line-height: .5rem;
  float: left;
  width:95%;
  border-bottom: 1px solid #eeeeee;
  padding-top: 0.11rem;
  padding-bottom: 0.11rem;
  padding-right: 5%;
}
.changeInfoList li:nth-last-child(1){
  border-bottom: 0;
}
.changeInfoList li .title{
  height: .5rem;
  float: left;
  font-size: .17rem;
}
.changeInfoList li .value{
  height: .5rem;
  font-size: .13rem;
  color:gray;
  float: right;
}
</style>