import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
const AppointmentSec = () => {
    return (
        <section className="my-16" style={{ background: `url(${appointment})` }}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:px-20">
                    <figure className="hidden lg:block -mt-28">
                        <img src={doctor} alt="" className="rounded-lg" />
                    </figure>
                    <div className="text-white">
                        <h4 className="text-secondary font-bold pb-4">Appointment</h4>
                        <h2 className="text-4xl font-semibold">Make an appointment Today</h2>
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

export default AppointmentSec;
