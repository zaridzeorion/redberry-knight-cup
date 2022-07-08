import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>

            <div>
                <h2><img alt="Knight" />Redberry Knight Cup</h2>

                <br />

                <img alt="Chess" />
            </div>


            <div>
                <h1>CHESS SAYS <span>A LOT ABOUT</span> <br /> WHO WE ARE</h1>

                <br />

                <Link to="personal-information">
                    <button>Get Started <img alt="Right Arrow" /></button>
                </Link>
            </div>

        </div>
    );
};

export default MainPage;