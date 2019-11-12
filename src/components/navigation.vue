<!--
 * @Author: Eternal
 * @Date: 2019-11-07 23:51:33
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-09 20:27:56
 * @Description: 
 -->
<template>
    <div class="navgation">
        <div class="navgation_w">
            <!-- <span class="img_left"><img src="static/img/a1.jpg" alt=""></span> -->
             <i class="icon iconfont img_left">&#xe601;</i>
            
            <div class="navgation_center">
                <ul class="navgation_center_ul">
                    <li>我的</li>
                    <li>发现</li>
                    <li>云村</li>
                    <li>视频</li>
                </ul>
                <!-- <span class="icon iconfont icon-zhangdan"></span> -->
            </div>
             <i class="el-icon-search ico" ></i>
        </div>
    </div>
</template>

<script>
export default {
    name:"navgation",
    data(){
        return {

        }
    }
}
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.navgation{
    width:100%;
    height:.4rem;
    margin-bottom:.15rem;
    padding-top: .06rem;
    position: relative;
    top:0;
    background: #fff;
    z-index: 999;
}
.navgation_w {
    display: flex;
    align-items: center;
    width: 3.48rem;
    height: 100%;
    /* background: orange; */
    margin: auto;
}
.img_left {
    display: block;
    font-size: .2rem;
    
}
.img_left img{
    width:.24rem;
    height:.19rem;
}
.navgation_center {
    margin:auto;
    width:2.25rem;
    height: 100%;
    /* background:orchid; */
}
.navgation_center_ul {
    display:flex;
}
.navgation_center_ul li {
    width:.56rem;
    /* background:pink; */
   text-align: center;
   line-height: .34rem;
   font-size: 16px;
    
}
.ico {
    font-size: .2rem;
}
</style>