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
                    <input type="text" name="username" placeholder="15841695327">
                    <i class="icon-clear"></i>
                </div>
                <div class="pwd">
                    <p>密码</p>
                    <input type="password" name="password" placeholder="******">
                </div>
            </form>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less">
    .login{
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
            padding: 10px;
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
                        padding: 8px 2px;
                        font-size: 11px;
                        outline: none;
                        color: #bdbdbd;
                        background-color:transparent;
                        &:hover{
                            /*width: 90%;*/
                            border-bottom: 1px solid #1fcca9;
                        }
                    }
                    .icon-clear:before{
                        content: '\e902';
                        color: #bdbdbd;
                    }


                }
            }
        }
    }
    .icon-back:before {
        content: "\e901";
        font-size: 24px;
        color:white ;
    }
</style>