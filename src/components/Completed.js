import React, { useEffect } from 'react'

import KnightLogo from '../image/KnightLogo.png'
import OnboardingLogo from '../image/Onboarding-Completed.png'

import { useDispatch, useSelector } from 'react-redux'

import { useFetch } from 'use-http'

import {
    setName,
    setEmail,
    setPhone,
    setBirthDate,
    setLevelOfKnowledge,
    setCharacter,
    setChampionshipParticipation
} from "../store/slices/applicantSlice";


const Completed = () => {
    const dispatch = useDispatch();
    const applicant = useSelector((state) => state.applicant);

    const base_url = "https://chess-tournament-api.devtest.ge/api";
    const { post, response, loading, error } = useFetch(base_url);


    const postData = async () => {
        console.log(applicant)
        const data = await post("/register", applicant);
        if (response.ok) console.log('Posted!');
    };

    useEffect(() => {
        postData()
    }, [])

    // Reset Store
    useEffect(() => {
        dispatch(setName(''))
        dispatch(setEmail(''))
        dispatch(setPhone(''))
        dispatch(setBirthDate(''))
        dispatch(setLevelOfKnowledge('Level of knowledge'))
        dispatch(setCharacter('Choose your character'))
        dispatch(setChampionshipParticipation(null))
    }, [])


    return (
        <div className='Wrapper'>
            <div className='LeftSide ChessImageCompleted'>
                <h2 className="LeftHeader">
                    <span className="LeftHeaderContent Nunito">
                        <img className="LeftHeaderLogo" src={KnightLogo} alt="Knight" />Redberry Knight Cup
                    </span>
                </h2>
            </div>

            <div className='RightSide CompletedRightSide OpenSans'>
                <img alt="Rocket" src={OnboardingLogo} />
            </div>
        </div>
    )
}

export default Completed