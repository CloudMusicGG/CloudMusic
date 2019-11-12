<!--
 * @Author: rosalee
 * @Date: 2019-11-10 14:05:18
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-10 20:56:33
 * @Description: 这是“我的"页面的图标导航部分
 -->
<template>
   <div class="navBox">
     <div class="navBox__item">
       <img src="../assets/img/navImg01.png" alt="">
       <span class="itemText">私人FM</span>
     </div>
     <div class="navBox__item">
       <img src="../assets/img/navImg02.png" alt="">
       <span class="itemText">最嗨电音</span>
     </div>
     <div class="navBox__item">
       <img src="../assets/img/navImg03.png" alt="">
       <span class="itemText">ACG专区</span>
     </div>
     <div class="navBox__item">
       <img src="../assets/img/navImg04.png" alt="">
       <span class="itemText">Sati空间</span>
     </div>
     <div class="navBox__item">
       <img src="../assets/img/navImg01.png" alt="">
       <span class="itemText">私藏歌单</span>
     </div>
     <div class="navBox__item">
       <img src="../assets/img/navImg01.png" alt="">
       <span class="itemText">私人FM</span>
     </div>
   </div>
</template>

<script>
export default {
  name:"myPageNav",
  data(){
    return {}
  }
}
</script>

<style scoped>
.navBox{
  height: .98rem;
  width:100%;
  border-bottom: 1px solid rgba(233, 233, 233, 0.363);
  /* background: rgb(179, 158, 158); */
  display:flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
}
.navBox__item{
  flex-shrink:0;
  height:100%;
  width:.83rem;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  color: gray;
}
.navBox__item img{
  height:.4rem;
  width:.4rem;
}
</style>