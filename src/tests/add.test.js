const add=(a,b)=> a+b
const genratingGreeting=name=>`Hello ${name}!`
test('should add to number',()=>{
    const result=add(3,4)

    // if (result!==7) {
    //     throw new Error(`You added 4 and 3. the result was ${result}. Expect 7`)
    // }
    expect(result).toBe(7)
})

test('genrating Greeting',()=>{
    const sharaf=genratingGreeting('sharaf')
    expect(sharaf).toBe('Hello sharaf!')
})

// test('genrating Greeting2',()=>{
//     const sharaf=genratingGreeting('sharaf')
//     expect(sharaf).toBeUndefined('sharaf')
// })