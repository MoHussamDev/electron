import React from 'react';
import Input from '../../components/input';
import Select from 'react-select';

const options = [

  { value: 'chocolate', label: 'بنطلون جبردين ' },
  { value: 'strawberry', label: 'تى شيرت بولو' },
  { value: 'vanilla', label: 'شورت سبينز' }
]

const st = {
  control: (styles, {isFocused})=>{
    return{
        ...styles,
         border: isFocused ? '1px'  : styles.border  
        }
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
 
    return {
      ...styles,
      display:'flex',
      justifyContent:'flex-start',
   
      

      
      
    };
  },
}

const Markup = ({formValidation,submit,state,handlers,reducer,errors,clearError}) => {
  const consoleChange = (e)=>{
    console.log(e.target.value);
  }
    return (
     <div>
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-3 mt-3">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark float-right"> إضافة منتج جديد </h1>
        </div>
      </div>
    </div>
  </div>
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card ">
            <div className="card-header">
              <h3 className="card-title float-right"> بيانات المنتج  </h3>
            </div>

            <form  onSubmit={formValidation.handleSubmit(submit)} >
              <div className="card-body row">
                <div className="row mt-3">

              <Input 
                label="كود المنتج"
                name="productCode"
                placeholder="كود المنتج"
                col="2"
                type="text"
                inputValidation={formValidation.addProductValidation} 
                rules={{ required : 'لا يمكن ترك هذا المدخل فارغ '}}
                value={state.productCode} 
                handlers={handlers} 
                reducer={reducer} 
                error={errors.productCode}
                clearError={clearError}
                />

              <Input 
                label="اسم المنتج"
                name="productName"
                placeholder="اسم المنتج"
                col="4"
                type="text"
                register={formValidation.addProductValidation} 
                rules={{ required : 'لا يمكن ترك هذا المدخل فارغ '}}
                value={state.productName} 
                handlers={handlers} 
                reducer={reducer} 
                error={errors.productName}
                clearError={clearError}
                />

                </div>
                <div className="row mt-3">

                <Input 
                label="سعر الشراء الكلى "
                name="totalBuyingPrice"
                placeholder="سعر الشراء الكلى "
                col="2"
                type="Number"
                register={formValidation.addProductValidation} 
                rules={{ required : 'لا يمكن ترك هذا المدخل فارغ '}}
                value={state.totalBuyingPrice} 
                handlers={handlers} 
                reducer={reducer} 
                error={errors.totalBuyingPrice}
                clearError={clearError}
                />

                <Input 
                label="سعر بيع القطعة  "
                name="pieceSellingPrice"
                placeholder="سعر بيع القطعة  "
                col="2"
                type="Number"
                register={formValidation.addProductValidation} 
                rules={{ required : 'لا يمكن ترك هذا المدخل فارغ '}}
                value={state.pieceSellingPrice} 
                handlers={handlers} 
                reducer={reducer} 
                error={errors.pieceSellingPrice}
                clearError={clearError}
                customClass="mr-2"

                />

                {/* <div className="form-group">
                <div className="custom-control custom-switch">
                <label className="control-label float-left mr-5" htmlFor="">إخفاء المنتج</label>
                <input onChange={consoleChange} type="checkbox" className="custom-control-input" id="customSwitch1" />
                <label className="custom-control-label float-right" htmlFor="customSwitch1"></label>
                </div>
                </div> */}
  
            

                </div>
   
                <div className="row mt-3">

                <div className="col-md-3 form-group" style={{display:'flex',flexDirection:'column'}}>
                  <label style={{alignSelf:'flex-start'}}htmlFor="sele" className="control-label float-left">الصنف</label> 
                <Select
                options={options}
                isRtl={true}
                styles={st}
                placeholder=" اكتب صنف المنتج "
                />

                </div>

                </div>
         
                <button className="btn btn-primary float-right">add Color</button>
         
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary float-right">Add User</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Markup;