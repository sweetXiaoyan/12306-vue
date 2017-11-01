<!--车票列表-->
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
           <a href="javascript:;">
             <span class="icon-calendar"></span>
             <span class="picker-icon">{{curTime}}</span>
           </a>
          </div>
        </div>
        <div class="rightArea">
          <span>后一天</span>
        </div>
      </div>
      <!--车票列表-->
      <ul class="tickets">
        <li class="ticketItem" @click="checkTicket">
          <!--上部分-->
          <div class="partMsg">
            <div class="place start">
              <p>深圳北</p>
              <span>07:52</span>
            </div>
            <div class="between">
              <span class="trainNum">G 520</span>
              <a href="javascript:;">
                <i class="icon-start"></i>
                <i class="hr_1"></i>
                <i class="icon-cross"></i>
                <i class="icon-over" v-if="false"></i>
              </a>
              <span class="trainTime">13:12</span>
            </div>
            <div class="place end">
              <div class="endBox">
                <p>张家界西</p>
                <span>18:20</span>
              </div>
            </div>
            <div class="price">
              <p>￥<span>150起</span></p>
            </div>
          </div>
          <div class="hr_dash"></div>
          <!--下部分-->
          <div class="otherMsg">
            <span>商务座：0张</span>
            <span>一等座：0张</span>
            <span class="hasExist">二等座：3张</span>
            <span class="hasExist">无座：440张</span>
            <i class="halfRound leftCircle"></i>
            <i class="halfRound rightCircle"></i>
          </div>
        </li>
        <li class="ticketItem" @click="checkTicket">
          <!--上部分-->
          <div class="partMsg">
            <div class="place start">
              <p>深圳北</p>
              <span>07:52</span>
            </div>
            <div class="between">
              <span class="trainNum">G 520</span>
              <a href="javascript:;">
                <i class="icon-start"></i>
                <i class="hr_1"></i>
                <i class="icon-cross"></i>
                <i class="icon-over" v-if="false"></i>
              </a>
              <span class="trainTime">13:12</span>
            </div>
            <div class="place end">
              <div class="endBox">
                <p>张家界西</p>
                <span>18:20</span>
              </div>
            </div>
            <div class="price">
              <p>￥<span>150起</span></p>
              <span class="ticketState">仅剩251张</span>
            </div>
          </div>
          <div class="hr_dash"></div>
          <!--下部分-->
          <div class="otherMsg">
            <span>商务座：0张</span>
            <span>一等座：0张</span>
            <span class="hasExist">二等座：3张</span>
            <span class="hasExist">无座：440张</span>
            <i class="halfRound leftCircle"></i>
            <i class="halfRound rightCircle"></i>
          </div>
        </li>
        <li class="ticketItem" @click="checkTicket">
          <!--上部分-->
          <div class="partMsg">
            <div class="place start">
              <p>深圳北</p>
              <span>07:52</span>
            </div>
            <div class="between">
              <span class="trainNum">G 520</span>
              <a href="javascript:;">
                <i class="icon-start"></i>
                <i class="hr_1"></i>
                <i class="icon-cross"></i>
                <i class="icon-over" v-if="false"></i>
              </a>
              <span class="trainTime">13:12</span>
            </div>
            <div class="place end">
              <div class="endBox">
                <p>张家界西</p>
                <span>18:20</span>
              </div>
            </div>
            <div class="price">
              <p>￥<span>150起</span></p>
              <span class="ticketState">无票</span>
            </div>
          </div>
          <div class="hr_dash"></div>
          <!--下部分-->
          <div class="otherMsg">
            <span>商务座：0张</span>
            <span>一等座：0张</span>
            <span class="hasExist">二等座：3张</span>
            <span class="hasExist">无座：440张</span>
            <i class="halfRound leftCircle"></i>
            <i class="halfRound rightCircle"></i>
          </div>
        </li>
        <li class="ticketItem">
          <!--上部分-->
          <div class="partMsg">
            <div class="place start">
              <p>深圳北</p>
              <span>07:52</span>
            </div>
            <div class="between">
              <span class="trainNum">G 520</span>
              <a href="javascript:;">
                <i class="icon-start"></i>
                <i class="hr_1"></i>
                <i class="icon-cross"></i>
                <i class="icon-over" v-if="false"></i>
              </a>
              <span class="trainTime">13:12</span>
            </div>
            <div class="place end">
              <div class="endBox">
                <p>张家界西</p>
                <span>18:20</span>
              </div>
            </div>
            <div class="price">
              <p>￥<span>150起</span></p>
              <span class="ticketState">无票</span>
            </div>
          </div>
          <div class="hr_dash"></div>
          <!--下部分-->
          <div class="otherMsg">
            <span>商务座：0张</span>
            <span>一等座：0张</span>
            <span class="hasExist">二等座：3张</span>
            <span class="hasExist">无座：440张</span>
            <i class="halfRound leftCircle"></i>
            <i class="halfRound rightCircle"></i>
          </div>
        </li>
        <li class="ticketItem">
          <!--上部分-->
          <div class="partMsg">
            <div class="place start">
              <p>深圳北</p>
              <span>07:52</span>
            </div>
            <div class="between">
              <span class="trainNum">G 520</span>
              <a href="javascript:;">
                <i class="icon-start"></i>
                <i class="hr_1"></i>
                <i class="icon-cross"></i>
                <i class="icon-over" v-if="false"></i>
              </a>
              <span class="trainTime">13:12</span>
            </div>
            <div class="place end">
              <div class="endBox">
                <p>张家界西</p>
                <span>18:20</span>
              </div>
            </div>
            <div class="price">
              <p>￥<span>150起</span></p>
              <span class="ticketState">无票</span>
            </div>
          </div>
          <div class="hr_dash"></div>
          <!--下部分-->
          <div class="otherMsg">
            <span>商务座：0张</span>
            <span>一等座：0张</span>
            <span class="hasExist">二等座：3张</span>
            <span class="hasExist">无座：440张</span>
            <i class="halfRound leftCircle"></i>
            <i class="halfRound rightCircle"></i>
          </div>
        </li>
      </ul>
      <!--其他交通方案-->
      <div class="otherWays">
        <a href="javascript:;">其他交通中转方案</a>
      </div>
      <!--底部导航-->
      <ul class="footerNav">
        <li  class="navItem">
          <span class="icon-setOut"></span>
          <span class="text">出发</span>
        </li>
        <li class="navItem">
          <span class="icon-useTime"></span>
          <span class="text">耗时</span>
        </li>
        <li class="navItem">
          <span class="icon-price"></span>
          <span class="text">价格</span>
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
    },
    computed:{
      curTime(){
        return this.$store.state.checkedTime;
      }
    },
    methods:{
      checkTicket(){
        this.$router.push('/ticketDetail');
      }
    }
  }
