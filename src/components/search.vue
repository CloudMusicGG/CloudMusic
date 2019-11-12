<!--
 * @Author: Eternal
 * @Date: 2019-11-09 17:55:13
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-11 16:48:56
 * @Description: 
 -->
<template>
    
    <div>
        <div class="search">
           <div class="search_w">
               <i class="icon iconfont" @click="back()">&#xe605;</i>
               <div class="search-input">
                    <input class="search_input" type="text" placeholder="陈奕迅" v-model="input1" @click="searchResult()">
                    <i class="icon iconfont search-input_ico" @click="eliminate()">&#xe603;</i>
               </div>
                <i class="icon iconfont singer">&#xe79f;</i>
           </div>
           <!-- 搜索记录 -->
           <div class="record"  v-show="kk">
               <p class="record-header">搜素“{{this.input1}}”</p>
               <ul class="record_ul">
                   <li v-for="(Recordas,index) in Record" :key="index">
                       <i class="icon iconfont record-ul_ico">&#xe628;</i>
                       <p class="record-ul_p">{{Recordas.name}}</p>
                       <p class="record-ul_SongName">{{Recordas.SongName}}</p>
                   </li>
               </ul>
           </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios';
export default { 
    name:'search',
    data(){
        return {
           input1:"",
           kk:false,
           allrecordFirst:[],
           Record:[],
           recordFirst:{}
        }
    },
    created(){
        axios.get("/result")
        .then(res=>{
            this. allrecordFirst = res.data;
            // console.log(this.Record)
            this.Record = this.searchResultpag(this.allrecordFirst)
            this.recordFirst = res.data[0];
        })
    },
    beforeUpdate(){
    //   console.log("数据更新了------------：");
       this.Record = this.searchResultpag(this.allrecordFirst)
  },
    methods:{
        back(){
            this.$router.go(-1); 
        },
        eliminate(){
            this.input1 =""
            this.kk = false
        },
        searchResult(){
           this.kk = true
        },
        searchResultpag(data){
           let arr = [];
           for(let i in data){
               if(data[i].name == this.input1){
                   arr.push(data[i]);
                   
               }
           }
           return arr;
        }
    }
}
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
    .search {
        width:100%;
        height: .32rem;
        padding-top: .06rem;
        position: fixed;
        top:0;
        background: #fff;
        z-index: 999;
    }
    .search_w {
        display: flex;
        width: 3.49rem;
        height: 100%;
        margin: auto;
        justify-content: space-between;
        align-items: center;
    }
    .search_w .icon {
        font-size: .14rem;
        color: #393939;  
    }
    .search_input {
        width: 2.62rem;
        height: .31rem;
        border:0;
        outline: none;
        background:transparent; 
        border-bottom: 1px solid #d6d6d6;

    }
    .search-input .search-input_ico {
        font-size: .17rem;
        color: #272727;
        position: absolute;
        right: .55rem;
        top: .13rem;

    }
    .search_w .singer {
        font-size: .2rem;
        color: #343434;
       
    }
    /*搜索记录 */
   .record {
       width: 2.87rem;
       height: 5.03rem;
       background: #fff;
       margin-left: .12rem;
       margin-top: .12rem;
       border: 1px solid #f3f3f3;
        box-shadow: -1px 4px 14px #ccc;
   }
   .record-header {
       width: 96%;
       height: .44rem;
       line-height: .44rem;
       padding-left: 4%;
       font-size: 12px;
       color: #c4d3e4;
       border-bottom: 1px solid #f3f3f3;
   }
   .record_ul li {
       display: flex;
       width: 96%;
       height: .44rem;
       border-bottom: 1px solid #f3f3f3;
       line-height: .44rem;
       padding-left: 4%;
   }
   .record-ul_ico {
       font-size: .15rem;
       margin-right: .12rem;
       color: #b4b6b9;
   }
   .record-ul_p {
       font-size: 14px;
       color: #737373;
   }
   .record-ul_SongName {
       margin-left: .08rem;
       font-size: 14px;
       color: #737373;
   }
</style>