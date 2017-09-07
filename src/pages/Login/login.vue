<template>
    <div class="login">
        <!--<div class="topBar">-->
            <!--<a href="javascript:;" class="icon-back"></a>-->
            <!--<span>选择城市</span>-->
        <!--</div>-->
        <top-nav :showContent="showContent"></top-nav>
        <div class="logoImg">
            <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="subLogin">
            <form>
                <div class="user">
                    <p>账号</p>
                    <input type="text" name="username" placeholder="请输入您的账号" v-model="username"  autocomplete="off">
                    <i v-if="username" class="icon-clear" @click="clearUer"></i>
                </div>
                <div class="pwd">
                    <p>密码</p>
                    <input type="password" name="password" placeholder="请输入您的6-20位密码" v-model="password" @blur="showClearIcon=true">
                    <i v-if="password" class="icon-clear" @click="clearPwd" v-show=""></i>
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
            <router-link to="/reg">忘记密码?</router-link>
        </div>
        <div class="loginBtn">
            <a @click="loginCheck">登 录</a>
        </div>
        <div class="regNav">
            <span>新用户？<router-link to="/reg">立即注册</router-link>
            </span>
        </div>
    </div>
</template>
<script>
    import TopNav from '../../components/common/topNav/topNav'
    export default {
        name:'login',
        components:{
            TopNav
        },
        data(){
            return{
                username:'',
                password:'',
                showClearIcon:false,
                showContent:{
                    showBack:true,
                    titleContent:""
                }
            }
        },
        methods:{
            clearUer(){
                this.username ="";
            },
            clearPwd(){
                this.password ="";
            },
          loginCheck(){
            this.$http.post('/users/login',{
              username:this.username,
              password:this.password,
            }).then(res =>{
              let status = res.data.status;
              if (status ==1){
                this.$router.push('/home');
              }
              else {
                alert(res.data.msg);
              }

            }).catch(err =>{
              console.log(err);
            })
          }
        }
    }

</script>
<style lang="less" scoped>
    .login{
        position: relative;
        height: 100%;
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
                        top: 30px;
                        cursor: pointer;
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
            a{
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
            width: 100%;
            position: fixed;
            bottom: 20px;
            text-align: center;
            span{
                font-size: 14px;
                color: #B9B9B9;
                a{
                    color: #1fcca9;
                }
            }
        }
    }


</style>
