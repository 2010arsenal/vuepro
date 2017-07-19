<style>
    #myname{color:rebeccapurple}
</style>

<template>

    <div id = "myname">我的name是{{name}}</div>

</template>

<script>
    export default{
        props : ["name"]
    }
</script>