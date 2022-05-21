import React from "react";
import Cards from "./Cards";
import people1 from "../../assets/images/people1.png";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
    const cardsInfo = [
        {
            title: "Winson Harry",
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location: "California",
        },
        {
            title: "Winson Harry",
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location: "California",
        },
        {
            title: "Winson Harry",
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location: "California",
        },
    ];
    return (
        <div className="pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {cardsInfo.map((card, index) => (
                    <ReviewCard key={index} card={card}></ReviewCard>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
