import React, { useState } from 'react'
import './sign.css'
import { useDispatch, useSelector } from 'react-redux';
import { hideshowicon } from '../redux/menuslice';
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";


function Signin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { typeinput } = useSelector((state) => state.menuslice)
  // const [passworderror, setePassworderror] = useState("")
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  })

  const submitform = (e) => {
    e.preventDefault();
    setFormdata({
      email: "",
      password: "",
    });
    navigate('/')
  }

  const onchanghandel = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value })
  }

  return (

    <>
      <div className="container signinpage">
        <div className="signin">
          <form action="" onSubmit={submitform}>
            <h2 className='signin-title section-title'>Welcome Back</h2>
            <div className='mb-3'>
              <p className='label'>Email</p>
              <input name='email' type="email" className='input-box form-control' required value={formdata.email} onChange={(e) => { onchanghandel(e) }} />
            </div>
            <div className='mb-3'>
              <p className='label'>Password</p>
              <div className="form-control d-flex align-items-center input-box">
                <input name="password" type={typeinput ? "text" : "password"} className='password-field' required value={formdata.password} onChange={(e) => { onchanghandel(e) }} />
                {
                  typeinput ?
                    <BiHide onClick={() => dispatch(hideshowicon())} className='cursor-point' /> :
                    <BiShow onClick={() => dispatch(hideshowicon())} className='cursor-point' />
                }
                {/* <p className='pass-error'>{passworderror}</p> */}
              </div>
            </div>
            <div className='btn btn-text-white purple-btn-color my-4 w-100 p-0'>
              <input type="submit" value="Sing in" className='submit-btn' />
            </div>
          </form>
          <p className='text-center mb-2'><Link to="growyourbusiness.netlify.app/signin" className='signin-a-hover'>Forgot Password?</Link></p>
          <p className='text-center'>Don't have an account? <Link to="growyourbusiness.netlify.app/signin" className='signin-a-hover'>Sign Up</Link></p>
          <div className="divider-icon my-4">or</div>
          <ul className='social-row'>
            <li className=''>
              <Link className='social-icon-li page-btn-hover'><FaGoogle /></Link>
            </li>
            <li className=''>
              <Link className='social-icon-li page-btn-hover'><FaFacebookF /></Link>
            </li>
            <li className=''>
              <Link className='social-icon-li page-btn-hover'><FaTwitter /></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Signin