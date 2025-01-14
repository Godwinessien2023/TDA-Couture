import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import SignupApi from "../api"

const Signup = () => {
  return (
    <>
    <Meta title={"Signup"} />
    <BreadCrumb title="Create Account" />
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Sign Up/Create Account</h3>
                        <form action={"/"} method='POST' className='d-flex flex-column gap-30'>
                            <div>
                                <input type='text' name='fname' className='form-control' placeholder='Firstname' required='true' />
                            </div>
                            
                            <div>
                                <input type='text' name='lname' className='form-control' placeholder='Lastname' required='true'/>
                            </div>

                            <div>
                                <input type='email' name='email' className='form-control' placeholder='Email' required='true'/>
                            </div>

                            <div>
                                <input type='tel' name='mobile' className='form-control' placeholder='Mobile Number' required='true'/>
                            </div>

                            <div>
                                <input type='password' name='password' className='form-control' placeholder='Password' required='true'/>
                            </div>

                            <div>
                                <div className='d-flex justify-content-center gap-15 align-items-center'>
                                    <button type='submit' className='button border-0'>Signup</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup