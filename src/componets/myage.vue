<style>
    #myage{color:cadetblue}
</style>

<template>

    <div id = "myage">我的age是{{age}}</div>

</template>

<script>
    export default{
        props : ["age"]
    }
</script>