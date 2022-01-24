import React from 'react';
import {NavLink} from 'react-router-dom'


 const Signup = () => {
    return (
        <>
        {/* <!-- Button trigger modal --> */}
<NavLink to="/signup" type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
 <i className="fa fa-user-plus me-1"></i>Register
</NavLink>

{/* <!-- Modal --> */}
<div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Register</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <button className="btn btn-primary w-100 mb-4"><i className="fa fa-google me-2"></i>Sign up with Google
      </button>
      <button className="btn btn-primary w-100 mb-4"><i className="fa fa-facebook me-2"></i>Sign up with Facebok</button>


      <form>
        <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
</form>
         
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Signup;
