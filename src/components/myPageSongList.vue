<!--
 * @Author: rosalee
 * @Date: 2019-11-10 21:30:30
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 15:08:52
 * @Description: 这是我的收藏歌单列表
 -->
<template>
  <div class="songlist">
    <div class="songlist-nav" @click="showSongList">
      <span class="icon iconfont icon-you" :class="xia"></span>
      {{type}}的歌单
      <span class="songnum">({{songs.length}})</span>
      <i class="icon iconfont icon-gengduo4"></i>
    </div>
    <!-- 以下是点击之后出现的部分 -->
    <div v-for="(song,index) in songs" :key="index" class="songlist__contentBox" v-show="flag">
      <router-link :to='"/albumPage/"+song.id' class="contentBox__itemBox">
        <img :src="song.href" alt class="contentBox-img" />
        <div class="contentBox__titBox">
          <span class="titBox-tit">{{song.title}}</span>
          <span class="titBox-detail">85首 by killBunny</span>
        </div>
        <span class="icon iconfont icon-gengduo4" style="color:gray;"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "myPageSongList",
  props: ["type"],
  data() {
    return {
      songs: [],
      flag: true,
      xia: ""
    };
  },
  methods: {
    showSongList: function() {
      this.flag = !this.flag;
      if (this.flag) {
        this.xia = "icon-arrow-up";
      } else {
        this.xia = "";
      }
    }
  },
  created() {
    Axios.get("/recommend").then(response => {
      console.log(response.data);
      this.songs = response.data;
    });
  }
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.songlist {
  width: 100%;
  /* height: 2rem; */
  /* background:black; */
}
.songlist-nav {
  height: 0.41rem;
  width: 90%;
  /* background: rgb(223, 190, 190); */
  margin: 0 auto;
  line-height: 0.41rem;
}
.iconfont {
  margin-right: 3px;
}
.songlist-nav i {
  float: right;
}
.songnum {
  font-size: 12px;
  color: gray;
}
.songlist__contentBox {
  /* height: 2rem; */
  width: 90%;
  margin: 0 auto;
}
.contentBox__itemBox {
  height: 0.6rem;
  padding: 0.08rem 0;
}
.contentBox__itemBox span {
  float: right;
  line-height: 0.6rem;
}
.contentBox-img {
  height: 100%;
  float: left;
  border-radius: 5px;
}
.contentBox__titBox {
  letter-spacing: 1px;
  /* background: black; */
  float: left;
  padding: 0.1rem;
  height: 100%;
  width: 2.54rem;
  box-sizing: border-box;
}
.contentBox__titBox span {
  float: left;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 0.2rem;
}
.titBox-detail {
  font-size: 12px;
  color: gray;
}
</style>