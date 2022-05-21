import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
const ContactFormSec = () => {
    return (
        <section className="mt-16 py-16" style={{ background: `url(${appointment})` }}>
            <div className="container">
                <div className="justify-center items-center lg:px-20">
                    <div className="text-white max-w-xl mx-auto">
                        <h4 className="text-secondary text-center font-bold pb-1">Contact Us</h4>
                        <h2 className="text-4xl text-center font-semibold pb-8">Make an appointment Today</h2>
                        <form className="flex flex-col space-y-4 items-center">
                            <input type="email" placeholder="Email Address" class="input w-full" />
                            <input type="text" placeholder="Subject" class="input w-full" />
                            <textarea rows="4" placeholder="Your Message" class="textarea w-full"></textarea>
                            <input
                                type="submit"
                                value="Send"
                                className="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary text-white border-transparent hover:border-primary w-24"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSec;
