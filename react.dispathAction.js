/**
 * 简单的链表结构
 * @param {*} queue 
 * @param {*} action 
 */
function dispathAction (queue,action){
    const updata = { action,next:null }
    const pending = queue.pending
    if(pending===null){
        updata.next = updata
    }else{
        updata.next = pending.next
        pending.next = updata
    }
    queue.pending = updata
    // console.log(updata,pending)
}
const queue = { pending:null }

dispathAction(queue,'action1')
dispathAction(queue,'action2')
// dispathAction(queue,'action3')
console.log(1111111,queue)