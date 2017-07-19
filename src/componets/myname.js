/**
 * Created by rose on 17-5-7.
 */

//export default是ES2015的写法，是一种匿名导出方式，
// 在import的时候名字可以随便写，import xxxxoooo from ‘my name.js’
export default{
    template:'<div id="me">我的名字是{{name}}</div>',
    data:()=>{
        return {name:'rose123'}
    }
}