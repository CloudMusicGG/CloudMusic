<!--
 * @Author: Eternal
 * @Date: 2019-11-08 20:43:44
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 19:00:01
 * @Description: 
 -->
<template>
    <div class="center">
        <div class="center_w">
            <div class="center-w_header">
                <h3 class="center_h3">
                    新碟
                    <span class="new_music">新歌</span>
                </h3>
                <div class="tips">
                   更多新碟
                </div>
            </div>
            <div class="center-center">
                <ul class="center-center_ul">
                    <li class="center-center-ul_li" v-for="(newMusics,index) in newMusic" :key="index">
                        <span class="center-center_span">
                            <img :src="newMusics.img" alt="" class="center-center-span_img">
                        </span>
                        <p class="p_vip">{{newMusics.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'newMusic',
    data(){
        return{
            newMusic:[],
        }
    },
    created(){
        fetch('api/newMusic')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.newMusic = data;
        })
        .catch(err=>{
             console.log(err)
        })
    }
}
</script>

<style scoped>
    .center{
        width:100%;
    }
    .center_w{
        width: 3.48rem;
          margin:auto;
    }
    .center-w_header{
        width: 3.48rem;
        height: 0.52rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin:auto;
    }
    .tips {
        width: .64rem;
        height:.23rem;
        font-size: 12px;
        text-align:center;
        line-height: .23rem;
        border: 1px solid #f6f6f6;
        border-radius: .1rem;
        color:#686868;
    }
    .center_h3 {
        font-size: 15px;
    }
    .new_music {
        display: inline-block;
        width: .39rem;
        height: .18rem;
        border-left: 1px solid #ececec;
        text-align: center;
        color: #969696;
        font-weight: 400;
        font-size: .12rem;
        line-height: .18rem;
    }
    .center-center {
        width: 100%;
        
    }
    .center-center_ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .center-center-ul_li {
        width: 1.11rem;
        height: 1.45rem;
        margin-bottom: .2rem;
    }
    .center-center_span {
        display:block;
        width: 100%;
        height: 1.095rem;
    }
    .p_vip {
        font-size: 13px;
        color: #5e5e5e;
        margin-top: .02rem;
    }
    .center-center-span_img {
        width:100%;
        height:100%;
        border-radius: .02rem;
    }
</style>