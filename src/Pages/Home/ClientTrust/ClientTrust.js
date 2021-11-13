import React from 'react';
import line from '../../../images/hline.svg';

import './ClientTrust.css';


const ClientTrust = () => {
    return (
        <section className="container my-5 pt-5">
            <div className="clients-trust py-5">
                <div className="pt-5 ">
                    <h1 className="text-start ms-2">CLIENTS WHO TRUST US <span> <img className="ps-2" src={line} alt="" /></span></h1>

                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ">
                        <div class="col">
                            <img src="https://i.ibb.co/GxjRWvf/logo-pepsi-1.png" class="card-img-top" alt="..." />
                        </div>
                        <div class="col">
                            <img src="https://i.ibb.co/dMTGqb9/logo-at-t.png" class="card-img-top" alt="..." />
                        </div>
                        <div class="col">
                            <img src="https://i.ibb.co/PMfDhV4/logo-netgear.png" class="card-img-top" alt="..." />
                        </div>
                        <div class="col">
                            <img src="https://i.ibb.co/s5ms31L/logo-moto.png" class="card-img-top img-fluid" alt="..." />
                        </div>


                        <div class="col">
                            <img src="https://i.ibb.co/x6ggGjr/logo-nokia.png" class="card-img-top img-fluid" alt="..." />
                        </div>
                        <div class="col">
                            <img src="https://i.ibb.co/R9jX46H/logo-pizaahut-1.png" class="card-img-top img-fluid" alt="..." />
                        </div>
                        <div class="col">
                            <img src="https://i.ibb.co/Twjvz7R/logo-nikon.png" class="card-img-top img-fluid" alt="..." />
                        </div>
                        <div class="col">
                            <img src="https://i.ibb.co/fqbckx1/logo-pace.png" class="card-img-top img-fluid" alt="..." />
                        </div>

                    </div>
                </div>

            </div>
        </section>

    );
};

export default ClientTrust;