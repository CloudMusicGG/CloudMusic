<template>
	<div id="music" class="musicBox" v-show="showPlay">
		<!--背景图块-->
		<div class="bgBox" :style="{'background-image':`url(${backgroundUrl})`}">
		</div>
		<!--返回按钮-->
		<Back @back="back" :backTitle = "songName"></Back>
		<!--旋转封面图-->
		<div class="normal-player-cd">
	        <div class="cd">
	          <div class="cd-wrapper">
	            <img class="image" :src="backgroundUrl" :class="cdCls">
	            <img :src="cdBackgroundUrl" class="bgimage">
	          </div>
	        </div>
		</div>
		<!--功能按钮-->
		<div class="iconBox">
			<ul>
				<li><i class="icon iconfont">&#xe6c1;</i></li>
				<li><i class="icon iconfont">&#xe62a;</i></li>
				<li><i class="icon iconfont">&#xe615;</i></li>
				<li><i class="icon iconfont">&#xe63a;</i></li>
				<li><i class="icon iconfont">&#xe738;</i></li>
			</ul>
		</div>
		<!--播放控制台-->
		<div class="playBox">
			<progressbar  class="progress-bar-outer" :singlongT="singlong" :songlongT="songlong"></progressbar>
			<!--<progress-bar @barOnChange="barOnChange" class="progress-bar-outer" :ratio="ratio" :sttime="sttime" :edtime="edtime"></progress-bar>-->
			<div class="playIcon">
				<ul>
					<li v-show="!isLoop" @click="loop"><i class="icon iconfont">&#xe619;</i></li>
					<li v-show="isLoop" @click="loop"><i class="icon iconfont">&#xe65b;</i></li>
					<li><i class="icon iconfont" @click="last">&#xe645;</i></li>
					<li @click="play" v-show="isPlay"><i class="icon iconfont playIconFont">&#xe67f;</i></li>
					<li @click="pause" v-show="!isPlay"><i class="icon iconfont playIconFont">&#xe64f;</i></li>
					<li><i class="icon iconfont" @click="next">&#xe607;</i></li>
					<li><i class="icon iconfont" @click="drawer = true">&#xe624;</i></li>
				</ul>
			</div>
		</div>
        <audio :src="songUrl" ref="audio" @timeupdate="updateTime" @canplaythrough="getSongTime" @ended="end" :loop="isLoop"></audio>
		<el-drawer
		  title="当前播放"
		  :visible.sync="drawer"
		  :direction="direction"
		  :size="'4rem'"
		  >
		  <ul class="songsheetBox">
		  	<li v-for="(item,index) in songList" :key="index" @click="ListQie(item,index)"><span>{{item.songName}}</span> - <span>{{item.singer}}</span></li>
		  </ul>
		</el-drawer>
	</div>
</template>

