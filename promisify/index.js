/*
  Takes an async function which "returns" a callback of the form cb(err,res)
  Returns a promisified function which can be used with async/await.
*/

module.exports = function(fn){
  return function(){
    const args = arguments
    return new Promise((resolve,reject)=>{
      fn(...args,function(err,res){
        if(err) return reject(err)
        return resolve(res)
      })
    })
  }
}
