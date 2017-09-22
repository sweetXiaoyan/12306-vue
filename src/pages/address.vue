<template>
  <div class="checkAddress">
    <div class="positionGroup">
      <top-nav :showContent="showContent"></top-nav>
      <!--搜索框-->
      <div class="search">
        <span class="icon-search"></span>
        <input  type="text" placeholder="中文/拼音/首字母">
      </div>
    </div>
    <!--位置推荐-->
    <div class="quick-location">
      <!--定位推荐-->
      <div class="location">
        <div class="location-item">
          <span>根据您的定位推荐</span>
          <ul class="item-box clearfix">
            <li class="city-name"><a href="javascript:;">{{curCity}}</a></li>
          </ul>
        </div>
      </div>
      <!--历史记录-->
      <div class="location">
        <div class="location-item">
          <span>历史纪录</span>
          <ul class="item-box clearfix">
            <li class="city-name"><a href="javascript:;">北京</a></li>
            <li class="city-name"><a href="javascript:;">上海</a></li>
            <li class="city-name"><a href="javascript:;">杭州</a></li>
            <li class="city-name"><a href="javascript:;">宜宾</a></li>
            <li class="city-name"><a href="javascript:;">兴城</a></li>
          </ul>
        </div>
      </div>
      <!--热门城市-->
      <div class="location">
        <div class="location-item">
          <span>热门城市</span>
          <ul class="item-box clearfix">
            <li class="city-name"><a href="javascript:;">北京</a></li>
            <li class="city-name"><a href="javascript:;">上海</a></li>
            <li class="city-name"><a href="javascript:;">杭州</a></li>
            <li class="city-name"><a href="javascript:;">宜宾</a></li>
            <li class="city-name"><a href="javascript:;">兴城</a></li>
            <li class="city-name"><a href="javascript:;">宜宾</a></li>
            <li class="city-name"><a href="javascript:;">江安</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--字母定位-->
    <div class="spell-location">
      <div class="city" v-for="(citys,index) in allCity">
        <span class="city-litter" id="A">{{citys.flage}}</span>
        <ul class="city-list" v-for="(city,ind) in citys.names">
          <li><a href="javascript:;">{{city.cityname}}</a></li>
        </ul>
      </div>

      <!--字母快速定位-->
      <div class="link-address">
        <ul class="link-item">
          <li><a href="javascript:;">推荐</a></li>
          <li><a href="javascript:;">历史</a></li>
          <li><a href="javascript:;">热门</a></li>
          <li><a href="javascript:;">A</a></li>
          <li><a href="javascript:;">B</a></li>
          <li><a href="javascript:;">C</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
    import TopNav from '../components/common/topNav/topNav'
    import location from '../utils/location'
    export default {
        name:"address",
        components:{
            TopNav
        },
        data(){
            return{
                // 顶部导航
                showContent:{
                    showBack:true,
                    titleContent:'选择城市'
                },
                // 当前城市
                curCity:"",
                allCity:[],
            }
        },
      created(){
        let self =this;
        /*
           获取到当前位置
        */
        location(function (url) {
          return self.$http.jsonp(url).then(res =>{
            console.log(res.body);
            if (res.body.status ==0){
              //  定位当前城市
              self.curCity = res.body.result.addressComponent.city.replace(/市/, "");
            }

          },err =>{

          })
        });
        /*
           获取全部城市
        */
        this.$http.get('/citys/all').then(res =>{
          if (res.body.status ==='0'){
            for (var key in res.body.result){
              let param={};
              param.flage = key;
              param.names = res.body.result[key];
               self.allCity.push(param);
             }
          }
        },err =>{

        })
      }
    }
</script>

<style lang="less" scoped>
    .checkAddress{
        width: 100%;
        background-color: #edf1fa;
        padding-bottom: 20px;
        .positionGroup{
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #fff;
          z-index: 99;
        }
        /*s搜索*/
        .search{
            margin-top: 8px;
            margin-bottom:10px;
            width: 100%;
            padding: 5px 10px;
            box-sizing: border-box;
            position: relative;
            background-color: #edf1fa;
            input{
                list-style: none;
                display: block;
                width: 100%;
                border: none;
                border-radius: 6px;
                height: 36px;
                outline: none;
                text-indent: 34px;
            }
            .icon-search{
                position: absolute;
                margin-top: 10px;
                font-size: 16px;
            }
            .icon-search::after{
                content: "\e903";
                padding: 0 6px;
                color: #d5d5d5;
            }
        }

        /*快速定位*/
        .quick-location{
            margin-top:100px;
            width: 100%;
            padding:0 12px 20px 16px;
            background-color: #fff;
            box-sizing: border-box;
            .location{
                width: 90%;
                /*background-color: #1fcca9;*/
                font-size: 14px;
                .location-item{
                    span{
                        display: inline-block;
                        color: #bdbdbd;
                        margin-top: 10px;
                    }
                    .item-box{
                        .city-name{
                            text-align: left;
                            width: 25%;
                            height: 30px;
                            line-height: 30px;
                            margin-top: 10px;
                            float: left;
                            a{
                                display: inline-block;
                                border-radius: 6px;
                                border: 1px solid #bdbdbd;
                                padding-left: 22%;
                                padding-right: 22%;
                                color: #000;

                            }
                        }
                    }
                }
            }
        }

        /*字母定位*/
        .spell-location{
            width: 100%;
            box-sizing: border-box;
            .city{
                margin-top:10px;
                .city-litter{
                    margin-left: 16px;
                    display: inline-block;
                    margin-bottom:6px;
                }
                .city-list{
                    padding-left: 16px;
                    padding-bottom: 10px;
                    background-color: #fff;
                    border-bottom-left-radius: 6px;
                    border-bottom-right-radius: 6px;
                    li{
                        border-bottom: 1px solid #f2f2f2;
                        line-height: 42px;
                        a{
                            color: black;
                        }
                    }
                }
            }

        }
        /*字母链接*/
        .link-address{
            position: fixed;
            top:100px;
            right: 10px;
            text-align: center;
            font-size: 12px;
            line-height: 24px;
            .link-item{
                li{
                    a{
                        color: #1fcca9;
                    }
                }
            }
        }
        ::-webkit-input-placeholder { /* WebKit browsers */
            color: #d5d5d5;
        }

    }
</style>
