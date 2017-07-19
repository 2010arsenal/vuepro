<template>
   <div class="row">
       <div class="form-group">
           <label class="col-sm-2">用户名</label>
           <div class="col-sm-10">
               <input type="text" class="form-control" :placeholder="placeholder">
           </div>

       </div>
       <div class="form-group">
           <div class="col-sm-10 col-sm-offet-2">
               <button type="button" class="btn btn-default">提交</button>
           </div>

       </div>

   </div>
</template>


<script>
    export default{
        props:["placeholder"]
    }
</script>