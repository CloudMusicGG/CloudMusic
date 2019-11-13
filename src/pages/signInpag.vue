<!--
 * @Author: Eternal
 * @Date: 2019-11-11 17:05:09
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 10:48:07
 * @Description: 
 -->
<template>
    <div class="box">
        <mobile></mobile>
    </div>
</template>

<script>
import mobile from '../components/singInpag-mobile'
export default {
    name:"signInpag",
    // props:['id'],
    data(){
        return {

        }
    },
    components:{
      mobile 
    }
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    background: url(../assets/img/b.jpg) no-repeat; background-size: 100% 100%;
    position: relative;
    top: 0;
    z-index: 999;
    margin: 0;
}
</style>