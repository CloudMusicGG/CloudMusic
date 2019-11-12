<!--
 * @Author: Eternal
 * @Date: 2019-11-08 19:14:48
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-08 20:38:57
 * @Description: 
 -->
<template>
    <div class="sort">
        <div class="sort_w">
            <ul class="sort-w_ul">
                <li class="sort-w_ul_li">
                   <i class="sort-w_ul_li_ico">
                       <img src="../assets/img/c1.jpg" alt="">
                   </i>
                   <span  class="sort_center">每日推荐</span>
                </li>
                 <li class="sort-w_ul_li">
                   <i class="sort-w_ul_li_ico">
                       <img src="../assets/img/c2.jpg" alt="">
                   </i>
                   <span  class="sort_center">歌单</span>
                </li>
                 <li class="sort-w_ul_li">
                   <i class="sort-w_ul_li_ico">
                       <img src="../assets/img/c3.jpg" alt="">
                   </i>
                   <span  class="sort_center">排行榜</span>
                </li>
                 <li class="sort-w_ul_li">
                   <i class="sort-w_ul_li_ico">
                       <img src="../assets/img/c4.jpg" alt="">
                   </i>
                   <span  class="sort_center">电台</span>
                </li>
                 <li class="sort-w_ul_li">
                   <i class="sort-w_ul_li_ico">
                       <img src="../assets/img/c5.jpg" alt="">
                   </i>
                   <span  class="sort_center">直播</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'sort',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.sort {
    width: 100%;
    height:.78rem;
    margin: .12rem 0;
    border-bottom: 1px solid #efefef;
}
.sort_w {
    width:3.48rem;
    height: 100%;
    margin: auto;
}
.sort-w_ul {
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: .78rem;
}
.sort-w_ul_li {
    width:.48rem;
    
    
}
.sort-w_ul_li_ico {
    display:block;
    width: .445rem;
    height: .445rem;
}
.sort-w_ul_li_ico img {
    width:100%;
    height:100%;
    border-radius: 50%;
}
.sort_center {
    font-size: 12px;
    width:100%;
    display: block;
    margin-top: .02rem;
    text-align:center;
}
</style>