</script>

<style scoped lang="less">
  .ticketList{
    /*edf1fa*/
    background-color: #edf1fa;
    width: 100%;
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
        .timePicker{
          a{
            color: #373737;
            span{
              vertical-align: middle;
            }
          }
          .icon-calendar{
            display: inline-block;
          }
          .icon-calendar::after{
            content: "\e911";
            font-size: 16px;
            color: #cbcbcb;
          }

        }
      }
    }
     /*标题信息*/

    /*车票列表信息*/
    .tickets{
      margin-top: 10px;
      padding: 10px 5% 6px 5%;
      .ticketItem{
        background-color: white;
        padding: 10px 14px 6px 14px;
        margin-bottom: 14px;
        border-radius: 4px;
        .partMsg{
          display: flex;
          div{
            flex: 1;
            font-size: 14px;
            p{
              margin-bottom: 10px;
            }
          }
          .price{
            text-align: center;
            margin-left: 30px;
            color: #ff8623;
            p{
              font-size: 12px;
              span{
                font-size: 14px;
              }
            }
            .ticketState{
              text-align: center;
              display: inline-block;
              font-size: 12px;
              -webkit-transform: scale(0.8);
              color: #fbfbfb;
              background-color: #de3146;
              width: 60px;
              padding: 2px 3px;
              border-radius: 3px;
            }
          }
          .place{
            span{
              color: #09c7a0;
            }
          }
          .between{
            text-align: center;
            span{
              display: block;
              color: #cbcbcb;
              font-size: 13px;
            }
            .icon-start::after{
              content: "\e913";
              font-size: 12px;
              font-weight: bold;
              color: #10c9a3;
            }
            .icon-cross::after{
              content: "\e90d";
              font-size: 12px;
              font-weight: bold;
              color: #10c9a3;
            }
            .icon-over::after{
              content: "\e925";
              font-size: 12px;
              font-weight: bold;
              color: #10c9a3;
            }
            .hr_1{
              display: inline-block;
              width: 20px;
              height: 5px;
              border-top: 1px solid #42b983;
            }
          }
          .end{
            width: 100%;
            text-align:right;
            .endBox{
              text-align: center;
            }
          }
        }
        .hr_dash{
          width: 100%;
          height: 10px;
          border-bottom: 1px dashed #ececec;
        }
        .otherMsg{
          padding: 6px 0 4px 0;
          display: flex;
          font-size:12px;
          position: relative;
          span{
            flex: 1;
            color: #b4b4b4;
          }
          .hasExist{
            color: #0a0a0a;
          }
          .halfRound{
            display: inline-block;
            width: 12px;
            height: 12px;
            background-color: #edf1fa;
            border-radius: 50%;
            position: absolute;
            top: -7px;
          }
          .leftCircle{
            left: -19px;
          }
          .rightCircle{
            right: -19px;
          }
        }
      }
    }
  /*车票列表信息*/

  /*其他交通方案*/
    .otherWays{
      padding: 0px 10px 5%;
      margin-bottom:50px;
      a{
        width: 100%;
        text-align: center;
        padding: 10px 0px;
        display: inline-block;
        color: #19cba7;
        border-radius: 6px;
        background-color:#ffffff;
        &:hover{
            text-decoration: none;
            color: #19cba7;
        }
      }
    }

  /*其他交通方案*/

  /*底部导航*/
    .footerNav{
      width: 100%;
      height: 50px;
      position: fixed;
      bottom: 0px;
      left:0;
      display: flex;
      text-align:center;
      background-color: #fcfcfc;
      /*line-height:50px;*/
      .navItem{
         flex: 1;
         margin-top: 6px;
        .icon-setOut::after{
          content: "\e912";
          font-size: 14px;
          font-weight: bold;
          color: #10c9a3;
        }
        .icon-useTime::after{
          content: "\e90e";
          font-size: 14px;
          font-weight: bold;
          color: #10c9a3;
        }
        .icon-price::after{
          content: "\e910";
          font-size: 14px;
          font-weight: bold;
          color: #10c9a3;
        }
        .text{
          display: block;
          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
</style>
