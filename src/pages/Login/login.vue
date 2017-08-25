<template>
    <div class="login">
        <div class="topBar">
            <a href="javascript:;">
                <i class="icon-back"></i>
            </a>
        </div>
        <div class="logoImg">
            <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="subLogin">
            <form>
                <div class="user">
                    <p>账号</p>
                    <input type="text" name="username" placeholder="请输入您的账号">
                    <i class="icon-clear"></i>
                </div>
                <div class="pwd">
                    <p>密码</p>
                    <input type="password" name="password" placeholder="请输入您的6-20位密码">
                    <i class="icon-clear"></i>
                </div>
            </form>
        </div>
        <div class="pwdHandle">
            <span class="rememberPwd">
               <span class="checkbox1">
                   <input type="checkbox" value="0" class="isRemember"
                          id="checkbox-isRemember" style="display: none;">
                   <label for="checkbox-isRemember"></label>
               </span>
                <span>记住密码</span>
            </span>
            <a class="forgetPwd" href="javascript:;">忘记密码?</a>
        </div>
        <div class="loginBtn">
            <span>登 录</span>
        </div>
        <div class="regNav">
            <span>新用户？<a href="javascript:;">立即注册</a></span>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less">
    .login{
        position: relative;
        height: 100%;
        .topBar{
            width: 100%;
            height: 44px;
            text-align: left;
            background-color: #1fcca9;
            a{
                display: inline-block;
                margin-top: 10px;
            }
        }
        .logoImg{
            width: 100%;
            text-align: center;
            margin-top:20px;
            margin-bottom: 20px;
        }
        .subLogin{
            width: 100%;
            padding: 10px 15px;
            form{
                div{
                    margin-bottom: 10px;
                    position: relative;
                    p{
                        padding: 0 4px;
                        color: #212121;
                        font-size: 16px;
                    }
                    input{
                        width: 90%;
                        border: none;
                        border-bottom: 1px solid #f6f8fc;
                        padding: 14px 2px;
                        font-size: 11px;
                        outline: none;
                        color: #bdbdbd;
                        background-color:transparent;
                        &:hover{
                            /*width: 90%;*/
                            border-bottom: 1px solid #1fcca9;
                        }
                    }
                    .icon-clear{
                        position: absolute;
                        right: 30px;
                        top: 24px;
                    }
                    .icon-clear:before{
                        content: '\e902';
                        color: #bdbdbd;
                    }


                }
            }
        }
        .pwdHandle{
            color:#B9B9B9;
            padding: 0 20px;
            height: 20px;
            line-height: 20px;
            .rememberPwd{
                span{
                    font-size: 13px;
                }
                .checkbox1{
                    label{
                        vertical-align: middle;
                        margin-bottom: 2px;
                    }
                }
                .checkbox1 +span{
                    vertical-align: middle;
                }
            }
            a{
                font-size: 13px;
                color: #B9B9B9;
                cursor: pointer;
                float: right;
            }
        }
        .loginBtn{
            width:100%;
            text-align: center;
            margin-top: 30px;
            span{
                display: inline-block;
                width: 84%;
                background-color: #1fcca9;
                height: 46px;
                line-height: 46px;
                border-radius: 6px;
                font-size: 16px;
                color: #f2f2f2;
            }
        }
        .regNav{
            position: absolute;
            bottom: 10px;
        }
    }
    .icon-back:before {
        content: "\e901";
        font-size: 24px;
        color:white ;
    }
</style>