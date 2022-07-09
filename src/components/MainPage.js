import React from "react";
import { Link } from "react-router-dom";
import KnightLogo from '../image/KnightLogo.png'
import Styles from './MainPage.module.css'

import RigthArrow from '../image/RightArrow.png'
const MainPage = () => {
    return (
        <div className="Wrapper">
            <div className="ChessImageMain LeftSide">

                <h2 className="LeftHeader">
                    <span className="LeftHeaderContent Nunito">
                        <img src={KnightLogo} alt="Knight" />Redberry Knight Cup
                    </span>
                </h2>
            </div>


            <div className={`Nunito ${Styles.RightSide} RightSide`}>
                <h1 className={Styles.Title}>CHESS SAYS <span className={Styles.SmallText}>A LOT ABOUT</span> <br /> WHO WE ARE</h1>

                <Link to="personal-information">
                    <button className={`${Styles.Button} OpenSans`}>
                        <span className={Styles.GetStarted}>Get Started</span>
                        <img src={RigthArrow} alt="Right Arrow" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MainPage;