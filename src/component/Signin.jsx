import React, { useState } from 'react'
import './sign.css'
import { useDispatch, useSelector } from 'react-redux';
import { hideshowicon } from '../redux/menuslice';
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


function Signin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { typeinput } = useSelector((state) => state.menuslice)
  const [passworderror, setePassworderror] = useState("")
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
            <h2 className='signin-title'>Sign In</h2>
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
                    <BiShow onClick={() => dispatch(hideshowicon())} className='cursor-point' /> :
                    <BiHide onClick={() => dispatch(hideshowicon())} className='cursor-point' />
                }
                <p className='pass-error'>{passworderror}</p>
              </div>
            </div>
            <input type="submit" value="Sign In" className='btn btn-theme-color submit' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin