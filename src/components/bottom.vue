<!--
 * @Author: Eternal
 * @Date: 2019-11-08 23:55:10
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-09 00:39:26
 * @Description: 
 -->
<template>
    <div class="bottom">
        <div class="bottom_w">
            <ul class="bottom_w_ul">
                <li>
                    <i class="icon iconfont">&#xe601;</i>
                </li>
                 <li>
                    <i class="icon iconfont">&#xe613;</i>
                </li>
                  <li>
                    <i class="icon iconfont">&#xe606;</i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "bottom",
    data(){
        return {

        }
    }
}
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
    .bottom {
        width: 100%;
        height: .45rem;
        display: flex;
        align-items:center;
        background: #fff;
        
    }
    .bottom_w {
        width: 1.67rem;
        height: .18rem;
        margin: auto;
    }
    .bottom_w_ul {
        display: flex;
        justify-content: space-between;
    }
    .bottom_w_ul li{
        width: .15rem;
        height: .18rem;
        /* background: rgb(248, 62, 5); */
    }
   .icon {
       color: #7b7b7b;
   }
</style>