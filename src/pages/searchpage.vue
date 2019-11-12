<!--
 * @Author: Eternal
 * @Date: 2019-11-09 17:17:48
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 18:26:47
 * @Description: 
 -->
<template>
    <div>
       <search class="sear"></search> 
       <advertisement></advertisement>
       <hotSearch></hotSearch>
    </div>
</template>

<script>
import search from '../components/search'
import advertisement from '../components/search-advertisement'
import hotSearch from '../components/search-hotSearch'

export default {
    name: "searchpage",
    data(){
        return {

        }
    },
     components:{
        search, advertisement,hotSearch
    }
}
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.sear {
    margin-bottom: .49rem;
}
</style>