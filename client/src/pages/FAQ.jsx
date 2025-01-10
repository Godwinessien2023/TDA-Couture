import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import FaqItem from "../components/FaqItem";

const FAQ = () => {
  const faqs = [
    {
      question: "What is TDA-Couture?",
      answer:
        "TDA-Couture is a premium online fashion store offering exclusive and trendy apparel for all occasions.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Shipping charges and delivery times vary by location.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Items must be in their original condition with tags attached.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking link via email to monitor its progress.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "Orders can be canceled or modified within 24 hours of placing them. Contact customer support for assistance.",
    },
    {
      question: "How do we take measurements?",
      answer:
        "If you are in Lagos, we normally encourage our clients to come into the store so their measurements can be taken ad for fittings to be done. If you are outside Lagos, kindly request for our measurement guide and video or send us your perfect measurement and we will work with it.",
    },
    {
      question: "Do you accept client materials?",
      answer:
        "We accept client materials, however when you use our materials the price of sewing is reduced.",
    },
    {
      question: "How do we pick up our items?",
      answer:
        "If you live abroad or outside Lagos, you can either ask your contact to help you pick up or we can inquire on the cost of shipping/transportation to your location and inform you accordingly.",
    },
    {
      question: "How fast can we get our items?",
      answer:
        "Our order lead time is 7 - 10 days, however since inception we have managed to finish orders within 4 days.",
    },
    {
      question: "What about express services?",
      answer:
        "If you require express services, we can charge a little extra and make it happen",
    },
    {
      question: "How do we make payments?",
      answer:
        "You xan makw payment in our website using Paga, Paystack Checkout, Monify.",
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
                    <FaqItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
