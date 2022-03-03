/**
 * 观察者模式
 * 包含了发布订阅模式
 */
class Baby {
    constructor(name) {
        this.name= name
        this.observers = []
        this.state = '心情开心'
    }
    addObserver (observer) {
        this.observers.push(observer)
    }
    setState(newState){
        this.state = newState
        this.observers.forEach(e=>e.updata(newState))
    }
}
class Parent {
    constructor (name){
        this.name = name
    }
    updata(babyState){
        console.log(this.name+'听说了宝宝：'+babyState)
    }
}
const baby =  new Baby('宝宝')
const o1 =  new Parent('爸爸')
const o2 =  new Parent('妈妈')

baby.addObserver(o1)
baby.addObserver(o2)

baby.setState('kuku')