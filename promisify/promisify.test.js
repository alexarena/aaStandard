const promisify = require('./index')

/*
  This is a traditional callback-style async function.
  When the operation (setTimeout) is complete, it calls
  the callback function with two arguments, an error and the result.
  We test to make sure it gets converted properly.
*/

function fnWithCallback(firstName,lastName,error,callback){
  setTimeout(()=>{
    callback(error,`Hello ${firstName} ${lastName}!`)
  }, 100)
}

describe('promisify(fn)', () => {
  it('returns a function that can be used with async/await',async()=>{
    const asyncFn = promisify(fnWithCallback)
    expect(typeof(asyncFn)).toEqual("function")

    const res = await asyncFn("Alex","Arena",null)
    expect(res).toEqual("Hello Alex Arena!")
  })

  it('throws when err sent to cb function is not null',async()=>{
    const asyncFn = promisify(fnWithCallback)
    expect(typeof(asyncFn)).toEqual("function")

    const e = new Error("This should throw")
    await expect(asyncFn("Alex","Arena",e)).rejects.toEqual(e)
  })
})
