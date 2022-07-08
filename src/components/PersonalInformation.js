import React, { useEffect } from 'react'
import Navigation from './Navigation'

import { useSelector, useDispatch } from "react-redux";

import {
    setName,
    setEmail,
    setPhone,
    setBirthDate,
} from "../store/slices/applicantSlice";

import { openExperienceRoute, closeExperienceRoute } from "../store/slices/routesOpenClose";

const PersonalInformation = () => {
    const dispatch = useDispatch();
    const applicant = useSelector((state) => state.applicant);

    const handleName = (e, dispatch) => {
        let name = e.target.value;
        dispatch(setName(name));
    };

    const handleEmail = (e, dispatch) => {
        let email = e.target.value;
        dispatch(setEmail(email));
    };

    const handlePhone = (e, dispatch) => {
        let phone = e.target.value;
        dispatch(setPhone(phone));
    };

    const handleBirthDate = (e, dispatch) => {
        let birthDate = e.target.value;
        dispatch(setBirthDate(birthDate));
    };

    const validateEmail = (email) => {
        const re = /(?:@redberry.com)/

        return re.test(email);
    };

    const validatePage = (applicant, dispatch) => {
        const { name, email, phone, birthDate } = applicant;

        dispatch(closeExperienceRoute());

        if (
            name.length > 2 &&
            validateEmail(email) &&
            phone.length === 9 &&
            birthDate
        ) {
            dispatch(openExperienceRoute());
        }
    };

    useEffect(() => {
        validatePage(applicant, dispatch);
    }, [applicant]);

    return (
        <div>
            <div>
                <h2><img alt="Knight" />Redberry Knight Cup</h2>

                <br />

                <h3>
                    "WHEN YOU SEE A GOOD MOVE, <br />
                    LOOK FOR A BETTER ONE."
                    <br />
                    EMANUEL LASKER
                </h3>

                <img alt="Chess" />
            </div>


            <div>

                <h4>Start Creating Your Account</h4>
                <hr />

                <h2>Personal Information</h2>
                <h6>This Is Basic Information Fields</h6>

                <input onChange={(e) => handleName(e, dispatch)} value={applicant.name} type="text" placeholder="Name" /> <br />
                <input onChange={(e) => handleEmail(e, dispatch)} value={applicant.email} type="email" placeholder="Email address" /> <br />
                <input onChange={(e) => handlePhone(e, dispatch)} value={applicant.phone} type="number" placeholder="Phone number" /> <br />
                <input onChange={(e) => handleBirthDate(e, dispatch)} value={applicant.birthDate} type="date" placeholder="Date of birth" />

                <Navigation />
            </div>
        </div>
    )
}

export default PersonalInformation