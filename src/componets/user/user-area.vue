<template>
    <div class="form-group">
        <label for=""  class="col-sm-2">地区</label>
        <div class="col-sm-10">
            <select name="" id="" v-model="selectedIndex" class="form-group" v-on:change="seleteChange">
                <option  v-for="area in areas" v-bind:value="area.id">{{area.text}}</option>
            </select>
        </div>
    </div>
</template>



<script>
    export default{
        data: function () {
            return {
                selectedIndex:0,
                areas:[
                    {"id":0,"text":"--请选择--"},
                    {"id":1,"text":"北京"},
                    {"id":2,"text":"上海"}
                ]
            }
        },
        methods:{
            selecteChange(){
                this.$emit("childChange","userarea",this.selectedIndex)
            }
        }
    }
</script>