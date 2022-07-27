import React from "react";

const Menu = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container">
                        <a className="navbar-brand" href="#home">
                            <img src="images/logo.svg" className="inverted" alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="#home" className="nav-link active">
                                        Home
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#home">
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">
                                        Blogs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">
                                        Faqs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Menu;
