function shallowCopy(params) {
    let x = { ...params }
    return x
}
//样例
let params = { a: 1, b: { c: 1 } }

let newObj = shallowCopy(params)

// 拷贝对象中---基本类型老死不相往来，引用类型藕断丝连
params.a = 222
params.b.c = 666
console.log(params); // { a: 222, b: { c: 666 } }
console.log(newObj); // { a: 1, b: { c: 666 } }
