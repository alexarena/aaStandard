module.exports = {
  pick: ({properties,from}) => {
      const returnObj = {}
      for(const prop of properties){
        returnObj[prop] = from[prop]
      }
      return returnObj
  },
  useEnv: ({suppressLog})=>{
    try{
      const env = require('./env')
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
