<!--
 * @Author: Eternal
 * @Date: 2019-11-08 22:55:21
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-09 00:38:46
 * @Description: 
 -->
<template>
    <div class="play">
        <div class="play_center">
            <span class="play_cente_span">
                <img src="../assets/img/p1.jpg" alt="">
            </span>
            <span class="play_center_center">
                <h4>Lover</h4>
                <p>And you say that you'll</p>
            </span>
        </div>
        <div class="play_center_right">
            <span class="play-center-right_play">
                 <i class="icon  iconfont">&#xe67f;</i>
            </span>
             <span class="play-center-right_play play_ico">
                   <i class="icon iconfont">&#xe624;</i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'play',
    data() {
        return {

        }
    }

}
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
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
.play_cente_span img {
    width: .36rem;
    height: .36rem;
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