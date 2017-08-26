<template>
    <div class="layout">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Login from '../../../pages/Login/login'
    export default {
        name: 'hello',
        components:{
        },
        data () {
            return {
//                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .fade-enter-active{
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
