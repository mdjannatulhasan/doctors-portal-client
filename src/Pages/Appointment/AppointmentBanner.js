import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div class="hero py-16">
            <div className="container">
                <div class="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={chair} className="max-w-xl" alt="" />
                    <div>
                        <DayPicker mode="single" selected={date} onSelect={setDate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
