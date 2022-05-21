import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
    return (
        <div className="hero lg:py-20 py-14">
            <div className="container">
                <div className="hero-content gap-8 grid lg:grid-cols-2 grid-cols-1">
                    <img src={chair} className="w-full rounded-lg shadow-2xl order-1 lg:order-2" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary text-white border-transparent hover:border-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
