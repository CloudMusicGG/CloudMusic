<!--
 * @Author: rosalee
 * @Date: 2019-11-10 21:30:30
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 17:40:48
 * @Description: 这是我的收藏歌单列表
 -->
<template>
  <div class="songlist">
    <div class="songlist-nav" @click="showSongList">
      {{type}}的歌单
      <span class="songnum">({{allSongs.length}})</span>
    </div>
    <!-- 以下是点击之后出现的部分 -->
    <div v-for="(song,index) in songs" :key="index" class="songlist__contentBox">
      <div class="contentBox__itemBox">
        <img :src='song.href' alt class="contentBox-img" />
        <div class="contentBox__titBox">
          <span class="titBox-tit">{{song.title}}</span>
          <span class="titBox-detail">85首 by killBunny</span>
        </div>
      </div>
    </div>
    <span class="showAll" v-if="flag" @click="showAllSongs">显示全部歌单 ></span>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "myInfoPageSongList",
  props:['type'],
  data() {
    return {
      allSongs:[],
      songs:[],
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
    },
    showAllSongs(){
      this.songs = this.allSongs;
      this.flag = false;
    }
  },
  created(){
    Axios.get('/recommend')
    .then(response=>{
      console.log(response.data);
      this.allSongs = (response.data);
      this.songs = (response.data).slice(0,3);
    })
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
  font-weight: bolder;
  font-size:.15rem;
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
  width:100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: .2rem;
}
.titBox-detail{
  font-size: 12px;
  color:gray;
}
.showAll{
  margin: 0 auto;
  display:block;
  padding:.2rem;
  width:2rem;
  text-align: center;
  color:gray;
  font-size:12px;
}
</style>