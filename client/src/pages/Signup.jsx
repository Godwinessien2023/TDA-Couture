import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

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
                                <input type='text' name='name' className='form-control' placeholder='Name' />
                            </div>
                            
                            <div>
                                <input type='tel' name='mobile' className='form-control' placeholder='Mobile Number' />
                            </div>

                            <div>
                                <input type='email' name='email' className='form-control' placeholder='Email' />
                            </div>

                            <div>
                                <input type='password' name='password' className='form-control' placeholder='Password' />
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