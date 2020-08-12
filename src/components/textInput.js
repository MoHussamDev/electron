import React from 'react';

const TextInput = (
    //constructor 


    {
        // placeholder Of the Input  
        
        placeholder = 'defalut Place Holder', 
        
        
        // name of The Input 

        name='name' ,
        
        
        // type Of the Input 
        type="text",
        

        // label of the Input 
        label="input label",


        /// value Of the Input 
        value = ' ',
        
        
        
        // register for the Validation 
        register = ()=>{

        },

        //rules Of the Validatiopn 
        rules = {},
        
        
        // Binding Handler 
        handlers = ()=>{

        },

        // Reducer Of the State 
        reducer = ()=>{

        },

        // errrors of the Validation 
        error = false,


        /// clear error 
        clearError = false
        
    
    }) => {
  



    ///handle Change /// 


    
    const handleChange = (e) => {
    
        /// check If Clear Error 

        if (clearError) {
            console.log(clearError);
          clearError();
        }
    
        handlers(e, reducer);
      };


    return (
        <div className={`l-form-input ${error.type ? 'error' : '' }`}>
        <label htmlFor=""> {label} </label>
        <input
        type={type} 
        value={value}  
        name={name} 
        placeholder={placeholder}
        onChange={handleChange}  
        ref={register(rules)}
        className="l-form-control"
       />   
       
           
    <div className="l-error-message">{error ? error.message :'' }</div> 
        
        </div>
        
    );
};

export default TextInput;