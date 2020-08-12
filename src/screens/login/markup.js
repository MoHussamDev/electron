import React from 'react';
import TextInput from '../../components/textInput';
import validate from '../../helpers/validate';

const Markup = ({formValidation,submit,state,handlers,reducer,errors,clearError}) => {
    return (
        <div className="loginPage">
        <div className="l-card loginForm">
            <div className="l-card_header">
                <h2>تسجيل الدخول</h2>
            </div>
            <div className="l-card_body">

            <form className="l-form" action="" onSubmit={formValidation.handleSubmit(submit)} >
               
                <TextInput 
                placeholder=" مثلا example@example.com"
                name="email"
                type="email"
                label="البريد الإلكترونى"
                register={formValidation.register} 
                rules={{
                    required:'لا يمكن ترك هذا المدخل فارغ ',
                    validate:{
                        email: value => validate.isEmail(value) || 'Please Provide a working Email', 
                    }
              
                 }} 
                value={state.email} 
                handlers={handlers} 
                reducer={reducer} 
                error={errors.email}
                clearError={clearError}
                />

                <TextInput 
                placeholder="كلمة السر الخاصة بك"
                name="password"
                type="password"
                label="كلمة السر "
                register={formValidation.register} 
                rules={{
                    required:'لا يمكن ترك هذا المدخل فارغ ',
              
                 }} 
                value={state.password} 
                handlers={handlers} 
                reducer={reducer} 
                error={errors.password}
                clearError={clearError}
                />
        

                <div className="l-form-footer">

                <input type="submit" value="تسجيل الدخول" className="btn btn-primary" />
                </div>
            </form>
            </div>
        </div>
    </div>
    );
};

export default Markup;