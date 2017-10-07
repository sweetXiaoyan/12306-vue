 <template>
  <div class="ticketList">
    <top-nav :showContent="showContent"></top-nav>
    <div class="mainContent">
      <!--标题信息-->
      <div class="titleMsg">
        <div class="leftArea">
          <span>前一天</span>
        </div>
        <div class="centerArea">
          <div class="timePicker">
            <input type="date" id="time" name="time">
            <span class="picker-icon"></span>
          </div>
        </div>
        <div class="rightArea">
          <span>后一天</span>
        </div>
      </div>
      <!--车票列表-->
      <ul class="tickets">
        <li class="ticketItem">
          <!--上部分-->
          <div class="partMsg"></div>
          <!--下部分-->
          <div class="otherMsg"></div>
        </li>
      </ul>
      <!--其他交通方案-->
      <div class="otherWays"></div>
      <!--底部导航-->
      <ul class="footerNav">
        <li  class="navItem">
          <span class="icon"></span>
          <span class="text">出发</span>
        </li>
        <li class="navItem">
          <span class="icon"></span>
          <span class="text">耗时</span>
        </li>
        <li class="navItem">
          <span class="icon"></span>
          <span class="text">历时</span>
        </li>

      </ul>

    </div>
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
  .ticketList{
    background-color: #edf1fa;
    width: 100%;
    height: 750px;  /*记得删除*/
    /*底部导航*/
    .footerNav{
      width: 100%;
      height: 50px;
      position: fixed;
      bottom: 0;
      left:0;
      display: flex;
      text-align:center;
      background-color:#fff;
      line-height:50px;
      .navItem{
        display: block;
        flex: 1;
      }
    }
    /*标题信息*/
    .titleMsg{
      height: 48px;
      width: 100%;
      background-color: #fff;
      font-size:14px;
      line-height:48px;
      color: #1fcca9;
      .leftArea{
        width: 20%;
        float: left;
        padding-left: 10px;
        box-sizing: border-box;

      }
      .rightArea{
        width: 20%;
        float: right;
        text-align: right;
        padding-right: 10px;
        box-sizing: border-box;
      }
      .centerArea{
        width: 60%;
        display: inline-block;
        text-align: center;
        input{

        }
      }
    }
  }
</style>
