<!--
 * @Author: Eternal
 * @Date: 2019-11-08 10:32:22
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 18:58:52
 * @Description: 
 -->
<template>
    <div class="banner">
         <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(obj,index) in objs" :key="index"  >
                <a v-bind:href="obj.href"><img :src="obj.src" alt="" class="banner_img"></a>
                </div>
            </div>        
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name:"banner",
    data(){
        return {
            objs:[]
        }
    },
    created(){
        fetch('api/bannerimgs')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.objs = data;
            this.$nextTick(function (){
                var mySwiper = new Swiper ('.swiper-container',{
                    autoplay:true,
                    speed:300,
                    loop: true,
                    grabCursor:true,
                    pagination: {
                    el: '.swiper-pagination'
                    }
                })  
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>



<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.banner {
    width: 100%;
    height: 1.21rem;
}
.swiper-container {
    width: 3.48rem;
    height: 100%;
    background: olivedrab;
    margin: auto;
    border-radius: .04rem;
}
.banner_img {
    width: 3.48rem;
    height: 100%;
}
 .swiper-container{
    --swiper-theme-color: #ff3c00;
    /* --swiper-pagination-color: #00ff33; */
  }
</style>