<!--
 * @Author: Eternal
 * @Date: 2019-11-09 10:07:33
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-11 19:00:23
 * @Description: 
 -->
<template>
    <div class="selected">
        <div class="selected_w" v-for="(selecteds,index) in selected" :key="index">
           <div class="selected_header">
               <h3>{{selecteds.h3}}</h3>
               <div class="obtain">
                     <i class="icon iconfont">&#xe619;</i>
                   <span class="obtain_span">{{selecteds.obtain}}</span>
               </div>
           </div>
           <div class="selected_center">
               <h4 class="selected_center_h4">{{selecteds.header}}</h4>
               <div class="selected_center_img">
                   <img :src="selecteds.img" alt="">
               </div>
               <div class="subscript">
                   <p class="subscript_p">{{selecteds.title}}</p>
                   <span class="subscript_head">
                       <img :src="selecteds.head" alt="">
                   </span>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selected',
    data(){
        return {
            selected:[],
        }
    },
    created(){
        fetch('api/selected')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.selected = data,
            console.log(this.selected)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style scoped>
    .selected {
        width: 100%;
        /* background: #efefef; */
    }
    .selected_w {
        width: 3.48rem;
        margin: auto;
        
    }
    .selected_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: .43rem;
        border-bottom: 1px solid rgb(224, 224, 224);
       
    }
    .obtain {
        width: .82rem;
        height: .23rem;
        line-height: .23rem;
        color: #787878;
    }
    .obtain_span {
        font-size: 12px;
    }
   .selected_center {
       width: 100%;
       height: 2.85rem;
   }
    .selected_center_h4 {
        width: 100%;
        height: .39rem;
        line-height: .39rem;
        color: #bebebe;
        font-weight: 400;
    }
    .selected_center_img {
        width: 3.42rem;
        height: 1.94rem;
    }
    .selected_center_img img {
        width: 100%;
        height: 100%;
    }
    .subscript {
        display:flex;
        justify-content: space-around;
        align-items: center;
        width: 3.42rem;
        height: 0.45rem;
        background: #f3f3f3; 
        border-bottom-left-radius: .04rem;
        border-bottom-right-radius: .04rem;
    }
    .subscript_p {
        color: #313131;
        font-size: 14px;
    }
    .subscript_head {
        display: inline-block;
        width: .39rem;
        height: .39rem;
    }
    .subscript_head img {
         width: .39rem;
        height: .39rem; 
    }
   
</style>