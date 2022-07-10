import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'

import { useSelector, useDispatch } from "react-redux";

import {
    setName,
    setEmail,
    setPhone,
    setBirthDate,
} from "../store/slices/applicantSlice";

import { openExperienceRoute, closeExperienceRoute } from "../store/slices/routesOpenClose";

import KnightLogo from '../image/KnightLogo.png'
import RightHeader from './RightHeader';

import styles from './PersonalInformation.module.css'

import Correct from '../image/Correct.png'
import Error from './Error';

const PersonalInformation = () => {
    const dispatch = useDispatch();
    const applicant = useSelector((state) => state.applicant);

    const [popError, setPopError] = useState(false)

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
        const re = /(?:@redberry.ge)/

        return re.test(email);
    };

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [birthDateError, setBirthDateError] = useState('')

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
            return true;
        }

        // error handling
        if (name.length < 3) setNameError('Please enter more than 2 character')
        else setNameError(null)

        if (validateEmail(email) === false) setEmailError('Please enter valid (@redberry.ge) email address')
        else setEmailError(null)

        if (phone.length !== 9) setPhoneError('Please enter valid phone number')
        else setPhoneError(null)

        if (!birthDate) setBirthDateError('Please enter your birth date')
        else setBirthDateError(null)

    };

    useEffect(() => {
        validatePage(applicant, dispatch);
    }, [applicant]);

    let today = new Date().toLocaleDateString('en-ca')

    return (
        <div className='Wrapper'>
            <div className='LeftSide ChessImagePersonal'>
                <h2 className="LeftHeader">
                    <span className="LeftHeaderContent Nunito">
                        <img className="LeftHeaderLogo" src={KnightLogo} alt="Knight" />Redberry Knight Cup
                    </span>
                </h2>

                <br />

                <h3 className="LeftSideQuote Nunito">
                    "WHEN YOU SEE A GOOD MOVE, <br />
                    LOOK FOR A BETTER ONE."
                    <br /> <br />
                    <span className="LeftSideQuoteAuthor">- EMANUEL LASKER</span>
                </h3>
            </div>

            <div className='RightSide RightSideMargin OpenSans'>
                <Error
                    popError={popError}
                    nameError={nameError}
                    emailError={emailError}
                    phoneError={phoneError}
                    birthDateError={birthDateError}
                />

                <RightHeader />

                <h2 className="RightSideTitle">Personal Information</h2>
                <h6 className="RightSideAbout">This Is Basic Information Fields</h6>

                <div className={`OpenSans ${styles.InputWrapper}`}>


                    <div>
                        <input
                            style={applicant.name ? { background: 'rgb(246, 246, 246)' } : {}}
                            className={styles.Input}
                            onChange={(e) => handleName(e, dispatch)}
                            value={applicant.name}
                            type="text"
                            placeholder="Name"
                        />
                        {!nameError ? <img className='CorrectInput' src={Correct} /> : null}
                    </div>
                    <br />

                    <div>
                        <input
                            style={applicant.email ? { background: 'rgb(246, 246, 246)' } : {}}
                            className={styles.Input}
                            onChange={(e) => handleEmail(e, dispatch)}
                            value={applicant.email}
                            type="email"
                            placeholder="Email address"
                        />
                        {!emailError ? <img className='CorrectInput' src={Correct} /> : null}
                    </div>

                    <br />

                    <div>
                        <input
                            style={applicant.phone ? { background: 'rgb(246, 246, 246)' } : {}}
                            className={styles.Input}
                            onChange={(e) => handlePhone(e, dispatch)}
                            value={applicant.phone}
                            type="number"
                            placeholder="Phone number"
                        />
                        {!phoneError ? <img className='CorrectInput' src={Correct} /> : null}
                    </div>

                    <br />

                    <div>
                        <input
                            style={applicant.birthDate ? { background: 'rgb(246, 246, 246)' } : {}}
                            className={`${styles.Input} ${styles.Date}`}
                            onChange={(e) => handleBirthDate(e, dispatch)}
                            value={applicant.birthDate}
                            type="date"
                            placeholder="Date of birth" min="1900-01-01" max={today}
                        />

                        {!birthDateError ? <img className='CorrectInput' src={Correct} /> : null}
                    </div>

                </div>

                <Navigation setPopError={setPopError} />
            </div>
        </div>
    )
}

export default PersonalInformation