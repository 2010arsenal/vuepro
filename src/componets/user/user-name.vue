<template>
   <div class="row">
       <div class="form-group">
           <label class="col-sm-2">用户名</label>
           <div class="col-sm-10">
               <input type="text" v-model="username" v-on:change="userNameChange" class="form-control" :placeholder="placeholder">
           </div>

       </div>


   </div>
</template>


<script>
    export default{
        props: ["placeholder"],
        data: function () {
          return {username: '张三'}
        },
        methods:{
                userNameChange(){
                    this.$emit("updateUserName",this.username);
                }

        }

    }
</script>