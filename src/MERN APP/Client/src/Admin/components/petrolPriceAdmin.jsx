import React from 'react';
import './adminComp.css'


function petrolPriceAdmin() {
    return (
        <div id="petrol-prices">
            <div className="container">
                <div id="petrol-prices">
                    <h1 className="PetrolHead">Petrol Prices in Pakistan</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-4 px-sm-3 px-1 border-bottom border-dark py-2">
                                <h3 className="text-left">FUEL TYPES</h3>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1 border-bottom border-dark py-2">
                                <h3 className="d-flex justify-content-center">
                                    OLD <span className="d-none d-sm-block ml-2">PRICE</span>
                                </h3>
                                <small>w.e.f 15-05-2023</small>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1 border-bottom border-white py-2 myBG">
                                <h3>NEW</h3>
                                <small>w.e.f 01-06-2023</small>
                            </div>
                            <div className="col-sm-3 d-none d-sm-block border-bottom border-dark py-2">
                                <h3>DIFFERENCE</h3>
                            </div>
                        </div>
                        <div className="row border-bottom border-dark">
                            <div className="col-sm-3 col-4 px-sm-3 px-1">
                                <p className="text-left">MS (Petrol)</p>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1">
                                <p>262</p>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1 myBG border-bottom border-white">
                                <p>253</p>
                            </div>
                            <div className="col-sm-3 d-none d-sm-block">
                                <p>
                                    -9{" "}
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="row border-bottom border-dark">
                            <div className="col-sm-3 col-4 px-sm-3 px-1">
                                <p className="text-left">High Speed Diesel (HSD)</p>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1">
                                <p>260.5</p>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1 myBG border-bottom border-white">
                                <p>253.5</p>
                            </div>
                            <div className="col-sm-3 d-none d-sm-block">
                                <p>
                                    -7{" "}
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="row border-bottom border-dark">
                            <div className="col-sm-3 col-4 px-sm-3 px-1">
                                <p className="text-left">Kerosene (SKO)</p>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1">
                                <p>164.07</p>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1 myBG border-bottom border-white">
                                <p>164.07</p>
                            </div>
                            <div className="col-sm-3 d-none d-sm-block">
                                <p>
                                    0{" "}
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="row border-bottom border-dark">
                            <div className="col-sm-3 col-4 px-sm-3 px-1">
                                <p className="text-left">Light Diesel Oil</p>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1">
                                <p>147.68</p>
                            </div>
                            <div className="col-sm-3 col-4 px-sm-3 px-1 myBG border-bottom border-white">
                                <p>147.68</p>
                            </div>
                            <div className="col-sm-3 d-none d-sm-block">
                                <p>
                                    0{" "}
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default petrolPriceAdmin;