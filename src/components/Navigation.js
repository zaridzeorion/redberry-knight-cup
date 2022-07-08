import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

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
    console.log(pathnameWithoutSlash === "experience")
    return (
        <ul>
            {/* Back */}
            <li><Link to={`${prev}`}>Back</Link></li>

            {/* Next || Done */}
            {
                pathnameWithoutSlash === "experience" ?
                    <li>{isRouteOpen[nextWithoutSlash] ? <Link to={`${next}`}>Done</Link> : "Done"}</li>
                    :
                    <li>{isRouteOpen[nextWithoutSlash] ? <Link to={`${next}`}>Next</Link> : "Next"}</li>
            }
        </ul>
    );
};

export default Navigation;