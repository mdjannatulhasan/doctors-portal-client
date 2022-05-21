import React from "react";

const ReviewCard = ({ card }) => {
    const { title, desc, img, location } = card;
    return (
        <div className="">
            <div className={`card lg:card-side custom-shadow`}>
                <div className="card-body">
                    <p>{desc}</p>
                    <div className="flex space-x-4 mt-5">
                        <figure>
                            <img src={img} className="w-16 rounded-full border-4 border-secondary" alt="" />
                        </figure>
                        <div>
                            <h5 className="card-title">{title}</h5>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
