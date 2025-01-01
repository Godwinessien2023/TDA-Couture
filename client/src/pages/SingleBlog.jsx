import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
// import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsappSquare, FaInstagramSquare, FaLongArrowAltLeft  } from "react-icons/fa";
import DateTime from '../components/DateTime';

const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dynamic Blog Post"} />
    <BreadCrumb title="Dynamic Blog Post" />
    <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className='col-3'>
                        <div className="single-content mb-3">
                            <h3 className="filter-title">Shop By Categories</h3>
                            <div>
                                <ul className="ps-0">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/store">Our Store</Link></li>
                                    <li><Link to="/blogs">Blogs</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-12 mb-3'>
                                <div className='single-blog-card'>
                                    <h3 className='title'>
                                        A Beautiful Sunday Morning Renaissance
                                    </h3>
                                    <img src='./images/blog-1.jpg' className='img-fluid w-100 my-4' alt='sign-blog' />
                                    <p className='my-3'>
                                        You're only as good as your last collections, which is an enormous pressure.
                                        I think there is something about luxury - it's not something people need, but
                                        it's what they want. It really pulls at their heart. I have a fantastic relationship
                                        with money.
                                    </p>
                                    <span><DateTime /> &nbsp; Chinonso Ogbonnaya</span>
                                    
                                    <div className='d-flex justify-content-between align-items-center gap-15'>
                                        <div className='revser my-4'>
                                            <Link to="/blogs">
                                                <FaLongArrowAltLeft /> &nbsp;
                                                Back to Blog
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center gap-30">
                                            <Link to="/"><FaGithub className="text-dark fs-5 custom-footer-links"/></Link>
                                            <Link to="/"><FaLinkedin className="text-dark fs-5 custom-footer-links"/></Link>
                                            <Link to="/"><FaFacebook className="text-dark fs-5 custom-footer-links"/></Link>
                                            <Link to="/"><FaWhatsappSquare className="text-dark fs-5 custom-footer-links"/></Link>
                                            <Link to="/"><FaInstagramSquare className="text-dark fs-5 custom-footer-links"/></Link>
                                        </div>
                                    </div>

                                    <div className='single-card my-2'>
                                        <h3 className='text-center mb-3'>Leave A Comment</h3>
                                        <form action={"/"} method='POST' className='gap-30'>
                                           <div className='gap-30 my-4'>
                                                <div className='d-flex gap-15 my-4'>
                                                        <div className="flex-grow-1">
                                                            <input
                                                            type="name"
                                                            name="name"
                                                            className="form-control"
                                                            placeholder="Name"
                                                            />
                                                        </div>

                                                        <div className="flex-grow-1">
                                                            <input
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="Email"
                                                            />
                                                        </div>
                                                </div>

                                                <div>
                                                        <div className="mb-3">
                                                            <textarea name="" id="" className="w-100 form-control" cols="30" rows="3" placeholder="Comments"></textarea>
                                                        </div>

                                                        <div>
                                                            <div className='d-flex justify-content-start gap-15 align-items-start'>
                                                                <button type='submit' className='button border-0'>Post Comments</button>
                                                            </div>
                                                        </div>
                                                </div>
                                           </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog