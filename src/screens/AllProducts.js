import React from 'react';
import {Link} from "react-router-dom";

const AllProducts = (props) => {
    return (
<div>
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-3 mt-3">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark float-right">المنتجات </h1>
        </div>
        <div className="col-sm-6">
          <Link to="/addnewproduct" className="btn btn-success float-left">  إضافة منتج جديد<i className="fas fa-plus" />  </Link>
        </div>
      </div>
    </div>
  </div>
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title float-right">كل المنتجات</h3>
              <div className="card-tools">
              
              </div>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>الكود</th>
                    <th>إسم المنتج </th>
                    <th>النوع </th>
                    <th>الحالة</th>
                    <th>تعديل</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>14132</td>
                    <td>بنطلون جينس</td>
                    <td>بنطلون</td>
                    <td><span className="tag tag-success">فعال</span></td>
                    <td> <a href="#" className="btn-sm btn-primary "><i className="far fa-edit" /> تعديل </a></td>
                    <td> <a href="#" className="btn-sm btn-danger "><i className="fas fa-trash-alt" /> حذف</a></td>
                  </tr>
                  <tr>
                    <td>15132</td>
                    <td>تى شيرت بولو</td>
                    <td>تى شيرت </td>
                    <td><span className="tag tag-success">منتهى</span></td>
                    <td> <a href="#" className="btn-sm btn-primary "><i className="far fa-edit" /> تعديل </a></td>
                    <td> <a href="#" className="btn-sm btn-danger "><i className="fas fa-trash-alt" /> حذف</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>


    );
}

export default AllProducts;