import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date }) => {
    return (
        <div className="container">
            <h4 className="text-secondary font-bold text-center">Available Appointment on {format(date, "PP")}</h4>
            <h4 className="text-center text-accent-content">Please select a service</h4>
        </div>
    );
};

export default AvailableAppointment;
