import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/images/footer.png";
const Footer = () => {
    return (
        <footer className="pt-16" style={{ background: `url(${footerBg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between pb-8">
                    <div className="services space-y-2">
                        <h4 className="font-bold text-xl mb-3">Services</h4>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Emergency checkup
                            </Link>
                        </div>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Monthly checkup
                            </Link>
                        </div>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Weekly checkup
                            </Link>
                        </div>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Deep checkup
                            </Link>
                        </div>
                    </div>
                    <div className="services space-y-2">
                        <h4 className="font-bold text-xl mb-3">Services</h4>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Emergency checkup
                            </Link>
                        </div>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Monthly checkup
                            </Link>
                        </div>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Weekly checkup
                            </Link>
                        </div>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Deep checkup
                            </Link>
                        </div>
                    </div>
                    <div className="services space-y-2">
                        <h4 className="font-bold text-xl mb-3">Services</h4>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Emergency checkup
                            </Link>
                        </div>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Monthly checkup
                            </Link>
                        </div>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Weekly checkup
                            </Link>
                        </div>
                        <div>
                            <Link className="text-stone-600" to="/services">
                                Deep checkup
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="copyright text-sm text-center pt-5 pb-4">Copyright 2022 All Rights Reserved</div>
            </div>
        </footer>
    );
};

export default Footer;
