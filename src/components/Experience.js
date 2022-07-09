import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { useFetch } from 'use-http'
import { useDispatch, useSelector } from 'react-redux'

import { setLevelOfKnowledge, setCharacter, setChampionshipParticipation } from '../store/slices/applicantSlice'
import { openOnboardingRoute, closeOnboardingRoute } from '../store/slices/routesOpenClose'

const Experience = () => {
    const [players, setPlayers] = useState([])

    const url = 'https://chess-tournament-api.devtest.ge/api/grandmasters'
    const { get, response } = useFetch(url)

    useEffect(() => { loadPlayers() }, [])

    const loadPlayers = async () => {
        const players = await get('/')
        if (response.ok) setPlayers(players)
    }

    const dispatch = useDispatch();
    const applicant = useSelector((state) => state.applicant);

    const handleParticipationChange = (e) => {
        let checked = e.target.value

        if (checked === "yes") dispatch(setChampionshipParticipation(true))
        if (checked === "no") dispatch(setChampionshipParticipation(false))
    }

    const handleKnowledgeChange = (e) => {
        let levelOfKnowledge = e.target.value
        dispatch(setLevelOfKnowledge(levelOfKnowledge))
    }

    const handleCharacterChange = (e) => {
        let character = e.target.value
        dispatch(setCharacter(character))
    }

    useEffect(() => {
        applicant.levelOfKnowledge &&
            applicant.character &&
            applicant.championshipParticipation !== null ?
            dispatch(openOnboardingRoute()) :
            dispatch(closeOnboardingRoute())

    }, [applicant])

    return (
        <div>
            <div>
                <h2><img alt="Knight" />Redberry Knight Cup</h2>

                <br />

                <h3>
                    "MANY HAVE BECOME CHESS MASTERS, <br />
                    NO ONE HAS BECOME THE MASTER OF CHESS."
                    <br />
                    - SIEGBERT TARRASCH
                </h3>

                <img alt="Chess" />
            </div>


            <div>
                <h4>Start Creating Your Account</h4>
                <hr />

                <h2>Chess experience</h2>
                <h6>This Is Basic Information Fields</h6>

                <br />
                <select onChange={(e) => handleKnowledgeChange(e)} name="knowledge" id="knowledge">
                    <option disabled selected value>Level of knowledge</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="professional">Professional</option>
                </select>
                <br />

                <select onChange={(e) => handleCharacterChange(e)} name="character" id="character">
                    <option disabled selected value>Choose your character</option>
                    {players && players.map((player, id) => (
                        <option key={id}>{player.name}</option>
                    ))}
                </select>
                <br />

                <p>Have you participated in the Redberry Championship?</p>
                <input checked={applicant.championshipParticipation} onClick={(e) => handleParticipationChange(e)} type="radio" value="yes" />
                <label>Yes</label>

                <input checked={applicant.championshipParticipation === false} onClick={(e) => handleParticipationChange(e)} type="radio" value="no" />
                <label>No</label><br />

                <Navigation />
            </div>
        </div>
    )
}

export default Experience