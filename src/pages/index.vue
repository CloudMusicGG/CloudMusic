<!--
 * @Author: Eternal
 * @Date: 2019-11-07 23:50:18
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 11:55:31
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
    props:['id','songId'],
    data () {
        return {
            flag:false
        }
    },
   components:{
       navigation,banner,sort,center,play,bottom,
       newMusic,selected
   },
   created(){
       //    console.log(this.id);
    //    console.log(this.$route.params);
       this.showOrNot();
    //    console.log(this.flag);
   },
   methods:{
       showOrNot(){
           if(this.$route.params.id){
               this.flag = true;
               this.$emit("sendParams",this.flag,this.$route.params);
           }
       }
   }
}
</script>

<style>
@import url(../assets/font/iconfont.css);
</style>