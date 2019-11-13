<!--
 * @Author: rosalee
 * @Date: 2019-11-08 18:06:17
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 11:54:43
 * @Description: 
 -->
<template>
  <div id="app">
    <div v-show="!showPlay">
      <div class="navgation">
        <div class="navgation_w">
          <!-- <span class="img_left"><img src="static/img/a1.jpg" alt=""></span> -->
          <i
            @click="drawer = true"
            type="primary"
            style="margin-left: 16px;"
            class="icon iconfont icon-more_active"
          ></i>
          <div class="navgation_center">
            <ul class="navgation_center_ul">
              <li>
                <router-link to="/myPage">
                  <span :class="{red:(key==0),black:!(key==0)}" @click="changeParams(0)">我的</span>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span :class="{red:(key==1),black:!(key==1)}" @click="changeParams(1)">发现</span>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span :class="{red:(key==2),black:!(key==2)}" @click="changeParams(2)">云村</span>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span :class="{red:(key==3),black:!(key==3)}" @click="changeParams(3)">视频</span>
                </router-link>
              </li>
            </ul>
            <!-- <span class="icon iconfont icon-zhangdan"></span> -->
          </div>
          <router-link to="/searchpage">
            <i class="el-icon-search ico"></i>
          </router-link>
        </div>
      </div>

      <el-drawer :visible.sync="drawer" :direction="'ltr'" :size="'3.15rem'">
        <sidePage class="sidePage" @clickGrandPa="getFinalDrawer"></sidePage>
      </el-drawer>

      <transition name="component-fade" mode="out-in">
        <router-view class="content" @sendParams="getParams"/>
      </transition>
      <!-- <play class="play"></play> -->
      <!--大播放器-->
    </div>
    <musicplay class="musicplay" :showPlay="showPlay" @back="back" ref="musicplay" @isPlay="isPlay"></musicplay>
    <!--小播放器-->
    <miniplayer
      class="miniplayer"
      @showPlayer="showPlayer"
      @play="play"
      @pause="pause"
      :isPlay="miniIsPlay"
      :playMes="obj"
    ></miniplayer>
  </div>
</template>

<script>
import Vue from "vue";
import { Drawer } from "element-ui";
import sidePage from "@/pages/sidePage";
import musicplay from "@/Player/musicplay";
import miniplayer from "@/Player/miniplayer";
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      key: 1,
      showPlay: false,
      miniIsPlay: true,
      obj: {}
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getFinalDrawer(data) {
      if (data == 1) this.drawer = false;
      console.log(this.drawer);
    },
    changeParams(num) {
      console.log(this.key);
      this.key = num;
      console.log(this.key);
    },
    //  点击小播放器进入大播放器
    showPlayer() {
      this.showPlay = true;
    }, //	点击大播放器退出按钮退出大播放器
    back() {
      this.showPlay = false;
    },
    play() {
      this.$refs.musicplay.play();
    },
    pause() {
      this.$refs.musicplay.pause();
    },
    isPlay(date, obj) {
      this.miniIsPlay = date;
      this.obj = obj;
    },
    //获取从index传过来的正在播放的歌曲歌单信息
    getParams(data1,data2){
      this.showPlay = data1;
      console.log(data2);
    }
  },
  components: {
    sidePage,
    musicplay,
    miniplayer
  }
};
</script>

<style>
@import url(../src/assets/font/iconfont.css);
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 26.67vw;
  height: 100%;
}
body {
  font-size: 14px;
  height: 100%;
}
.red {
  color: red;
  font-size: 18px;
}
/* #app { 
  margin-top: 5px;
} */
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
  display: block;
}
#app {
  height: 100%;
}
.content {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.component-fade-enter-active,
.component-fade-leave-active {
  /* transition: opacity .5s ease; */
  transition: all 0.2s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  /* opacity: 0; */
  transform: translateX(-100%);
}
.sidePage {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
}
.navgation {
  width: 100%;
  height: 0.4rem;
  margin-bottom: 0.15rem;
  padding-top: 0.06rem;
  position: relative;
  top: 0;
  background: #fff;
  z-index: 999;
  position: fixed;
}
.navgation_w {
  display: flex;
  align-items: center;
  width: 3.48rem;
  height: 100%;
  /* background: orange; */
  margin: auto;
}
.img_left {
  display: block;
  font-size: 0.2rem;
}
.img_left img {
  width: 0.24rem;
  height: 0.19rem;
}
.navgation_center {
  margin: auto;
  width: 2.25rem;
  height: 100%;
  /* background:orchid; */
}
.navgation_center_ul {
  display: flex;
}
.navgation_center_ul li {
  width: 0.56rem;
  /* background:pink; */
  text-align: center;
  line-height: 0.34rem;
  font-size: 16px;
}
.ico {
  font-size: 0.2rem;
}

.musicplay{
	position: fixed;
	bottom: 0;
	height: 100%;
	z-index: 1001;
	/*display: none;*/
}
.miniplayer{
	position: fixed;
	bottom: 0;
	height: 100%;
	z-index: 1000;
	/*display: none;*/
}
</style>
