import React from 'react';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import back4 from '../../../assets/images/bg-images/bg4.jpg';

const ResetPassword = () => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
        <div className="row align-items-center w-100 align-items-stretch bg-white">
          <div
            className="d-none d-lg-flex col-lg-8 aut-bg-img align-items-center d-flex justify-content-center"
            style={{
              backgroundImage: `url(${back4})`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center'
            }}
          >
            <div className="col-md-8">
              <h1 className="text-white mb-5">Trải nghiệm dùng thử MHK 7 ngày</h1>
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever.
              </p>
            </div>
          </div>
          <div className="col-lg-4 align-items-stret h-100 align-items-center d-flex justify-content-center">
            <div className=" auth-content text-center">
              <div className="mb-4">
                <i className="feather icon-mail auth-icon" />
              </div>
              <h3 className="mb-4">Đặt lại mật khẩu</h3>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Địa chỉ email của bạn" />
              </div>
              <button className="btn btn-primary mb-4 shadow-2">Xác nhận</button>
              <p className="mb-0 text-muted">
                Chưa có tài khoản? <NavLink to="/auth/signup-2">Đăng ký ngay</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
