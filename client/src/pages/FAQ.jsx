import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import FaqItem from "../components/FaqItem";

const FAQ = () => {
	const faqs= [
		{
      question: 'What is TDA-Couture?',
      answer: 'TDA-Couture is a premium online fashion store offering exclusive and trendy apparel for all occasions.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship worldwide. Shipping charges and delivery times vary by location.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be in their original condition with tags attached.'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking link via email to monitor its progress.'
    },
    {
      question: 'Can I cancel or modify my order?',
      answer: 'Orders can be canceled or modified within 24 hours of placing them. Contact customer support for assistance.'
    },
  ];
  return (
    <>
      <Meta title={"Frequently Asked Question"} />
      <BreadCrumb title="Frequently Asked Question" />
      <div className="contact-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
	  	<div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
	  </div>
	  </div>
	  </div>
	  </div>
	</>
  )
}

export default FAQ
