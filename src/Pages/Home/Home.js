import React from "react";
import AppointmentSec from "./AppointmentSec";
import Banner from "./Banner";
import CardsContainer from "./CardsContainer";
import ServiceCardsContainer from "./ServiceCardsContainer";
import Treatment from "./Treatment";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardsContainer></CardsContainer>
            <ServiceCardsContainer></ServiceCardsContainer>
            <Treatment></Treatment>
            <AppointmentSec></AppointmentSec>
        </div>
    );
};

export default Home;
