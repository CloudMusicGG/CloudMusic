<template>

  <div class="progress-bar">
    <div class="rogress-bar-sttime">{{singlong}}</div>
    <div class="progress-bar-wrapper">
			<!--进度条-->
      <div class="progress-bar-inner" :style="{'width':`${left}%`}">
      </div>

      <!--<div class="progress-bar-btn" ref="btn" @touchstart.prevent.stop="btnOnTouchStart" @touchmove.prevent.stop="btnOnTouchMove" @touchend.prevent.stop="btnOnTouchEnd">-->
      	<!--豆豆-->
      <div class="progress-bar-btn" :style="{'left':`${left}%`}">
      </div>

    </div>
    <div class="rogress-bar-edtime">{{songlong}}</div>
  </div>
</template>

<script>
export default {
  name: 'progressbar',
	props:["songlongT","singlongT"],
	computed:{
		left(){
			return (this.singlongT/this.songlongT)*100-2;
		},
		songlong(){
			let secondTime = this.songlongT;
			let minuteTime = 0;// 分
	    let hourTime = 0;// 小时
	    if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
	        //获取分钟，除以60取整数，得到整数分钟
	        minuteTime = parseInt(secondTime / 60);
	        //获取秒数，秒数取佘，得到整数秒数
	        secondTime = parseInt(secondTime % 60);
	        //如果分钟大于60，将分钟转换成小时
	        if(minuteTime > 60) {
	            //获取小时，获取分钟除以60，得到整数小时
	            hourTime = parseInt(minuteTime / 60);
	            //获取小时后取佘的分，获取分钟除以60取佘的分
	            minuteTime = parseInt(minuteTime % 60);
	        }
	    }
	    secondTime = secondTime<10?"0"+secondTime:secondTime;
	    minuteTime = minuteTime<10?"0"+minuteTime:minuteTime;
	    return minuteTime + ":" + secondTime;
		},
		singlong(){
				let secondTime = this.singlongT;
			  let minuteTime = 0;// 分
        let hourTime = 0;// 小时
        if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
            //获取分钟，除以60取整数，得到整数分钟
            minuteTime = parseInt(secondTime / 60);
            //获取秒数，秒数取佘，得到整数秒数
            secondTime = parseInt(secondTime % 60);
            //如果分钟大于60，将分钟转换成小时
            if(minuteTime > 60) {
                //获取小时，获取分钟除以60，得到整数小时
                hourTime = parseInt(minuteTime / 60);
                //获取小时后取佘的分，获取分钟除以60取佘的分
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        secondTime = secondTime<10?"0"+secondTime:secondTime;
        minuteTime = minuteTime<10?"0"+minuteTime:minuteTime;
        return minuteTime + ":" + secondTime;
		}
	}
//props: {
//  ratio: {
//    type: Number,
//    default: 0
//  },
//  sttime: {
//    type: String,
//    default: ""
//  },
//  edtime: {
//    type: String,
//    default: ""
//  }
//},
//created() {
//  this.touchState = {};
//},
//methods: {
//  btnOnTouchStart(e) {
//    //debugger
//    this.touchState.isInit = true; // touch状态设置为truw
//    this.touchState.startX = e.touches[0].pageX; // 手指开始位置
//    const progressLength = this.$refs.inner.style.width; // 已经播放的长度
//    this.touchState.progessWidth = // 由于width取出来是含有px的，处理一下 =>得到数值
//      progressLength.length > 2
//        ? progressLength.substring(0, progressLength.length - 2) * 1
//        : 0;
//  },
//  btnOnTouchMove(e) {
//    //debugger;
//    // 判断有没有touchStart
//    if (!this.touchState.isInit) {
//      return;
//    }
//    const offSetX = e.touches[0].pageX - this.touchState.startX; // 手指在水平方向移动的距离
//    const barWidth = window.innerWidth * 0.7; // 整个进度条的长度
//    const progressWidth = Math.min(
//      barWidth,
//      Math.max(0, this.touchState.progessWidth + offSetX) // 最小为0 最大为整个进度条长度
//    );
//    this.touchState.finalRatio = progressWidth / barWidth;// 比例
//    this.setOffSetWidth(progressWidth); // 设置进度条
//  },
//  
//  btnOnTouchEnd(e) {
//    this.touchState.isInit = false;
//    //将比例传给父页面，改变歌曲进度
//    this.$emit("barOnChange", this.touchState.finalRatio);
//  },
//  setOffSetWidth(width) {
//    this.$refs.inner.style.width = width + "px";
//    this.$refs.btn.style.left = width + "px";
//  }
//},
//watch: {
//  // 百分比变化使得小球，进度条变化
//  ratio(newRatio) {
//    //debugger
//    // if(newRatio==0){
//    //    this.$refs.inner.style.width = 0 + "px";
//    // }
//    if (!this.touchState.isInit && newRatio >= 0) {
//      // 之前设置-值=>为了使得小球在前面一点，但是宽度设-就会导致已经播放进度条不会重置
//      //这里还是恢复0作为起点
//      let currentWidth = window.innerWidth * 0.7 * newRatio;
//      this.setOffSetWidth(currentWidth);
//    }
//  }
//}
};
</script>

<style scoped>
.progress-bar {
  width: 100%;
  padding-top: .1rem;
  display: flex;
  align-items: center;
}

.progress-bar-wrapper {
    /*//display: inline-block;*/
    width: 70%;
    height: 2px;
    margin: 0 auto;
    position: relative;
    border-radius: 50px;
    background-color: #a59c9c;
    
}
.progress-bar-inner {
      background: #ddd;
      height: 2px;
      width: 0px;
}
.progress-bar-btn {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  position: absolute;
  border: solid 5px #C20C0C;
  top: -7px;
  background: #fff;
  box-sizing: border-box;
  left: -5px;
}
.rogress-bar-sttime {
    /*//display: inline-block;*/
    font-size: 0.06rem;
    color: #fff;
    position: absolute;
    left: .2rem;
}
.rogress-bar-edtime {
    /*//display: inline-block;*/
    font-size: 0.06rem;
    color: #fff;
    position: absolute;
    right: .2rem;
}
</style>

