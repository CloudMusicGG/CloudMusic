<!--
 * @Author: rosalee
 * @Date: 2019-11-11 15:28:13
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 17:09:05
 * @Description: 这是基本信息部分
 -->
<template>
  <div class="baseBox">
    <h3>基本信息</h3>
    <span>村龄: 3年</span>
    <span>年龄: 95后 白羊座</span>
    <span>地区: 甘肃省 定西市</span>
  </div>
</template>

<script>
export default {
  name:"myInfoPageBaseInfo",
  data(){
    return{}
  }
}
</script>

<style scoped>
.baseBox{
  /* height:2rem; */
  width:100%;
  padding:5%;
  box-sizing: border-box;
  background:white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
h3{
  margin:10px auto .15rem;
  font-size:.18rem;
  letter-spacing: 1px;
}
.baseBox span{
  display:block;
  height:.28rem;
  line-height: .28rem;
  color:gray;
  font-size:13px;
  letter-spacing: 2px;
}
</style>