<template>
    <div class="row">
        <div class="form-group">
            <div class="col-sm-10 col-sm-offet-2">
                <button type="button" class="btn btn-default" v-on:click="test">提交</button>
            </div>

        </div>
    </div>

</template>


<script>
    export default{
        methods: {
            test(){
                //组件之间的通讯
//                alert(this.$parent.$refs.uname.$data.username);
                alert(this.$parent.$data.username);
            }
        }
    }
</script>