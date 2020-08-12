import React , {useReducer,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {reducers} from '../../helpers/bindingReducer';
import {handlers} from '../../helpers/bindingHandlers';
import {initStates} from '../../helpers/initStates';
import apiClient from '../../network/apiClient';
import Markup from './markup';
import {useHistory} from 'react-router-dom';
// import {ipcRenderer} from 'electron';

const Login = (props) => {
    let history = useHistory();

    const { register , handleSubmit ,errors,setError,clearError} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: {},
        validationSchema: undefined, // Note: will be deprecated in the next major version with validationResolver
        validationResolver: undefined,
        validationContext: undefined,
        validateCriteriaMode: "firstErrorDetected",
        submitFocusError: true,
        nativeValidation: false, // Note: version 3 only
      })


      const [login,setLogin] = useReducer(reducers.binder,initStates.loginData);   
      


      const submit = async (e) =>{
        try{
       
          const res = await apiClient.login(e);
          console.log(res);
          if(!res.error){
            window.ipcRenderer.send('settoken',res.token);
            window.ipcRenderer.send('getToken','ping');
          }
            
          //   if(!res){
        //     return setError("connection", "server", "server Is Down At the moment ");
        //   }
       
        //  if(res.er) return setError("connection", "Auth", res.message);
        //     props._login(res);
        //     return history.push('/');
  
        //   }
  
        }catch(err){
            console.log(err);
        //   setError("connection", "server", "server Is Down At the moment ");
        }
        }

    return <Markup
    formValidation={{register,handleSubmit,errors}}  
    submit={submit} 
    state={login} 
    handlers={handlers.mainChange} 
    reducer={setLogin} 
    errors={errors}
    clearError={clearError}
    />;
}

export default Login;