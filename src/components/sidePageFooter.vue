<!--
 * @Author: rosalee
 * @Date: 2019-11-09 15:31:53
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-09 16:10:23
 * @Description: 
 -->
<template>
  <div class="footerbox">
    <span>退出</span>
    <span class="icon iconfont icon-tuichu"></span>
  </div>
</template>

<script>
export default {
  name:"sidePageFooter",
  data(){
    return {
      
    }
  }
};
</script>

<style scoped>
@import url(..\assets\font\iconfont.css);
.footerbox{
  border-top: 1px solid rgba(221, 221, 221, 0.445);
  height:.5rem;
  padding:.14rem .19rem;
  width:3.15rem;
  box-sizing: border-box;
  background:white;
  box-shadow: 0 0 5px 2px rgba(204, 204, 204, 0.384);
}
.footerbox span{
  float: right;
}
.iconfont{
  margin-right: 10px;
  line-height: .22rem;
}
</style>