/**
 *  判断变量的类型
 * @param {* 传入一个需要判断的数据 } type 
 * @returns 返回一个类型
 */
function isType(type){
    const types=['String','Boolean','Number','Object','Null','Undefined']
    return types.find(e=>Object.prototype.toString.call(type)===`[object ${e}]`)
}
console.log(
    isType({}),
    isType(123),
    isType(null),
    isType(undefined)
)