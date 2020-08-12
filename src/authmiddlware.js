import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route , Link , Router} from "react-router-dom";
import App from './App';
import Login from './screens/login';
import Topbar from './layout/topbar';
import apiClient from './network/apiClient';


const AuthMiddleware = () => {
    const [ token , setToken ] = useState(false);

    useEffect(()=>{
      window.ipcRenderer.send('getToken','ping');
      window.ipcRenderer.on('getToken',async (e,item)=>{
         
          apiClient.setAuthTokenInHeader(item);
          const res = await apiClient.checkToken();
          if(res){
            
            if(!res.error){
              return setToken(item); 
            } 
            
          
        }

        });
      window.ipcRenderer.on('deleteToken',(e,item)=>{
        setToken(item);
      })
      window.ipcRenderer.on('settoken',(e,item)=>{
        setToken(item);
      })
        
      },[])

    const auth = ()=>{
       if(token){
         return  <App/>
       } 
       return <Login/>
    }

  return (
<>

<Topbar token={token}/>
{auth()}


 </>

    

  
  );
}

export default AuthMiddleware;
