import React from "react";
import Cards from "./Cards";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const CardsContainer = () => {
    const cardsInfo = [
        { title: "Opening Hours", desc: "Lorem Ipsum is simply dummy text of the pri", img: clock, bgClass: "bg-gradient-to-r from-secondary to-primary" },
        { title: "Opening Hours", desc: "Lorem Ipsum is simply dummy text of the pri", img: marker, bgClass: "bg-accent" },
        { title: "Opening Hours", desc: "Lorem Ipsum is simply dummy text of the pri", img: phone, bgClass: "bg-gradient-to-r from-secondary to-primary" },
    ];
    return (
        <div className="container pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {cardsInfo.map((card, index) => (
                    <Cards key={index} card={card}></Cards>
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;
