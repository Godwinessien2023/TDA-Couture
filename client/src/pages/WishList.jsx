import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const WishList = () => {
  return (
    <>
        <Meta title={"wishlist"} />
        <BreadCrumb title="Wishlist" />
        <div className='wishlist-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src='./images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                            <div className='wishlist-card-image'>
                                <img src='./images/watch.jpg' className='img-fluid w-100' alt='watch' />
                            </div>
                        </div>
                        <div >
                            <div className='py-3 px-3 wishlist-details'>
                                <h5 className='title'>Honor TI 7.0 1 GB RAM 8 ROM 7 Inch Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100.00</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src='./images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                            <div className='wishlist-card-image'>
                                <img src='./images/watch.jpg' className='img-fluid w-100' alt='watch' />
                            </div>
                        </div>
                        <div >
                            <div className='py-3 px-3 wishlist-details'>
                                <h5 className='title'>Honor TI 7.0 1 GB RAM 8 ROM 7 Inch Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100.00</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src='./images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                            <div className='wishlist-card-image'>
                                <img src='./images/watch.jpg' className='img-fluid w-100' alt='watch' />
                            </div>
                        </div>
                        <div >
                            <div className='py-3 px-3 wishlist-details'>
                                <h5 className='title'>Honor TI 7.0 1 GB RAM 8 ROM 7 Inch Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WishList