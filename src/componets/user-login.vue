<template>
    <div id="user-login" class="col-md-8 col-md-offset-2">
        <h2 class="text-center">用户登录</h2>
        <form class="form-horizontal" role="form">
            <user-name ref="uname" placeholder="请输入你的用户名" v-on:updateUserName="setUserName"></user-name>
            <user-pass></user-pass>
            <user-submit></user-submit>
        </form>
    </div>
</template>

<style>
    @import "./../css/bootstrap.min.css";

    #user-login {
        margin-top: 50px;
    }
</style>

<script>
    import username from "./user/user-name.vue";
    import userpass from "./user/user-pass.vue";
    import usersubmit from "./user/user-submit.vue";

    export default{
        data(){
            return {
                username : "",
                userpass : ""
            }
        },
        methods:{
            setUserName(name){
                this.username = name;
            }
        },
        components: {
            "user-name": username,
            "user-pass":userpass,
            "user-submit":usersubmit,

        }
    }
</script>