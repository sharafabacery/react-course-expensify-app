const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
        //resolve('this is my resolved promises')
    reject('somthing went wrong')
},5000)
 
})
console.log('before')
promise.then((data)=>{
    console.log(data)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            //resolve('this is my resolved promises')
        reject('somthing went wrong')
    },5000)
     
    })
}).then((data)=>{
    console.log(data)
}).catch((data)=>{
console.log(data)

})
// promise.then((data)=>{
//     console.log(data)
// },(data)=>{
// console.log(data)

// })
console.log('after')
