import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
  return (
    <>
    <Meta title={"Product Name"} />
    <BreadCrumb title="Product Name" />
    <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'></div>
                <div className='col-6'></div>
            </div>
        </div>
    </div>

    <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                  <div className="bg-white p-3">
                    <h4 className='mb-3'>Description</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Nulla quis
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </div>

    <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'></div>
            </div>
        </div>
    </section>

    <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
           <div className='row'>
            <ProductCard />
           </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct