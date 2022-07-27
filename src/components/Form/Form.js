import React, { useEffect, useState } from "react";

const Form = () => {
    const getLocalStorage = () => {
        let urls = localStorage.getItem("urls");
        if (urls) {
            return JSON.parse(localStorage.getItem("urls"));
        } else {
            return [];
        }
    };
    const [input, setInput] = useState("");
    const [url, setUrl] = useState(getLocalStorage());
    const [copyText, setCopyText] = useState("Copy");

    const handelSubmit = () => {
        if (!input) {
            alert("Please Enter Url");
        } else {
            const shortner = async () => {
                const ApiUrl = `https://api.shrtco.de/v2/shorten?url=${input}`;
                const response = await fetch(ApiUrl);
                const data = await response.json();
                setUrl(data.result.short_link);
                setInput("");
            };
            shortner();
        }
    };

    const ClipBoardCopy = () => {
        navigator.clipboard.writeText(url);
        setCopyText("Copied");
    };
    useEffect(() => {
        localStorage.setItem("urls", JSON.stringify(url));
    }, [url]);
    return (
        <>
            <div className="container-fluid bg-light py-4 my-4">
                <section className="container">
                    <div className="row" id="first-second">
                        <div className="col-lg-12 col-md-12 col-sm-12 py-4">
                            <div className="form-inline d-flex  p-4">
                                <input
                                    type="text"
                                    className="form-control w-80 mr-auto custom-border"
                                    placeholder="Shorten a link  here"
                                    value={input}
                                    onChange={(e) => {
                                        setInput(e.target.value);
                                    }}
                                />
                                <button className="btn btn-custom p-4" onClick={() => handelSubmit()}>
                                    Shorten It!
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {url.length !== 0 ? (
                    <div className="container py-2 bg-white my-2 d-flex justify-content-between align-items-center shortedUrl">
                        <div className="url-color">{url}</div>
                        <button className="btn btn-custom" onClick={() => ClipBoardCopy(url)}>
                            {copyText}
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default Form;
