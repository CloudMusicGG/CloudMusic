<!--
 * @Author: Eternal
 * @Date: 2019-11-07 23:50:18
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 21:28:11
 * @Description: 
 -->
<template>
    <div class="goodsdetail">
        <!-- <navigation></navigation> -->
        <banner></banner>
        <sort></sort>
        <center></center>
        <newMusic></newMusic>
        <selected></selected>

        <!-- <bottom></bottom> -->
    </div>
</template>

<script>
import navigation from "../components/navigation"
import banner from "../components/banner"
import sort from "../components/sort"
import center from "../components/center"
import play from "../components/play"
import bottom from "../components/bottom"
import newMusic from "../components/newMusic"
import selected from "../components/selected"
export default {
    name:"index",
    props:['id'],
    data () {
        return {
            
        }
    },
   components:{
       navigation,banner,sort,center,play,bottom,
       newMusic,selected
   }
}
</script>

<style>
@import url(../assets/font/iconfont.css);
</style>