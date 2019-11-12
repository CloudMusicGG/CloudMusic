<!--
 * @Author: rosalee
 * @Date: 2019-11-11 19:22:37
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 11:07:28
 * @Description: 这是歌单点进去的歌曲列表页
 -->
<template>
  <div class="albumBox">
    <myInfoPageBack class="myInfoPageBack"></myInfoPageBack>
    <albumPageInfo :id='id'></albumPageInfo>
    <albumPageSongList :id='id'></albumPageSongList>
  </div>
</template>

<script>
import myInfoPageBack from "@/components/myInfoPageBack";
import albumPageSongList from "@/components/albumPageSongList";
import albumPageInfo from "@/components/albumPageInfo";
export default {
  name: "albumPage",
  props:['id'],
  data() {
    return {
    };
  },
  components: {
    myInfoPageBack,
    albumPageSongList,
    albumPageInfo
  },
  created(){
    console.log(this.id);
  }
};
</script>

<style scoped>
.albumBox {
  width: 100%;
  background: linear-gradient(Left, black, gray);
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
  margin-top: 0;
}
.myInfoPageBack {
  position: relative;
  color: rgba(255, 255, 255, 0.719);
}
.myInfoPageBack:after {
  content: "歌单";
  position: absolute;
  left: 0.5rem;
  letter-spacing: 4px;
  top: 0;
  font-size: 0.18rem;
  color: rgba(255, 255, 255, 0.719);
}
</style>