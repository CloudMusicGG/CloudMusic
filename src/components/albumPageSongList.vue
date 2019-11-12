<!--
 * @Author: rosalee
 * @Date: 2019-11-11 20:31:23
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 19:45:35
 * @Description: 
 -->
<template>
  <div class="albumSongListBox">
    <div class="playAllSong">
      <span class="icon iconfont icon-bofang1"></span>
      <span>
        播放全部
        <b>(共85首)</b>
      </span>
      <b class="icon iconfont icon-wenjianjia"></b>
    </div>
    <ul>
      <li v-for="(song,index) in songs" :key="index">
          <span class="li-num">{{index+1}}</span>
          <router-link :to='"/musicplay/"+id' class="li__songInfo">
            <div class="songInfo-name">{{song.name}}</div>
            <div class="songInfo-detail">{{song.brief}}</div>
          </router-link>
          <span class="icon iconfont icon-gengduo4 li-more"></span>
          <span class="icon iconfont icon-bofang li-video"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: "albumPageSongList",
  props:['id'],
  data() {
    return {
      songs:[]
    };
  },
  created(){
    Axios.get('/search',{params:{rid:this.id}})
    .then(Response=>{
      this.songs = Response.data;
      console.log(this.songs);
    })
  }
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.albumSongListBox {
  /* height: 5rem; */
  width: 90%;
  padding: 0 5%;
  background: white;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}
.playAllSong .iconfont {
  font-size: 0.23rem;
  vertical-align: middle;
}
.playAllSong {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
}
.playAllSong b {
  color: gray;
  font-weight: normal;
  font-size: 12px;
  margin-left: 0.05rem;
}
.playAllSong span {
  margin-right: 0.16rem;
}
.playAllSong .icon-wenjianjia {
  font-size: 0.18rem;
  float: right;
}
.albumSongListBox li{
  height:.56rem;
  line-height: .56rem;
}
.li-num,.li__songInfo{
  float: left;
}
.li__songInfo{
  width:2.65rem;
  height: .56rem;
  padding: 10px;
  padding-left: .2rem;
  line-height: .2rem;
  box-sizing: border-box;
}
.albumSongListBox li .iconfont{
  float: right;
  margin-right:.1rem;
  text-align: center;
  color: gray;
  font-size: .2rem;
}
.li-num{
  font-size: .19rem;
  color: gray;
}
.songInfo-name{
  height: 65%;
  font-size: .14rem;
  color:rgb(51, 51, 51);
  font-weight: bolder;
  letter-spacing: 4px;
}
.songInfo-detail{
  height:35%;
  font-size: .12rem;
  color:gray;
  line-height: .12rem;
}
.songInfo-name,.songInfo-detail{
  width: 90%;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: 1px;
}
</style>