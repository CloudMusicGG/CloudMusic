<!--
 * @Author: Eternal
 * @Date: 2019-11-11 21:39:30
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 10:49:32
 * @Description: 
 -->
<template>
    <div class="regBox">
        <numberLogin></numberLogin>
    </div>
</template>

<script>
import numberLogin from '../components/registrationpag-numberLogin'
export default {
    name:"registrationpag",
    data(){
        return {

        }
    },
    components:{
        numberLogin
    }
}
</script>

<style scoped>
    .regBox{
        height:100%;
        margin:0;
        position: relative;
        top: 0;
        z-index: 999;
        background:white;
    }
</style>