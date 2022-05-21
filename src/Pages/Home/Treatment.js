import React from "react";
import treatmentImg from "../../assets/images/treatment.png";
const Treatment = () => {
    return (
        <section className="py-16">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:px-20">
                    <figure>
                        <img src={treatmentImg} alt="" className="rounded-lg" />
                    </figure>
                    <div>
                        <h2 className="text-accent text-5xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                        <p className="py-7">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
                            more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web
                            page
                        </p>
                        <button className="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary text-white border-transparent hover:border-primary">Book Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Treatment;
