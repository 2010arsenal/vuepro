/**
 * Created by rose on 17-5-1.
 */
import Vue from "vue";//

// new Vue({
//     el:"#me",
//     data:{age:18}
// });

//定义组件
// let me_name = {
//     template:'<div id="me">我的名字是里斯</div>'
// };

//如何在组件里使用变量
// let me_name = {
//     template:'<div id="me">我的名字是{{name}}</div>',
//     data:()=>{
//         return {name:'rose'}
//     }
// };

//1、在src目录里创建一个componets文件夹
//2、然后创建一个文件叫myname.js

//导入myname组件
// import me_name from "./../componets/myname.js";
// import me from "./../componets/me.vue";
// new Vue({
//     el:".container",
//     components:{"me":me}//挂载组件,myname就是组件名称
// });

import userlogin from "../componets/user-login.vue";

new Vue({
    el:".container",
    components:{"user-login":userlogin}
});
