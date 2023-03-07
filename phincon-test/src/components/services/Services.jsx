import React from 'react'
import "./services.css"
/* eslint-disable */
const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web <br /> Designer</h3>
                </div>

                <span className="services__button">
                    View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web <br /> Designer</h3>
                        <p className="services__modal-description">
                            Test
                        </p>

                        
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">UI/UX <br /> Designer</h3>
                </div>

                <span className="services__button">
                    View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">UI/UX <br /> Designer</h3>
                        <p className="services__modal-description">
                            Test
                        </p>

                        
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Branding <br /> Designer</h3>
                </div>

                <span className="services__button">
                    View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Branding <br /> Designer</h3>
                        <p className="services__modal-description">
                            Test
                        </p>

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services