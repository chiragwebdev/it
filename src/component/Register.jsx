import React, { useState } from 'react'
import './sign.css'
import { BiShow, BiHide } from "react-icons/bi";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hideshowicon, senddata } from '../redux/menuslice';


function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { typeinput } = useSelector((state) => state.menuslice)
    const [passworderror, setePassworderror] = useState("")
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
    })

    const submitform = (e) => {
        e.preventDefault();
        if (formdata.password === formdata.repassword) {
            // localStorage.setItem("email", formdata.email);
            // localStorage.setItem("password", formdata.password);
            setePassworderror("")
            setFormdata({
                name: "",
                email: "",
                password: "",
                repassword: "",
            });
            navigate('/')
            dispatch(senddata({ ...formdata }))
        } else {
            setePassworderror("password not match")
        }
    }

    const onchanghandel = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }


    return (
        <div className="container signinpage">
            <div className="signin">
                <h2 className='signin-title section-title'>Sign Up</h2>
                <form action="" onSubmit={submitform}>
                    <div className='mb-3'>
                        <p className='label'>Name</p>
                        <input name='name' type="text" className='input-box form-control' required value={formdata.name} onChange={(e) => { onchanghandel(e) }} />
                    </div>
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

                        </div>
                    </div>
                    <div className='mb-3'>
                        <p className='label'>Re-type Password</p>
                        <div className="form-control d-flex align-items-center input-box">
                            <input name="repassword" type={typeinput ? "text" : "password"} className='password-field' required value={formdata.repassword} onChange={(e) => { onchanghandel(e) }} />
                            {
                                typeinput ?
                                    <BiHide onClick={() => dispatch(hideshowicon())} className='cursor-point' /> :
                                    <BiShow onClick={() => dispatch(hideshowicon())} className='cursor-point' />
                            }
                        </div>
                        <p className='pass-error'>{passworderror}</p>
                    </div>
                    <div className='btn btn-text-white purple-btn-color my-4 w-100 p-0'>
                        <input type="submit" value="Register" className='submit-btn'/>
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link to="growyourbusiness.netlify.app/signin" className='signin-a-hover'>Sign in</Link></p>
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
    )
}

export default Register