<template>
    <div id="me">
        <myname v-bind:name="name"></myname>
        <myage v-bind:age="age"></myage>
    </div>
</template>

<script>
    import age from './myage.vue';
    import name from './myname.vue';

    export default{
        props:['name',"age"],
        components:{
            'myname':name,
            'myage':age
        }
    }
</script>