<!--车票详情-->
<template>
  <div class="ticketDetail">
    <!--顶部导航-->
    <top-nav :showContent="showContent"></top-nav>
    <!--站点展示-->
    <ul class="sites">
      <li class="siteItem">
          <p class="siteName">深圳</p>
          <span class="siteShape">
            <i class="siteFlag circle1"></i>
            <span class="siteLine line1"></span>
          </span>
          <p class="siteTime">16:30</p>
      </li>
      <li class="siteItem">
          <p class="siteName">深圳</p>
          <span class="siteShape">
            <i class="siteFlag circle2"></i>
            <span class="siteLine line2"></span>
          </span>
          <p class="siteTime">16:30</p>
      </li>
      <li class="siteItem">
          <p class="siteName">深圳</p>
          <span class="siteShape">
            <i class="siteFlag circle3"></i>
            <span class="siteLine line2"></span>
          </span>
          <p class="siteTime">16:30</p>
      </li>
      <li class="siteItem">
          <p class="siteName">深圳</p>
          <span class="siteShape">
            <i class="siteFlag circle3"></i>
            <span class="siteLine line2"></span>
          </span>
          <p class="siteTime">16:30</p>
      </li>
      <li class="siteItem">
          <p class="siteName">深圳</p>
          <span class="siteShape">
            <i class="siteFlag circle3"></i>
            <span class="siteLine line2"></span>
          </span>
          <p class="siteTime">16:30</p>
      </li>
      <li class="siteItem">
          <p class="siteName">深圳</p>
          <span class="siteShape">
            <i class="siteFlag circle3"></i>
          </span>
          <p class="siteTime">16:30</p>
      </li>
    </ul>
    <!--车票详细-->
    <ul class="detailData">
      <li class="seatType">
        <div class="activeType">
          <span class="type">商务座</span>
          <span class="number">120张</span>
          <span class="price">￥238.0</span>
        </div>
      </li>
      <li class="seatType ">
        <span class="type">一等座</span>
        <span class="number">57张</span>
        <span class="price">￥208.0</span>
      </li>
      <li class="seatType">
        <span class="type">二等座</span>
        <span class="number">23张</span>
        <span class="price">￥180.0</span>
      </li>
      <li class="seatType">
        <span class="type">无座</span>
        <span class="number">110张</span>
        <span class="price">￥180.0</span>
      </li>
    </ul>
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
        sites:["深圳","广州","邵安","衡阳","邯郸","邢台","张家界西"]
      }
    }
  }
</script>

<style scoped lang="less">
  .ticketDetail{
    background-color: #edf1fa;
    padding-bottom:20px;
   /*站点展示*/
    .sites{
      background-color: #20e4bf;
      height: 100px;
      width: 100%;
      box-sizing: border-box;
      padding:10px 20px;
      .siteItem{
        margin-top:10px;
        float:left;
        font-size: 12px;
        color: #f4f4f4;
        .siteName{

        }
        .siteShape{
          display: inline-block;
          padding: 6px 0;
          .siteFlag{
            vertical-align: middle;
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            box-sizing: border-box;
          }
          .circle1{  /*虚圆*/
            border: 1px solid #e2e2e2;
          }
          .circle2{/*实圆*/
            background-color: orange;
            border: 3px solid #fafafa;
          }
          .circle3{  /*空圆*/
            border: 2px solid #fafafa;
          }

          /*线*/
          .siteLine{
            vertical-align: middle;
            display: inline-block;
            width: 40px;
            height: 0;

          }
          .line1{ /*虚线*/
            border-top: 2px dashed #efefef;
          }
          .line2{ /*实线*/
            border-top: 2px solid #efefef;
          }
        }
        .siteTime{

        }
      }
    }
    /*站点展示结束*/
    /*车票详细*/
    .detailData{
      width: 100%;
      background-color: white;
      display: flex;
      padding:10px;
      box-sizing:border-box;
      .seatType{
        flex: 1;
        padding: 8px 8px;
        font-size: 12px;
        text-align:center;
        span{
          display: block;
        }
        .type{
          font-size:14px;
        }
        .number{
          color: #939393;
          transform: scale(0.9);
        }
        .price{
          color: #1fcca9;
          transform: scale(0.9);
        }
      }
      .activeType{
        border: 1px solid #42b983;
      }
    }
    /*车票详细结束*/
    /*乘客数据*/
    .passengerData{

    }
    /*乘客数据结束*/
  }

</style>
