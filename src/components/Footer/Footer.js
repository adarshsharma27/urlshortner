import React from "react";

const Footer = () => {
    return (
        <>
            <section className=" footer-section container-fluid">
                <div className="row  py-4">
                    <div className="col-lg-2 col-md-9 col-sm-12 d-flex justify-content-center align-items-center">
                        <img src="images/logofot.svg" alt="logo" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-9 col-sm-12">
                        <ul>
                            <li className="nav-item">Features</li>
                            <li className="nav-item">Link Shortening</li>
                            <li className="nav-item">Branded Links</li>
                            <li className="nav-item">Analytics</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-9 col-sm-12 ">
                        <ul>
                            <li className="nav-item">Resources</li>
                            <li className="nav-item">Blog</li>
                            <li className="nav-item">Developers</li>
                            <li className="nav-item">Support</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-9 col-sm-12 ">
                        <ul>
                            <li className="nav-item">Company</li>
                            <li className="nav-item">About</li>
                            <li className="nav-item">Our Team</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-9 col-sm-12 ">
                        <ul className="socail-media">
                            <li className="nav-item"> Careers</li>
                            <li className="nav-item">Contact</li>
                            <li className="nav-item">Licenses</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-9 col-sm-12 ">
                        <ul className="socail-media">
                            <li className="nav-item">Safety</li>
                            <li className="nav-item">Ensures</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
