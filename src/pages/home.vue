<template>
    <!--主页-->
    <div class="home">
        <top-nav :showContent="showContent"></top-nav>
        <ul class="slider">
            <li>
                <span></span>
            </li>
        </ul>
        <!--查询购票-->
        <div class="home-train-search">
            <div class="train-search-place clearfix">
                <span class="place-start">
                    <span>始发站</span>
                    <!--<a href="javascript:;" @click="toAddress">深圳</a>-->
                    <router-link :to="{path:'/address',query:{flag:'start'}}">{{startCity}}</router-link>
                </span>
                <span class="place-to">
                    <i class="icon-come-back"></i>

                </span>
                <span class="place-end">
                    <span>终点站</span>
                    <router-link :to="{path:'/address',query:{flag:'end'}}">{{endCity}}</router-link>
                </span>
                <div class="train-search-style">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="train-search-date">
                <span class="date-msg" @click="checkDateEvent">
                    {{checkDate}}
                </span>
                <span class="date-icon icon-date"></span>
            </div>
            <div class="train-search-type">
                <span class="train-type">
                    <span>高铁动车</span>
                    <a href="javascript:;" :class="checked ? '':'checked'" @click="checked = !checked"></a>
                </span>
                <span class="customer-type">
                    <span>学生票</span>
                    <a href="javascript:;" :class="checked ? '':'checked'" @click="checked = !checked"></a>
                </span>
            </div>
            <div class="train-search-btn">
                <router-link to="/ticketList" class="searchBtn">
                    <i class="icon-search"></i>查 询
                </router-link>
            </div>
            <div class="train-search-tips">
                <span class="icon-tips"></span>
                <span class="tips-content">
                    <span>深圳-上海</span>
                    <span>深圳-呼和浩特</span>
                    <span>深圳-张家界</span>
                </span>
                <span class="tips-clear">
                    <a href="javascript:;">清除全部</a>
                </span>
            </div>
        </div>
        <div class="home-section">
            <div class="section">
                <span class="icon-train"></span>
                <p>正晚点</p>
            </div>
            <div class="section">
                <span class="icon-order"></span>
                <p>订餐服务</p>
                <i class="hot">红包</i>
            </div>
            <div class="section">
                <span class="icon-taxi"></span>
                <p>约车服务</p>
            </div>
        </div>
        <div class="home-notice">
            <span class="icon-notice"></span>
            <span class="notice-content">
                温馨提示：铁路12306每日06：00-23：00提供服务，在铁路12306购票，改签和退票须不晚于开车前30分钟
            </span>
            <span class="icon-notice-clear"></span>

        </div>
        <div class="nav">
            <div class="nav-item" v-for="(item,index) in navList" v-bind:class="{'active-color':curIndex ===index}" @click="curIndex = index">
                <span :class="item.iconName"></span>
                <p>{{item.iconContent}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import TopNav from '../components/common/topNav/index'
    export default{
        name:'home',
        components:{
            TopNav
        },
        data(){
            return{
                //顶部导航
                showContent:{
                    showBack:false,
                    titleContent:'车票预定'
                },
                checked:true,
                //底部nav当前选中项
                curIndex:0,
                //底部nav数据
                navList:[
                    {
                        iconName:'icon-ticket',
                        iconContent:'车票预订'
                    },
                    {
                        iconName:'icon-service',
                        iconContent:'商旅服务'
                    },
                    {
                        iconName:'icon-center',
                        iconContent:'订单中心'
                    },
                    {
                        iconName:'icon-my',
                        iconContent:'我的12306'
                    },
                ],
                startCity:"",
                endCity:"",
                checkDate:'5',
                ceshi:"zhangsan"
            }
        },
        created(){
          let self =this;
          /* 选择的城市 */
          let cityname =this.$route.query.checkedCity;
          if (cityname && this.$route.query.flag ==='start'){
          this.startCity =cityname.substring(0,cityname.length-1);
          }else {
            this.startCity = "北京";
          }
          if (cityname && this.$route.query.flag ==='end'){
            this.endCity = cityname.substring(0,cityname.length-1);
          }else {
            this.endCity = "深圳";
          }
          /* 选择的日期 */
         /* let day = this.$route.query.day;
          let month = this.$route.query.month;
          if (day && month){
            this.checkDate = month + day;
          }else {
            this.checkDate = '2017年9月28日'
          }*/



    },
      computed(){
        eventBus.$on('choiceDate',data => {
          console.log(this.$el.querySelector('.date-msg').textContent);
          this.$el.querySelector('.date-msg').textContent = data;
          this.$nextTick(function () {
//              this.checkDate = data;

            console.log(this.$el.querySelector('.date-msg').textContent);
          })
//            console.log(this.checkDate);
        });
      },
        watch:{
          checkDate(newval,oldval){
            console.log(newval+"-------"+oldval);
          }


        },
        methods:{
          toAddress(){

          },
          checkDateEvent(){
            console.log(this.checkDate+ "0000");
            this.$router.push({path:'/timer'});
          }
        },
        beforeDestroy(){
          eventBus.$off('choiceDate');
        }
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
        background-color: #edf1fa;
        height:100%;
        padding-bottom:30px;
        /*轮播图*/
        .slider{
            li{
                width: 100%;
                span{
                    display: inline-block;
                    width: 100%;
                    height: 114px;
                    background-color: #1ec7a9;
                }
            }

        }
        /*查询购票*/
        .home-train-search{
            width: 92%;
            background-color: #fff;
            border-radius: 6px;
            margin-left: 4%;
            padding: 20px 20px 10px 15px;
            box-sizing: border-box;
            position: relative;
            margin-top: -18px;
            .train-search-place{
                padding-bottom: 20px;
                border-bottom: 1px dashed #e9f3f1;
                position: relative;
                .place-start{
                    float: left;
                    display: inline-block;
                    text-align: center;
                    width: 40%;
                    span{
                        font-size: 12px;
                        color: #999999;
                    }
                    a{
                        display: block;
                        font-size: 16px;
                        color: #0a0a0a;
                    }

                }
                .place-to{
                    /*e917*/
                    float: left;
                    width:20% ;
                    margin-top: 14px;
                    text-align: center;
                    .icon-come-back::after{
                        content: '\e917';
                        font-size: 20px;
                        color: #6fe7ce;
                    }
                }
                .place-end{
                    float: right;
                    width: 40%;
                    display: inline-block;
                    text-align: center;
                    span{
                        font-size: 12px;
                        color: #999999;
                    }
                    a{
                        display: block;
                        font-size: 16px;
                        color: #0a0a0a;
                    }

                }
                .train-search-style{
                    span{
                        position: absolute;
                        z-index: 999;
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        background-color: #edf1fa;
                        bottom: -6px;
                        &:first-child{
                            left: -21px;
                        }
                        &:last-child{
                            right: -25px;
                        }
                    }

                }

            }
            .train-search-date{
                padding: 10px 0;
                border-bottom: 1px solid #f6f8fd;
                .date-msg{
                    vertical-align: middle;
                    color: #0a0a0a;
                    margin-left: 2px;
                }
                /*e911*/
                .date-icon{
                    vertical-align: middle;
                    float: right;
                }
                .icon-date::after{
                    content: '\e911';
                    font-size: 20px;
                    color: #52e6c8;
                }
            }
            .train-search-type{
                padding: 10px 0;
                .train-type{
                    span{
                        font-size: 12px;
                        color: black;
                        vertical-align: middle;
                    }
                    a{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        border: 1px solid #bdbdbd;
                        border-radius: 2px;
                        vertical-align: middle;
                        margin-left: 2px;
                    }

                }
                .customer-type{
                    float: right;
                    font-size: 12px;
                    color: #bdbdbd;
                    span{
                        vertical-align: middle;
                    }
                    a{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        border: 1px solid #bdbdbd;
                        border-radius: 2px;
                        vertical-align: middle;
                        margin-left: 2px;
                    }
                }
            }
            .train-search-btn{
                .searchBtn{
                    display: block;
                    background-color: #21d9b4;
                    height: 42px;
                    border-radius: 4px;
                    line-height: 42px;
                    text-align: center;
                    color: #ffffff;
                    cursor: pointer;
                    .icon-search::after{
                        content: "\e903";
                        padding: 0 6px;
                    }
                }
            }
            .train-search-tips{
                margin-top: 16px;
                font-size: 12px;
                color: #bdbdbd;

                .icon-tips::after{
                    content: "\e912";
                    font-size: 14px;
                    margin-right: 4px;
                    color: #21d9b4;
                    vertical-align: middle;
                }
                .tips-content{
                    vertical-align: middle;
                    span{
                        padding: 0 4px;
                    }
                }
                /*清除全部*/
                .tips-clear{
                    text-align: right;
                    a{
                        color: #bdbdbd;
                    }

                }

            }



        }

        /*其他服务*/
        .home-section{
            width: 100%;
            background-color: #fff;
            margin-top: 20px;
            margin-bottom: 16px;
            height: 100px;
            display: flex;
            padding: 20px 0;
            box-sizing: border-box;
            .section{
                flex: 1;
                text-align: center;
                position: relative;
                span{
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    background-color: rgba(31,204,169,0.1);
                    border-radius: 50%;
                    font-size: 20px;
                    color: #1fcca9;
                }
                p{
                    font-size: 12px;
                    margin-top: 10px;
                    color: #b6b6b6;
                }
                .icon-train::after{
                    content: "\e907";
                }
                .icon-order::after{
                    content: "\e921";
                }
                .icon-taxi::after{
                    content: "\e922";
                }
                i{
                    position: absolute;
                    top: 0;
                    left: 55%;
                }
            }
        }

        /*温馨提示*/
        .home-notice{
            width: 100%;
            background-color: white;
            padding-top: 10px;
            padding-bottom: 10px;
            .icon-notice{
                float: left;
                width: 40px;
                height: 40px;
                background-color: rgba(31,204,169,0.1);
                border-radius: 50%;
                line-height: 40px;
                text-align: center;
                margin-left: 20px;
                margin-right:20px;
            }
            .icon-notice::after{
                content: "\e916";
                color: #1fcca9;
                font-size: 24px;
            }
            .notice-content{
                font-size: 12px;
                color: #bdbdbd;
            }
        }

        /*底部nav*/
        .nav{
            width: 100%;
            height: 50px;
            background-color: #fff;
            position: fixed;
            bottom: 0;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            display: flex;
            .nav-item{
                flex: 1;
                text-align: center;
                font-size: 10px;
                padding: 5px;
                color: #bdbdbd;
                span{
                    font-size: 20px;
                }
                .icon-ticket::after{
                    content: "\e90f";
                }
                .icon-service::after{
                    content: "\e904";
                }
                .icon-center::after{
                    content: "\e908";
                }
                .icon-my::after{
                    content: "\e900";
                }
            }
        }
    }
    .hot{
        width: 36px;
        height: 20px;
        font-size: 12px;
        padding-top: 2px;
        -webkit-transform: scale(0.6,0.6);
        font-style: normal;
        background-color: #ff3146;
        border-radius: 6px;
        color: white;
    }
    /*选中设置颜色*/
    .active-color{
        color: #1fcca9 !important;
    }

</style>
