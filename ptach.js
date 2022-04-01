// 1.初始化 patch(container,vnode)就是将虚拟dom创建成真实dom的方法
// 2.更新update(vnode,newVnode)

function createElement(vnode) {
    let tag = vnode.tag // 目标元素
    let attrs  = vnode.attrs || {} // 属性
    let children = vnode.children || [] //子节点

    if(!tag){
        return null
    }
    // 创建dom
    let elem = document.createElement(tag)
    
    let attrName 
    // 2.给dom添加属性
    for (const attrName in attrs) {
        if (attrs.hasOwnproperty(attrName)){
            elem.setAttribute(attrName,attrs[attrName])
        }
    }
    
    //3.将子元素添加到目标之上
    children.forEach(function(childVnode){
        elem.appendChild(createElement(childVnode))
    });
    return elem
}

function updateChildren(vnode,newVnode){
    let children = vnode.childVnode || []  // 现有节点
    let newChildren = vnode.childVnode || []    //新节点
    children.forEach(function(childrenVnode,index){
        // 循环的每一项
        let newChildrenVnode = newChildrenVnode[index]
        //第一层没有变化
        if(childrenVnode.tag === newChildrenVnode.tag){
            // 深层次通过递归
            updataChildren(childrenVnode,newChildrenVnode)
        }else{
            //两者的tag的不一样
            replaceNode(childrenVnode,newChildrenVnode)
        }
    })

}
