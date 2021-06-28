
'use strict';
// the name of function does'nt important 
//we should export the function and ir will be as vaildator in server as we requerw it 
function k (req,res,next){
    if(req.query.name){
      next()
    }else {
      next('Dont Have name');
    }
  }


  module.exports = k ;