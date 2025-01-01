import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const TermAndConditions = () => {
  return (
    <>
    <Meta title={"Term And Conditions"} />
    <BreadCrumb title="Term And Conditions" />
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

export default TermAndConditions