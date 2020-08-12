import React from "react";

const Toggler = ({
  col,  
  type,
  inputValidation,
  rules,
  label,
  placeholder,
  name,
  value,
  handlers,
  reducer,
  error,
  profile = false,
  clearError = false,
  customClass = false
}) => {

  const handleChange = (e) => {
    if (clearError) {
      clearError();
    }
    handlers(e, reducer);
  };
  console.log(customClass)
  return (
        <div className={`form-group col-md-${col} ${ !customClass ? '' : customClass }`}>
            
            <label className="control-label float-right" htmlFor={name}>{label}</label>
            <input onChange={handleChange} type={type} className="custom-control-input" id={name} name={name} placeholder={placeholder} />
        </div>
  );
};

export default Toggler;
