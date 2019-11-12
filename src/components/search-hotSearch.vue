<!--
 * @Author: Eternal
 * @Date: 2019-11-09 20:51:57
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-11 00:36:57
 * @Description: 
 -->
<template>
    <div class="hotSearch">
       <div class="hostSearch_w">
           <h4 class="hostSearch_w_h4">热搜榜</h4>
            <ul class="hostSearch_ul">
                <li class="hostSearch_ul_li" v-for="(searchs,index) in search" :key = "index"> 
                    <div class="left">
                        <span class="num">{{searchs.num}}</span>
                        <div class="songName">
                            <h3 class="songName_top">
                                {{searchs.name}}
                                <i class="ico_title">{{searchs.hot}}</i>
                            </h3>
                            <p class="songName_bottom">{{searchs.brief}}</p>
                        </div>
                    </div>
                    <span class="visit">{{searchs.BroadcastingRate}}</span>
                </li>
            </ul>
       </div>
    </div>
</template>

<script>
export default {
    name: 'hotsearch',
    data(){
      return {
          search:[],
      }
    },
    created(){
        fetch('api/search')
        .then(res=>{
            return res.json()
            
        })
        .then(data=>{
            this.search = data
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style coped>
    .hotSearch {
        width: 100%;
    }
    .hostSearch_w {
        width:3.49rem;
        height: .28rem;
        margin:auto;
    }
    .hostSearch_w_h4 {
        margin-top: .19rem;
        font-size: 14px;
        color: #333333;
        line-height: .28rem;
    }
    .hostSearch_ul_li {
       display: flex;
       justify-content: space-between;
        width: 100%;
        height: .48rem;
        margin-top: .04rem;
    }
    .left {
        display: flex;
        align-items: center;
    }
    .num {
        display: inline-block;
        /* width: .19rem; */
        height: .19rem;
        line-height: .19rem;
        text-align: center;
        margin-right: .22rem;
        color: red;
        font-weight: 700;
        font-size: .16rem;
    }
    .songName {
        /* width: .4rem; */
        height: .4rem;
    }
    .songName_top {
        color: #2b2b2b;
        font-size: .14rem;
    }
    .songName_bottom {
        color: #b1b1b1;
        font-size: 12px;
        margin-top: .04rem; 
    }
    .ico_title {
        color: red;
        font-weight: none;
        font-size:Oblique;
    }
    .visit {
        display: inline-block;
       color: #d1d1d1;
       font-size: 12px;
       margin-top: .1rem;
    }
</style>