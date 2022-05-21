import React from "react";
import Banner from "./Banner";
import CardsContainer from "./CardsContainer";
import ServiceCardsContainer from "./ServiceCardsContainer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardsContainer></CardsContainer>
            <ServiceCardsContainer></ServiceCardsContainer>
        </div>
    );
};

export default Home;
