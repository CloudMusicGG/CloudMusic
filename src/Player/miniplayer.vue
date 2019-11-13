<template>
    <div class="play" @click="showPlayer">	
        <div class="play_center">
            <span class="play_cente_span">
                <img :src="img" alt="">
            </span>
            <span class="play_center_center">
                <h4>{{songName}}</h4>
                <p>{{singer}}</p>
            </span>
        </div>
        <div class="play_center_right">
            <span class="play-center-right_play" @click="play" v-show="isPlay">
                 <i class="icon  iconfont">&#xe67f;</i>
            </span>
            <span class="play-center-right_play" @click="pause" v-show="!isPlay">
                 <i class="icon  iconfont">&#xe64f;</i>
            </span>
             <span class="play-center-right_play play_ico">
                   <i class="icon iconfont">&#xe624;</i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
	props:["isPlay","playMes"],
    name:'miniplayer',
    data() {
        return {
			
        }
    },
    computed:{
    	img(){
    		if(this.playMes.imgUrl){
    			return this.playMes.imgUrl;
    		}else{
    			return "../static/img/no-pic.png";
    		}
    	},
    	songName(){
    		if(this.playMes.songName){
    			return this.playMes.songName;
    		}else{
    			return "暂无歌曲";
    		}
    	},
    	singer(){
    		if(this.playMes.singer){
    			return this.playMes.singer;
    		}else{
    			return "暂无歌手";
    		}
    	}
    },
    methods:{
    	showPlayer(){
    		this.$emit("showPlayer");
    	},
    	play(event){
    		this.$emit("play");
    		event.stopPropagation();
    	},
    	pause(event){
    		this.$emit("pause");
    		event.stopPropagation();
    	}
    }
}
</script>

<style scoped>
.play {
    display: flex;
    width: 100%;
    height: .46rem;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    justify-content: space-between;
    align-items: center;
    background: #fff;

}
.play_center {
    display:flex;
    height: .37rem;
}
.play_center_right {
    width: 0.77rem;
    height: 0.27rem;
}
.play_cente_span {
    display: inline-block;
    width: .36rem;
    height: .36rem;
    border-radius: 50%;
    margin-left:.04rem; 
    margin-right:.04rem; 
}
.play_cente_span img{
    border-radius: 50%;
}
.play_cente_span img {
    width: .36rem;
    height: .36rem;
}
.play_center_center{
	padding-left: .1rem;
}
.play_center_center p{
   color: #868686;
}
.play-center-right_play {
    display: inline-block;
    width: .26rem;
    height: .26rem;
}
.play_ico {
    margin-left:.13rem;
    
}

.play-center-right_play i {
    font-size: .26rem;
    color: #c7c7c7;
}
.play_ico i {
    color:#4d4d4d;
}
</style>