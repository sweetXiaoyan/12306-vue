<!--车票详情-->
<template>
  <div class="ticketDetail">
    <!--顶部导航-->
    <top-nav :showContent="showContent"></top-nav>
    <!--站点展示-->
    <div class="sites">

    </div>
    <!--车票详细-->
    <div class="detailData"></div>
    <!--乘客数据-->
    <div class="passengerData"></div>
    <!--添加乘客-->
  </div>
</template>

<script>
  import TopNav from '../components/common/topNav/index'
  export default {
    components:{TopNav},
    data(){
      return{
        showContent:{
          showBack:true,
          titleContent:'深圳北 张家界西'
        },
      }
    }
  }
</script>

<style scoped lang="less">

</style>
