import React from 'react';
import Banner from '../Banner/Banner';
import ClientTrust from '../ClientTrust/ClientTrust';
import Services from '../Services/Services';
import KeyTechnologies from '../KeyTechnologies/KeyTechnologies';
import JoinUs from '../JoinUs/JoinUs';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientTrust></ClientTrust>
            <Services></Services>
            <KeyTechnologies></KeyTechnologies>
           <JoinUs></JoinUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;