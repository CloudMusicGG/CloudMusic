<!--
 * @Author: Eternal
 * @Date: 2019-11-09 20:09:07
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-11 10:07:51
 * @Description: 
 -->
<template>
    <div class="advertisement">
        <div class="advertisement_w">
            <img class="img" src="../assets/img/g1.jpg" alt="">
            <div class="title">广告</div>
            <i class="icon iconfont Wrong">&#xe603;</i>
        </div>
    </div>
</template>

<script>
export default {
    name:'advertisement',
    data(){
        return {
            
        }
    }
}
</script>

<style coped>
@import url(../assets/font/iconfont.css);
    .advertisement {
        width: 100%;
        height: .5rem;
    }
    .advertisement_w {
        width: 3.49rem;
        height: 100%;
        margin: auto;
        border-radius: .04rem;
        overflow: hidden;
    }
    .title {
        width: .21rem;
        height: .11rem;
        background: #b1d1e1;
        margin-top: .04rem;
        margin-left: .03rem;
        border-radius: .08rem;
        font-size: 8px;
        line-height: .11rem;
        text-align: center;
        color: #fff;
        position: absolute;
        top: .5rem;
        left: .145rem;
    }
    .Wrong {
        position: absolute;
        right:.2rem;
        top: .56rem;
        color: rgb(255, 253, 253);
        font-size: 12px;
    }
    .img {
        width: 100%;
        height: 100%;
        border-radius: .08rem;
    }
</style>