module.exports = {
  pick: ({properties,from}) => {
      const returnObj = {}
      for(const prop of properties){
        returnObj[prop] = from[prop]
      }
      return returnObj
  },
  /*
    getEnvFn is a function that returns a json object (or throws)
    in most cases this function will be: ()=>require('./env')
    By using a closure, we're able to get "./" to
    reference the user code, not this module.
  */
  useEnv: (getEnvFn)=>{
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
}
