<template>
  <div class="time">
    <div class="topCon">
      <span class="tips">车票已调整为30天，您可以预约抢票</span>
      <ul class="timeMark">
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul></div>
    <div class="timeContainer">
      <div class="timeList" v-for="(itemList,index) in m_rowArr">
        <div class="timeText">
          <span class="line fl"></span>
          <span class="text">{{year}}年{{itemList[0].month}}</span>
          <span class="line fr"></span>
        </div>
        <ul class="itemList">
          <li class="item" v-for="(item,index) in itemList[0].days" >
            <span v-for="(time,ind) in item.row">
              <a href="javascript:;">{{time}}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import timePicker from './timePicker'
  import timer from '../utils/datepicker'
  export default {
    data(){
      return{
        year:"",
        m_rowArr:[],
      }
    },
    components:{


    },
    computed:{

    },
    methods:{
      is_leap(year){  //处理闰年问题
        let res;
        return (year %100 ===0 ? res =(year %400 ===0?1:0) : res =(year %4 ===0?1:0));
      },

    },
    mounted(){
      let date = new Date();
      this.year = date.getFullYear();  // 年份
      this.mnow = date.getMonth();  //月份(比正常显示的小1)
      this.dnow =date.getDate();  //日期
      this.mfirst = new Date(this.ynow,this.mnow,1);  //当月第一天Date资讯
      this.firstDay = this.mfirst.getDay();  //当月第一天星期几
      /*显示当前月份以后的日期*/
      let months = [];
      for(let i=date.getMonth()+1; i<13;i++){
          months.push(i);
        let params ={
          year: this.year,
          month:i-1,
          day:date.getDate()
        };
//        console.log(timer.prototype.dealTime(params));
        this.m_rowArr.push(timer.prototype.dealTime(params));
//        console.log(this.m_rowArr);

      }


    }

  }
</script>

<style lang="less">
  .time{
    width: 100%;
    .topCon{
      width: 100%;
      position:fixed;
      top:0;
      left:0;
      .tips{
        display: inline-block;
        width: 100%;
        height: 46px;
        padding-left: 6px;
        padding-top: 6px;
        box-sizing: border-box;
        background-color: rgb(229, 223, 183);
      }
      .timeMark{
        width: 100%;
        display: flex;
        background-color:#eee;
        padding:10px 0;
      li{
        flex: 1;
        text-align: center;
      }
      }
    }

    .timeContainer{
      width: 100%;
      margin-top:88px;
      .timeList{
        width: 100%;
        .timeText{
          width: 100%;
          padding: 10px 0;
          text-align: center;
          .line{
            display: inline-block;
            width: 34%;
            height: 0;
            border-bottom: 1px solid #eee;
            margin-top: 10px;
          }
          .text{
            font-size: 16px;
          }
        }
        .itemList{
          width:100%;
          li{
            display: flex;
            text-align:center;
            padding:6px 0;
            span{
              flex: 1;
              a{
                color: #515151
              }
            }
          }
        }
      }
    }
  }
  .fr{
    float: right;
  }
  .fl{
    float: left;
  }
</style>
