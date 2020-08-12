import axios from "axios";
import apiRoutes from './apiRoutes';

let instance = axios.create({
    baseURL: "http://46.101.215.199/api",
  });

  const setAuthTokenInHeader = token =>
  (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  
  const login = async (d) =>{

    try{
      const res = await instance.post(apiRoutes.login, { ...d })
  
        if(res){
        return res.data;
      }
    }catch(err){
      return console.log(err.response); 
    }
}

const checkToken =  async () =>{
  try{
    const res = await instance.get(apiRoutes.login)

      if(res){
      return res.data;
    }
  }catch(err){
    return console.log(err.response); 
  }
}

export default  {
    setAuthTokenInHeader,
    login,
    checkToken
}

