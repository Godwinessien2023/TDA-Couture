import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import watch from "../images/watch.jpg"

const Checkout = () => {
  return (
    <>
     <Meta title={"Checkout"} />
     <BreadCrumb title="Checkout" />

     <div className='checkout-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label='breadcrumb'>
                            <ol className='breadcrumb total'>
                                <li className='breadcrumb-item'>
                                    <Link to="/" className='text-dark'>cart </Link>
                                </li>
                                &nbsp; /   &nbsp;
                                <Link to="/contact" className='bredcrumb-item active text-dark' aria-current="page">Information</Link> &nbsp;  /   &nbsp;
                                <Link to="/shipping" className='bredcrumb-item active text-dark' aria-current="page">Shipping</Link>  &nbsp;  /   &nbsp;
                                <Link to="/payment" className='bredcrumb-item active text-dark' aria-current="page">Payment</Link>
                            </ol>
                        </nav>

                        <h4 className='title'>Contact Information</h4>
                        <p className='user-details total'>Dev-Nonso (dev-nonso001@gmail.com)</p>

                        <h4 className='mb=3'>Shipping Address</h4>

                        <form action={""} className='d-flex gap-15 flex-wrap justify-content-between'>
                            <div className='w-100'>
                                <select name='' className='form-control form-select' id=''>
                                    <option value={""} selected disabled>Select Country</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' className='form-control' placeholder='First Name' />
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' className='form-control' placeholder='Last Name' />
                            </div>
                            <div className='w-100'>
                                <input type='text' className='form-control' placeholder='Address' />
                            </div>
                            <div className='w-100'>
                                <input type='text' className='form-control'  placeholder='Appartment, Suit, etc' />
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' className='form-control' placeholder='City'  />
                            </div>
                            <div className='flex-grow-1'>
                                <select name='' className='form-control form-select' id=''>
                                    <option value={""} selected disabled>Select State</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' className='form-control' placeholder='ZipCode' />
                            </div>

                            <div className='w-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/cart" className='button'> 
                                        <FaLongArrowAltLeft className='m-2' />
                                        Return To Cart
                                     </Link>
                                    <Link to="/shipping" className='button'>Continue Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-15 mb-2 align-items-center'>
                            <div className='w-75 d-flex gap-15'>
                                <div className='w-25 position-relative'>
                                    <span style={{top: "-10px", right: "2px"}}
                                    className='badge bg-success text-white rounded-circle p-2 position-absolute'>1</span>
                                    <img src={watch} className='img-fluid' alt='Product' />
                                </div>
                                <div>
                                    <h5 className='total-price'>random text</h5>
                                    <p className='total'>s / #jhvgv</p>
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                                <h5 className='total'>$ 100.00</h5>
                            </div>
                        </div>
                    </div>

                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p h4 className='total'>Subtotal</p>
                            <p className='total-price'>$ 2000.00</p>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>$ 1000.00</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>$ 1000.00</h5>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Checkout