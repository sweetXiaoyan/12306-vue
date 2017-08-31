<template>
    <!--主页-->
    <div class="home">
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
                    <a href="javascript:;">深圳</a>
                </span>
                <span class="place-to">
                    <i class="icon-come-back"></i>

                </span>
                <span class="place-end">
                    <span>终点站</span>
                    <a>张家界</a>
                </span>
                <div class="train-search-style">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="train-search-date">
                <span class="date-msg">
                    7月25日 今天
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
                </span>
            </div>
            <div class="train-search-btn">
                <a href="javascript:;">查 询</a>
            </div>
            <div class="train-search-tips">
                <span class="tips-icon"></span>
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

        </div>
        <div class="home-notice">

        </div>
        <div class="nav">

        </div>
    </div>
</template>

<script>
    export default{
        name:'home',
        data(){
            return{
                checked:true,
            }
        }
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
        background-color: #edf1fa;
        /*轮播图*/
        .slider{
            li{
                width: 100%;
                span{
                    display: inline-block;
                    width: 100%;
                    height: 156px;
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
                        border: 1px solid #a2a2a2;
                        border-radius: 2px;
                        vertical-align: middle;
                    }

                }
                .customer-type{
                    float: right;
                }

            }



        }
    }

</style>