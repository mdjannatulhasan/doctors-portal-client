import React from "react";

const Cards = ({ card }) => {
    const { title, desc, img, bgClass } = card;
    return (
        <div className="">
            <div className={`card text-white  lg:card-side bg-accent shadow-xl ${bgClass}`}>
                <figure className="pl-5">
                    <img src={img} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
