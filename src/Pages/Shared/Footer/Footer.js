import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <>
        <section className="footer-section py-5 mt-5">
            <div className="container">
                <div class="row ">
                    <div className="col col-sm-12  col-md-12 col-lg-4 footer-text">
                        <div className="dot-img">
                            <h1 className="text-start pt-4 ps-4">Explore how Redh6me can improve your business</h1>
                        </div>

                    </div>
                    <div className="col  col-lg-3 footer-text">
                        <div className="pt-5 mt-5 text-start text-white">
                            <div className="pt-5">
                                <p className="pt-5">1412 Main Street, Suite 2200 <br /> A
                                    Dallas, TX 75202</p>
                                <p className="pt-3">Tel: 214-740-2100
                                    Info@redh6mesolutions.com</p>
                            </div>
                        </div>

                    </div>
                    <div className="col  col-lg-2 footer-text">
                        <div className="pt-5 mt-5 text-start text-white">

                            <h5 className="pt-5 mt-5 pb-3">LOCATIONS</h5>
                            <div className="pt-3 footer-list">
                                <h6>USA</h6>
                                <h6>Europe</h6>
                                <h6>Asia Pacific</h6>
                            </div>

                        </div>

                    </div>
                    <div className="col col-sm-12  col-md-12 col-lg-2 footer-text">
                        <div className="pt-5 mt-5 text-start text-white">

                            <div className="pt-5 mt-5 footer-list">
                                <h6>Home</h6>
                                <h6>About The Firm</h6>
                                <h6>Services</h6>
                                <h6>Career</h6>
                                <h6>Contact Us</h6>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </section>
        <section className="copyright-footer">
            <p className="py-2 text-white">Copyright Redlime Solutions</p>
        </section>
        </>
    );
};

export default Footer;