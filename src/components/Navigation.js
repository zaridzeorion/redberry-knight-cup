import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from './Navigation.module.css'

import RightArrow from '../image/RightArrow.png'

const Navigation = () => {
    const isRouteOpen = useSelector(state => state.routesOpenClose)

    let { pathname } = useLocation();
    const [prev, setPrev] = useState("/");
    const [next, setNext] = useState("/");

    let nextWithoutSlash = next.replace(/^\//, "")
    let pathnameWithoutSlash = pathname.replace(/^\//, "")

    useEffect(() => {
        pathname === "/personal-information" && setNext(`/experience`);

        if (pathname === "/experience") {
            setNext(`/onboardingCompleted`);
            setPrev(`/personal-information`);
        }
    }, []);

    return (
        <ul className={`${styles.Navigation} OpenSans`}>
            {/* Back */}
            <li className={styles.Back}><Link to={`${prev}`}>Back</Link></li>

            {/* Next || Done */}
            {
                pathnameWithoutSlash === "experience" ?
                    <li className={styles.Next}>
                        {isRouteOpen[nextWithoutSlash] ? <Link to={`${next}`}>Done</Link> : "Done"}
                    </li>
                    :
                    <li className={styles.Next}>
                        <span style={{ marginRight: '10px' }}>{isRouteOpen[nextWithoutSlash] ? <Link to={`${next}`}>Next</Link> : "Next"}</span>
                        <img className={styles.RightArrow} src={RightArrow} alt="Right Arrow" />
                    </li>
            }
        </ul>
    );
};

export default Navigation;