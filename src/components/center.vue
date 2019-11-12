<!--
 * @Author: Eternal
 * @Date: 2019-11-08 20:43:44
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 15:01:23
 * @Description: 
 -->
<template>
  <div class="center">
    <div class="center_w">
      <div class="center-w_header">
        <h3 class="center_h3">推荐歌单</h3>
        <div class="tips">歌单广场</div>
      </div>
      <div class="center-center">
        <ul class="center-center_ul">
          <li class="center-center-ul_li" v-for="(recommends,index) in recommend" :key="index">
            <router-link :to='"/albumPage/"+recommends.id'>
              <span class="center-center_span">
                <img :src="recommends.href" alt class="center-center-span_img" />
              </span>
              <p class="p_vip">{{recommends.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "center",
  data() {
    return {
      recommend: []
    };
  },
  created() {
    fetch("api/recommend")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.recommend = data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.center {
  width: 100%;
}
.center_w {
  width: 3.48rem;
  margin: auto;
}
.center-w_header {
  width: 3.48rem;
  height: 0.52rem;
  /* background:pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
.tips {
  width: 0.64rem;
  height: 0.23rem;
  font-size: 12px;
  text-align: center;
  line-height: 0.23rem;
  border: 1px solid #f6f6f6;
  border-radius: 0.1rem;
  color: #686868;
}
.center_h3 {
  font-size: 15px;
}
.center-center {
  width: 100%;
}
.center-center_ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.center-center-ul_li {
  width: 1.11rem;
  height: 1.45rem;
  margin-bottom: 0.2rem;
}
.center-center_span {
  display: block;
  width: 100%;
  height: 1.095rem;
}
.p_vip {
  font-size: 13px;
  color: #5e5e5e;
  margin-top: 0.02rem;
}
.center-center-span_img {
  width: 100%;
  height: 100%;
  border-radius: 0.02rem;
}
</style>