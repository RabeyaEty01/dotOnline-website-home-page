import React from 'react';
import img from '../../../images/pexels-fox-1595385 1.png';
import './JoinUs.css';

const JoinUs = () => {
    return (

        <section className="container">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col col-sm-12  col-md-12 col-lg-3">
                    <div className="pt-3 pb-5 mt-5">
                        <div class="card join-us-card shadow border-0">
                            <div class="card-body join-us-text text-start">
                                <h5 class="card-title">Join our family</h5>
                                <p class="card-text">When you join our firm, you become part of our family.We attract the very best people and we work together to learn, grow and realize our dreams through mentoring one another and innovative development process.</p>

                            </div>
                        </div>
                        <div className="pt-5">
                            <span className="span-text text-start  px-4">CHECK ALL JOB POST</span>
                        </div>
                    </div>
                </div>
                <div className="col col-sm-12  col-md-12 col-lg-9">
                    <img className="img-fluid" src={img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default JoinUs;