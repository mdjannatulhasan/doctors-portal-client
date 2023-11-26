import React from "react";

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="p-8 custom-shadow space-y-3 text-center rounded-lg">
            <h4 className="text-secondary">{name}</h4>
            <p className="pb-4">{slots[0]}</p>
            <label htmlFor="booking-modal" onClick={() => setTreatment(service)} className="modal-button btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-0">
                Book Appointment
            </label>
        </div>
    );
};

export default Service;
