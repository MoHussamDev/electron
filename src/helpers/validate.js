import validator from 'validator';

const validate = {
  isEmpty : (e)=>{
      if(validator.isEmpty(e)){
        return true
      }
        return false
  }, 
  isEmail:(e)=>{
      if(!validator.isEmail(e.toString())){
        return false;
      }
      return true;
  },
  isMatch:(password,e)=>{
      if(!validator.equals(password, e)){
        return false;
      }
      return true;
  }, 
  
  isNatId:(e)=>{

  }, 
}

export default validate