import React from "react";
import quote from "../../assets/icons/quote.svg";
import Reviews from "./Reviews";
const Testimonials = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between">
                    <div>
                        <h4 className="text-secondary font-bold pb-4">Testimonials</h4>
                        <h2 className="text-4xl font-semibold">What Our Patients Says</h2>
                    </div>
                    <figure>
                        <img src={quote} className="max-h-28" alt="" />
                    </figure>
                </div>
                <div>
                    <Reviews></Reviews>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
