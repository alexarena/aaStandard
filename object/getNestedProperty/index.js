module.exports = (obj,property) =>{
  if(!obj || !property){
    return null
  }
  if(typeof(obj) !== 'object' || typeof(property) !== 'string'){
    return null
  }

  property = property.split('.')

  for(let prop of property){
    if(obj[prop]){
      obj = obj[prop]
    }else{
      return null
    }
  }
  return obj
}
