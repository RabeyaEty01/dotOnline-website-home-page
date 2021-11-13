import React from 'react';
import line from '../../../images/hline.svg';
import vector1 from '../../../images/Group 8.svg';
import vector2 from '../../../images/Group 10.svg';
import vector3 from '../../../images/Group 9.svg';
import dot from '../../../images/dot.svg';
import arrow from '../../../images/Group 1.svg'
import './Services.css';

const Services = () => {
    return (
        <section className="container">
            <div className="do-img ">
                <img src={dot} alt="" />
            </div>
            <div className="services-section">
                <div className="services-div pt-5">
                    <h1 className="text-start pb-4 mt-5 pt-0">OUR SERVICES <span> <img className="ps-2" src={line} alt="" /></span></h1>
                    <h4 className="nav-text tech-text text-start ">Technology expertise for changing times</h4>
                </div>

                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
                    <div class="col">
                        <div class="border-0">
                            <img src={vector2} class="card-img-top img-fluid service-card-img" alt="..." />
                            <div class="card-body service-card-text">
                                <h5 class="card-title">Software</h5>
                                <p class="card-text">We are a boutique solution provider offering <br /> a wide range of custom software <br /> development & integration services for a <br /> broad spectrum of business vertical.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class=" border-0">
                            <img src={vector1} class="card-img-top img-fluid service-card-img" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Expert consulting</h5>
                                <p class="card-text">Our global consultation offering comprises a <br />broad array of application to meet the needs <br /> of a diverse set of clientele.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class=" border-0">
                            <img src={vector3} class="card-img-top img-fluid service-card-img" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Professional placements</h5>
                                <p class="card-text">Let us find the next tech superstar of your <br /> company. We place professionals exclusively <br /> within the technical domain.</p>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <p className="read-more-text ">read more about our services  <img src={arrow} className="ps-2" alt="..." />  </p>
            </div>
        </section>
    );
};

export default Services;