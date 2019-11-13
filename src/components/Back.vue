<!--
 * @Author: rosalee
 * @Date: 2019-11-13 11:28:10
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 11:47:41
 * @Description: 
 -->

<template>
    <div class="box">
         <!--左箭头-->  
      	<i class="icon iconfont img_left" @click="back">&#xe605;</i>
      	<span>{{backTitle}}</span>
      	<i class="icon iconfont img_right">&#xe60f;</i>
    </div>  
</template>

<script>

export default {
  name: 'Back',
  props:["backTitle"],
  data () {
    return {
      
    }
  },
  methods:{
      back(){
          this.$emit("back");
      }
  }
}
</script>

<style scoped>
.box{
    width: 100%;
    margin: 0 auto;
    height: .45rem;
	color: #fff;
	font-size: .16rem;
}
.box .img_left{
  float: left;
}
span{
	padding-left: .14rem;
  float: left;
  height:100%;
  line-height: .45rem;
}
.icon{
	font-size: .18rem;
	line-height: .45rem;
	padding-left: .18rem;
}
.img_right{
	float: right;
	padding-right: .18rem;
}

</style>
