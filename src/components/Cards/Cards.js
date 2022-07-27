import React from "react";
import data from "./data";
const Cards = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <section className="container py-4" id="service">
                    <h2 className=" text-start">Advanced Statistics</h2>
                    <p className=" text-start py-2">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                    <div className="row">
                        {data.map((element) => {
                            return (
                                <div className=" col-lg-4 col-md-6 col-sm-12 ">
                                    <div className="card-service">
                                        <div className="icon">
                                            {" "}
                                            <img className=" inverted" src={element.image} alt={element.heading} />
                                        </div>
                                        <main>
                                            <h2>{element.heading}</h2>
                                            <p>{element.description}</p>
                                        </main>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Cards;
