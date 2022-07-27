import React from "react";

const Header = ({ heading, description,cImage }) => {
    return (
        <>
            <section>
                <div className="container h-100 w-100 mx-auto" id="home">
                    <div className="row h-100 m-0 p-0 my-2 w-100  align-items-center">
                        <div className="col-md-6 order-md-1 order-2 text-md-left  py-4">
                            <h4 className="font-weight-bold">{heading}</h4>
                            <div className="description">
                                <p className="py-2">{description}</p>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1 order-1 text-center  py-4" id="custom-bg">
                            <img src={cImage} className="img-fluid py-4" alt="images" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
