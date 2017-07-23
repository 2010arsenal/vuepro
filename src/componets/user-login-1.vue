<template>
    <div id="user-login" class="col-md-8 col-md-offset-2">
        <h2 class="text-center">用户登录</h2>
        <form class="form-horizontal" role="form">
            <user-name ref="uname" placeholder="请输入你的用户名"></user-name>
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
    import usersubmit from "./user/user-submit.vue";
    export default{
        components: {
            "user-name": username,
            "user-submit":usersubmit
        }
    }
</script>