const when = describe

const safely = require('../index').safely

describe('safely',()=>{

  when('there is no error',()=>{
    it('returns [null,result]',async()=>{

      async function testFnWithNoError(){
        return 'Hello World!'
      }

      const [err,res] = await safely(()=>testFnWithNoError())
      expect(err).toBe(null)
      expect(res).toBe('Hello World!')
    })
  })

  when('there is an error',()=>{
    it('returns [err,null]', async()=>{
      async function testFnWithError(){
        throw new Error('Something went wrong!')
      }

      const [err,res] = await safely(()=>testFnWithError())
      expect(err.message).toBe('Something went wrong!')
      expect(res).toBe(null)
    })
    it('returns [err,<fallback val>] when opts.fallback exists', async()=>{
      async function testFnWithError(){
        throw new Error('Something went wrong!')
      }

      const [err,res] = await safely(()=>testFnWithError(),{
        fallback: 'hello world'
      })

      expect(err.message).toBe('Something went wrong!')
      expect(res).toBe('hello world')
    })
  })

})
