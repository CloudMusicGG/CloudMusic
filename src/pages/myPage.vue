<!--
 * @Author: rosalee
 * @Date: 2019-11-10 14:02:49
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-10 23:32:18
 * @Description: 
 -->
<template>
  <div>
    <myPageNav></myPageNav>
    <myPageList></myPageList>
    <myPageSongList type="创建"></myPageSongList>
    <myPageSongList type="收藏"></myPageSongList>
  </div>
</template>

<script>
import myPageNav from "@/components/myPageNav";
import myPageList from "@/components/myPageList";
import myPageSongList from "@/components/myPageSongList";
export default {
  name: "myPage",
  data() {
    return {};
  },
  components: {
    myPageNav,
    myPageList,
    myPageSongList
  }
};
</script>

<style>
</style>