import React from 'react';
import './Banner.css';
import Header from '../../Shared/Header/Header';


const Banner = () => {
    return (
        <section className="banner-area">
            <Header></Header>
            <div className="content-area">
                <div className="content text-white mb-5">

                    <h1 >Rejuvenating your business</h1>
                    <p>By reducing cost & delivering results that</p>
                    <h3>Endure</h3>

                </div>
            </div>

        </section>
    );
};

export default Banner;