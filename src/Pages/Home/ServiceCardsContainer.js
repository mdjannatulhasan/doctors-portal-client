import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const ServiceCardsContainer = () => {
    const cardsInfo = [
        { title: "Fluoride Treatment", desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: fluoride },
        { title: "Cavity Filling", desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: cavity },
        { title: "Teeth Whitening", desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: whitening },
    ];
    return (
        <section className="py-10">
            <div className="container pb-6">
                <h4 className="text-uppercase text-secondary text-center font-bold">Our Services</h4>
                <h2 className="text-4xl text-center pb-10 pt-2">Services We Provide</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {cardsInfo.map((card, index) => (
                        <ServiceCard key={index} card={card}></ServiceCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCardsContainer;
