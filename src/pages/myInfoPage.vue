<!--
 * @Author: rosalee
 * @Date: 2019-11-11 09:37:37
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 20:56:49
 * @Description: 
 -->
<template>
  <div class="box">
    <!-- <div @click="myMethod">nihaonihaonihaonihap</div> -->
    <myInfoPageBack></myInfoPageBack>
    <myInfoPageHeader></myInfoPageHeader>
    <myInfoPageBaseInfo></myInfoPageBaseInfo>
    <myInfoPageFavor class="myInfoPageFavor"></myInfoPageFavor>
    <myInfoPageSongList class="myInfoPagSongList" type="创建"></myInfoPageSongList>
    <myInfoPageSongList class="myInfoPagSongList" type="收藏" ref="childmethod"></myInfoPageSongList>
  </div>
</template>

<script>
import myInfoPageBack from "@/components/myInfoPageBack";
import myInfoPageHeader from "@/components/myInfoPageHeader";
import myInfoPageBaseInfo from "@/components/myInfoPageBaseInfo";
import myInfoPageSongList from "@/components/myInfoPageSongList";
import myInfoPageFavor from "@/components/myInfoPageFavor";
export default {
  name: "myInfoPage",
  props: ["telephoneNum"],
  data() {
    return {};
  },
  components: {
    myInfoPageBack,
    myInfoPageHeader,
    myInfoPageBaseInfo,
    myInfoPageSongList,
    myInfoPageFavor
  }
  // ,
  // methods: {
  //   myMethod() {
  //     console.log("点击了");
  //     console.log(this.$refs.childmethod.printit());
  //   }
  // }
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.box {
  /* height: 100%; */
  width: 100%;
  position: relative;
  z-index: 9999;
  margin-top: 0;
  background: url(..\..\static\img\music_Cover14.jpg) center top;
}
.myInfoPagSongList,
.myInfoPageFavor {
  background: white;
}
</style>