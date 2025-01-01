import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const RefundPolicy = () => {
  return (
    <>
    <Meta title={"Refund Policy"} />
    <BreadCrumb title="Refound Policy" />
    <div className='policy-wrapper py-5 home-wrapper'>
      <div className="container-xxl">
        <div className="row">
          <div className='col-12'>
            <div className='policy'></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RefundPolicy