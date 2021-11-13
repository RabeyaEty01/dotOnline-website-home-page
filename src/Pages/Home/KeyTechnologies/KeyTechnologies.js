import React from 'react';
import line from '../../../images/hline.svg';
import right from '../../../images/Vector (2).svg';
import laptopMobilegroup from '../../../images/laptopMobile-2.svg';
import dot from '../../../images/dot (1).png';
import './KeyTechnologies.css';

const KeyTechnologies = () => {
    return (
        <section className="container my-5 pt-5">
            <div className="pt-5">
                <div>
                    <h1 className="text-start mb-4">KEY TECHNOLOGIES <span> <img className="ps-2" src={line} alt="" /></span></h1>
                    <h4 className="nav-text tech-text text-start ">Technologies used for production</h4>

                    <div class="row row-cols-1 row-cols-md-2 g-4 py-3 ">

                        <div className="col col-sm-12  col-md-4 col-lg-4 g-4 ">
                            <p className="text-start lorem-text ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nibh felis, a maximus mauris varius at. Maecenas congue lobortis mattis.
                            </p>
                            <button className="btn-1 btn-dark py-2 px-4">VIEW DETAILS</button>

                        </div>
                        <div className="key-tech-section col col-sm-12 col-md-8  col-lg-8 gx-5">
                            <div className="pt-5 mt-5">
                                <div className="text-start">
                                    <div className=" tech-right-div ps-4  mx-5">
                                        <h5>HTML5</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nibh felis, a maximus <br /> mauris varius at. Maecenas congue lobortis mattis.</p>
                                    </div>
                                    <img className="mx-5" src={right} alt="" />
                                </div>
                                <div className="text-start">
                                    <div className=" tech-right-div ps-4 pt-3  mx-5">
                                        <h5>MOBILE APPLICATION</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nibh felis, a maximus <br /> mauris varius at. Maecenas congue lobortis mattis.</p>
                                    </div>
                                    <img className="mx-5" src={right} alt="" />
                                </div>
                                <div className="text-start">
                                    <div className=" tech-right-div ps-4 pt-3  mx-5">
                                        <h5>.NET</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nibh felis, a maximus <br /> mauris varius at. Maecenas congue lobortis mattis.</p>
                                    </div>
                                    <img className="mx-5" src={right} alt="" />
                                </div>
                                <div className="text-start">
                                    <div className=" tech-right-div ps-4 pt-3  mx-5">
                                        <h5>PHP</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nibh felis, a maximus <br /> mauris varius at. Maecenas congue lobortis mattis.</p>
                                    </div>
                                    <img className="mx-5" src={right} alt="" />
                                </div>
                                <div className="text-start">
                                    <div className=" tech-right-div ps-4 pt-3  mx-5">
                                        <h5>JAVA TECHNOLOGY</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nibh felis, a maximus <br /> mauris varius at. Maecenas congue lobortis mattis.</p>
                                    </div>
                                    <img className="mx-5" src={right} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="dot-img-2">
                            <img src={dot} alt="" />
                        </div>
                    </div>

                </div>

                <h4 className="nav-text tech-text text-dark text-start ">Improve your business</h4>

                {/* improve your business part  */}
                <div class="row row-cols-1 row-cols-md-2 g-4 pt-3 pe-3 ">

                    <div className="col col-sm-12  col-md-12 col-lg-4 ">

                        <p className="text-start lorem-text ">
                            Committed to supporting our client’s needs by  delivering tailored, cost effective, ethical and high quality & strategically aligned solutions, while  preserving a challenging yet gratifying atmosphere for our most important asset, our people who makes it happen.
                        </p>

                    </div>
                    <div className="col col-sm-12 col-md-12  col-lg-8 ">
                        <img className="img-fluid w-75" src={laptopMobilegroup} alt="" />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default KeyTechnologies;