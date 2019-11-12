<!--
 * @Author: rosalee
 * @Date: 2019-11-12 14:28:04
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 15:25:33
 * @Description: 
 -->
<template>
<div class="musicplay">
  <myInfoPageBack></myInfoPageBack>
</div>
</template>

<script>
import myInfoPageBack from "@/components/myInfoPageBack";
export default {
  name:"musicplay",
  props:['id'],
  data(){
    return {}
  },
  created(){
    console.log(this.id);
  },
  components:{
    myInfoPageBack
  }
}
</script>

<style scoped>
.musicplay{
  height:3rem;
  width:100%;
  background:white;
  z-index:999;
  margin-top: 0;
  position: relative;
}
</style>