<script>
import Axios from "axios";
import Back from "../components/Back";
import progressbar from "./progressbar.vue";
export default {
  name: 'musicplay',
  props:["showPlay"],
  
  data () {
    return {
	  songUrl:"还没歌曲数据",
	  imgUrl:"还没图片数据",
	  songIndex:0,
	  songName:"",
	  singer:"",
	  
	  songId:"01001",
	  songList:[],
	  songDetail:{},
	  
	  cdBackgroundUrl: "../static/img/disc.png",
	  drawer: false,
	  direction: 'btt',
	  isPlay:true,
	  isLoop:false,
	  singlong:"0",
	  songlong:"0",
	  isQie:false
    }
  },
  components:{
	Back,progressbar
  },
  computed:{
//	背景图
    backgroundUrl() {
    	if(this.songList){
    		return this.imgUrl || "../static/img/no-pic.png";
    	}else{
    		return  "../static/img/no-pic.png";
    	}
    },
//  封面图旋转
    cdCls() {
      if(!this.isPlay){
      	return "animation";
      }else{
      	return "";
      }
    },
    imgUrl_F(){
    	
    }
  },
  beforeCreate(){
  },
  created(){
//	获取所有歌曲信息
    Axios.get('/songs')
    .then((response)=> {
//  	歌曲列表
        this.songList = response.data;
        
    })
    .catch(function (error) {
        console.log(error);
    });
//  获取要播放歌曲
    Axios.get('/songs',{params:{id:this.songId}})
    .then((response)=> {
        this.songDetail = response.data[0];
	    this.songUrl= this.songDetail.url;
	    this.imgUrl= this.songDetail.img;
	    this.songName= this.songDetail.songName;
	    this.singer= this.songDetail.singer;
	    
	    for(let song=0;song<this.songList.length;song++){
	    	if(this.songList[song].id == this.songId){
	    		this.songIndex = song;
	    	}
	    }
    })
    .catch(function (error) {
        console.log(error);
    });
    
  },
  beforeUpdate(){
  	
  },
  updated(){
  	if(this.isQie){
  		this.play()
  	};
  },
  mounted(){
  },
  methods:{
  	back(){
        this.$emit("back");
  	},
  	play(){
  		this.$refs.audio.play();
		this.isPlay = false;
  		this.isQie = false;
    	this.$emit("isPlay",false,{songName:this.songName,imgUrl:this.imgUrl,singer:this.singer});
  	},
  	pause(){
  		this.$refs.audio.pause();
		this.isPlay = true;
    	this.$emit("isPlay",true,{songName:this.songName,imgUrl:this.imgUrl,singer:this.singer});
  	},
  	updateTime(e){
  		let secondTime = parseInt(e.target.currentTime);
        this.singlong = secondTime;
  	},
  	getSongTime(e){
  		let secondTime = parseInt(e.target.duration);
        this.songlong = secondTime;
  	},
  	end(e){
  	  this.isPlay = true;
  	  this.next();
  	},
  	last(){
  	  if(this.songIndex<=0){
  	  	this.songIndex = this.songList.length-1;
  	  }else{
	  	this.songIndex-=1;
	  }
  	  this.songUrl = this.songList[this.songIndex].url;
  	  this.imgUrl = this.songList[this.songIndex].img;
	  this.songName=  this.songList[this.songIndex].songName;
	  this.singer=  this.songList[this.songIndex].singer;
  	  this.isQie = true;
  	},
  	next(){
  	  if(this.songIndex>=this.songList.length-1){
  	  	this.songIndex = 0;
  	  }else{
	  	this.songIndex+=1;
	  }
  	  this.songUrl = this.songList[this.songIndex].url;
  	  this.imgUrl = this.songList[this.songIndex].img;
	  this.songName= this.songList[this.songIndex].songName;
	  this.singer= this.songList[this.songIndex].singer;
  	  this.isQie = true;
  	},
  	ListQie(data,index){
  	  this.songUrl = data.url;
  	  this.imgUrl = data.img;
	  this.songName= data.songName;
	  this.singer= data.singer;
	  this.songIndex = index;
  	  this.isQie = true;
  	},
  	loop(){
  		this.isLoop = !this.isLoop;
  	}
  }
}
</script>

<style scoped>
.musicBox{
	width: 100%;
	height: 100%;
  	background: #666;
}
/*背景图块*/
.bgBox{
   /* // 遮罩=> 模糊效果*/
  	background: #cfd0c6;
	width: 100%;
	height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1111;
    filter: blur(8px);
    -webkit-filter: blur(8px);
}
/*旋转封面图*/
.normal-player-cd {
	position: absolute;
	left:0;
	top:0;
	right: 0;
	bottom: 0;
	margin: auto;
	height: 50%;
	
}
.cd {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  box-sizing: border-box;      
}
.cd-wrapper {
    width: 50%;
    border-radius: 50%;
    border: double #9c9999 3px;
    position: relative;
}
.bgimage {
    position: absolute;
    left: -.4rem;
    top: -.4rem;
    width: 140%;
}
.image {
	display: block;
	width: 100%;
	border-radius: 50%;
  }
  .animation{
    animation: rotate 20s linear infinite;
    -webkit-animation:rotate 20s linear infinite;
  }
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
    /*animation-play-state: paused; 
    cd停止旋转*/

.iconBox{
	position: absolute;
	bottom: 18%;
	left: 0;
	width: 100%;
	height: 5%;
}
.iconBox ul{
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	color: #fff;
}
.iconfont{
	font-size: .21rem;
}
.playBox{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 18%;
}

.playIcon{
	height: 80%;
	width: 80%;
	margin: 0 auto;
}
.playIcon ul{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
}
.playIcon ul li i{
	display: block;
	color: #fff;
	height: 100%;
	line-height: 1rem;
}
.playIconFont{
	font-size: .48rem;
}
.songsheetBox{
	border-top: 1px solid #EBEEF5;
}
.songsheetBox li{
	height: .4rem;
	line-height: .4rem;
	text-indent: .2rem;
	color: #555;
}
.songsheetBox li span:first-child{
	color: #222;
	font-size: .14rem;
}
.songsheetBox li span:last-child{
	font-size: .12rem;
}
</style>
<style>
	.el-drawer{
		border-top-left-radius: .2rem;
		border-top-right-radius: .2rem;
	}
	.el-drawer__header{
		margin: 0;
		padding: .2rem 0 .1rem;
	}
	.el-drawer__header>:first-child{
		text-indent: .2rem;
		color: #222;
		
	}
	.el-drawer__header>:last-child{
		margin-right: .2rem;
		
	}
	.el-drawer__body{
		overflow-y: auto;
	}
</style>