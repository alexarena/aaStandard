function pick({properties,from}){
    const returnObj = {}
    for(const prop of properties){
      returnObj[prop] = from[prop]
    }
    return returnObj
}

/*
  getEnvFn is a function that returns a json object (or throws)
  in most cases this function will be: ()=>require('./env')
  By using a closure, we're able to get "./" to
  reference the user code, not this module.
*/
function useEnv(getEnvFn){
  try{
    const env = getEnvFn()
    console.log('Registering environment variables:')
    for(const [key,value] of Object.entries(env)){
      process.env[key] = value
      console.log(`-${key}`)
    }
  }
  catch(e){
    console.log('Warning - no .env file found.')
  }
}

async function safely(fn,opts={}){
  const fallback = opts.fallback || null
  try{
    const res = await fn()
    return [null,res]
  }
  catch(e){
    return [e,fallback]
  }
}

module.exports = {
  pick,
  useEnv,
  safely
}
