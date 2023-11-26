import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const handleSubmit = (event) => {
        event.preventDefault();
        setTreatment(null);
    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-secondary pb-7">Booking for: {name}</h3>

                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>

                    <form onSubmit={handleSubmit} className="text-center space-y-3">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full font-bold" disabled value={format(date, "PP")} />
                        <select defaultValue={"Please choose your timeslot"} className="select select-bordered w-full">
                            <option disabled value="Please choose your timeslot" className="text-accent-content">
                                Please choose your timeslot
                            </option>
                            {slots.map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input type="text" placeholder="Full Name" name="name" className="input input-bordered w-full font-bold" />
                        <input type="email" placeholder="Your Email" name="email" className="input input-bordered w-full font-bold" />
                        <input type="text" placeholder="Phone number" name="phone" className="input input-bordered w-full font-bold" />
                        <input
                            type="submit"
                            value="Book now"
                            className="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary text-white border-transparent hover:border-primary w-26"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
