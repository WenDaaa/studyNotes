const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECT = "REJECT"  

class MyPromise {
    constructor(executor) {
        this.status = "PENDING"
        this.value = undefined
        this.reson = undefined

        this.resolve = (res) => {
            this.status = "FULFILLED"
            this.value = res
        }

        this.reject = (res) => {
            this.status = "FULFILLED"
            this.reson = res
        }

        executor(resolve,reject)
    }

    then(){

    }
}