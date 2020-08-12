import React,{useState,useReducer} from 'react';
import Markup from './markup'
import { useForm } from 'react-hook-form'
import {reducers} from '../../helpers/bindingReducer';
import {handlers} from '../../helpers/bindingHandlers';
import {initStates} from '../../helpers/initStates';

const NewProduct = () => {


    const {addProductValidation,handleSubmit,errors,setError,clearError} = useForm({
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
      const [addProductState,setAddProductState] = useReducer(reducers.binder,initStates.addProductState);   

     
    return (
        <Markup
        formValidation={{addProductValidation,handleSubmit,errors}}  
        handlers={handlers.mainChange}
        state={addProductState}  
        reducer={setAddProductState} 
        errors={errors}
        clearError={clearError}
        />
    );
};

export default NewProduct;