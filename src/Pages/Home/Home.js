import React from "react";
import Footer from "../Shared/Footer";
import AppointmentSec from "./AppointmentSec";
import Banner from "./Banner";
import CardsContainer from "./CardsContainer";
import ContactFormSec from "./ContactFormSec";
import Reviews from "./Reviews";
import ServiceCardsContainer from "./ServiceCardsContainer";
import Testimonials from "./Testimonials";
import Treatment from "./Treatment";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardsContainer></CardsContainer>
            <ServiceCardsContainer></ServiceCardsContainer>
            <Treatment></Treatment>
            <AppointmentSec></AppointmentSec>
            <Testimonials></Testimonials>
            <ContactFormSec></ContactFormSec>
        </div>
    );
};

export default Home;
