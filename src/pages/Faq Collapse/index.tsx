import React from 'react'
import StyleDiv from './style'

export default function Index() {
  return (
    <StyleDiv>
      <i className="iconfont icon-qingchu"></i>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        <div className="faq active">
          <h3 className="faq-title">
            Why shouldn't we trust atoms?
          </h3>

          <p className="faq-text">
            They make up everything
          </p>

          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">
            What do you call someone with no body and no nose?
          </h3>
          <p className="faq-text">
            Nobody knows.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">
            What's the object-oriented way to become wealthy?
          </h3>
          <p className="faq-text">
            Inheritance.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">
            How many tickles does it take to tickle an octopus?
          </h3>
          <p className="faq-text">
            Ten-tickles!
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">
            What is: 1 + 1?
          </h3>
          <p className="faq-text">
            Depends on who are you asking.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </StyleDiv>
  )
}
