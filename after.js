/**
 * 延迟执行函数
 * @param {*函数执行的次数} times 
 * @param {*传入的高阶函数} callback 
 * @returns 
 */
 function after (times,callback){
    return function(){
        if(--times===0){
            callback();
        }
    }
}
const fun = after(3,function(){
    console.log('执行')
})
fun();
fun();
fun();