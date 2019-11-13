<!--
 * @Author: rosalee
 * @Date: 2019-11-13 14:47:03
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 16:08:17
 * @Description: 
 -->
<template>
  <div class="changeInfoPageBox">
    <changeMyInfoBack backTitle="我的资料"></changeMyInfoBack>
    <changeMyInfoList></changeMyInfoList>
  </div>
</template>

<script>
import changeMyInfoBack from "@/components/changeMyInfoBack";
import changeMyInfoList from "@/components/changeMyInfoList";
export default {
  name: "changeMyInfoPage",
  data() {
    return {
    }
  },
  components: {
    changeMyInfoBack,
    changeMyInfoList
  }
};
</script>

<style scoped>
.changeInfoPageBox{
  height:100%;
  width: 100%;
  background:white;
  position: relative;
  z-index:1001;
  margin:0;
  background: #eeeeee;
}
</style>>
