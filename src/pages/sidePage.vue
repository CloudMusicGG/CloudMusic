<!--
 * @Author: rosalee
 * @Date: 2019-11-09 09:40:56
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 20:23:48
 * @Description: 这是侧边的个人信息页面，“侧边栏”
 -->
<template>
  <!-- <div class="PageCover"> -->
  <div class="bodyBox">
    <sidePageheader v-if="isLogin" @clickParent="getDrawer"></sidePageheader>
    <sidePageUnLogin v-if="!isLogin" @clickParent="getDrawer"></sidePageUnLogin>
    <sidePageNav></sidePageNav>
    <sidePageList></sidePageList>
    <sidePageFooter class="fixedFooter"></sidePageFooter>
  </div>
  <!-- </div> -->
</template>

<script>
import sidePageheader from "../components/sidePageheader";
import sidePageNav from "../components/sidePageNav";
import sidePageList from "../components/sidePageList";
import sidePageFooter from "../components/sidePageFooter";
import sidePageUnLogin from "../components/sidePageUnLogin";
export default {
  name: "sidePage",
  data() {
    return {
      isLogin:true
    };
  },
  components: {
    sidePageheader,
    sidePageNav,
    sidePageList,
    sidePageFooter,
    sidePageUnLogin
  },
  methods: {
    getDrawer(data) {
      this.$emit("clickGrandPa",data);
      console.log(data);
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
/* .PageCover {
  width: 100%;
  height: 100%;
  background-color: rgba(73, 73, 73, 0.486);
} */
.bodyBox {
  background: white;
  overflow-y: auto;
  height: 100%;
  width: 3.15rem;
  box-shadow: 0 0 20px rgba(34, 34, 34, 0.445);
  margin-bottom: .5rem;
}
.contentBox {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;
}
.fixedFooter {
  position: fixed;
  bottom: 0;
  left: 0;
  /* width:3.15rem; */
}
</style>