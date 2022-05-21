import React from "react";

const ServiceCard = ({ card }) => {
    const { title, img, desc } = card;
    return (
        <div class="card w-96 bg-base-100 custom-shadow mx-auto">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
