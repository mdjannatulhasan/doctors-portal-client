import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="container">
            <h4 className="text-secondary font-bold text-center">Available Appointment on {format(date, "PP")}</h4>
            <h4 className="text-center text-accent-content">Please select a service</h4>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-8">
                {services.map((service) => (
                    <Service key={`id_${service._id}`} service={service} setTreatment={setTreatment}></Service>
                ))}
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} treatment={treatment} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;
