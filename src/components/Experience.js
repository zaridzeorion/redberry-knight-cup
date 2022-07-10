import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { useFetch } from 'use-http'
import { useDispatch, useSelector } from 'react-redux'

import { setLevelOfKnowledge, setCharacter, setChampionshipParticipation } from '../store/slices/applicantSlice'
import { openOnboardingRoute, closeOnboardingRoute } from '../store/slices/routesOpenClose'

import KnightLogo from '../image/KnightLogo.png'

import Styles from './Experience.module.css'
import RightHeader from './RightHeader'

const Experience = () => {
    const dispatch = useDispatch();
    const applicant = useSelector((state) => state.applicant);

    const [isCharacterDropdownOpen, setIsCharacterDropdownOpen] = useState(false)
    const [currentCharacter, setCurrentCharacter] = useState(applicant.character)


    const [isKnowledgeDropdownOpen, setIsKnowledgeDropdownOpen] = useState(false)
    const [knowledgeLevel, setKnowledgeLevel] = useState(applicant.levelOfKnowledge)

    const [players, setPlayers] = useState([])

    const url = 'https://chess-tournament-api.devtest.ge/api/grandmasters'
    const { get, response } = useFetch(url)

    useEffect(() => { loadPlayers() }, [])

    const loadPlayers = async () => {
        const players = await get('/')
        if (response.ok) setPlayers(players)
    }


    const handleParticipationChange = (e) => {
        let checked = e.target.value

        if (checked === "yes") dispatch(setChampionshipParticipation(true))
        if (checked === "no") dispatch(setChampionshipParticipation(false))
    }

    const handleKnowledgeChange = (e) => {
        let levelOfKnowledge = e.target.value
        dispatch(setLevelOfKnowledge(levelOfKnowledge))
    }

    const handleCharacterChange = (player, id) => {
        dispatch(setCharacter(player.name))
        setCurrentCharacter(player.name)
        setIsCharacterDropdownOpen(false)
    }

    useEffect(() => {
        applicant.levelOfKnowledge &&
            applicant.character &&
            applicant.championshipParticipation !== null ?
            dispatch(openOnboardingRoute()) :
            dispatch(closeOnboardingRoute())

    }, [applicant])

    return (
        <div className="Wrapper">
            <div className='LeftSide ChessImageExperience'>
                <h2 className="LeftHeader">
                    <span className="LeftHeaderContent Nunito">
                        <img className="LeftHeaderLogo" src={KnightLogo} alt="Knight" />Redberry Knight Cup
                    </span>
                </h2>

                <br />

                <h3 className="LeftSideQuote Nunito">
                    "MANY HAVE BECOME CHESS MASTERS, <br />
                    NO ONE HAS BECOME THE MASTER OF CHESS."
                    <br /> <br />
                    <span className={`LeftSideQuoteAuthor ${Styles.Author}`}>- SIEGBERT TARRASCH</span>
                </h3>
            </div>


            <div className='RightSide RightSideMargin OpenSans'>
                <RightHeader />

                <h2 className='RightSideTitle'>Chess experience</h2>
                <h6 className='RightSideAbout'>This Is Basic Information Fields</h6>

                <br />

                <div className="DropdownSelectWrapper">


                    <select className="Dropdown" onChange={(e) => handleKnowledgeChange(e)} name="knowledge" id="knowledge">
                        <option disabled selected value>Level of knowledge</option>
                        <option value="beginner">Beginner</option>
                        <option value="normal">Intermediate</option>
                        <option value="professional">Professional</option>
                    </select>

                    <br />

                    <div className="selectField">
                        <p onClick={() => setIsCharacterDropdownOpen(!isCharacterDropdownOpen)} className='ChooseCharacter'>{currentCharacter}</p>

                        <ul style={isCharacterDropdownOpen ? { display: 'flex' } : {}} className="players">
                            <p className='TotalCount'>(Total 4)</p>
                            {players && players.map((player, id) => (
                                <li onClick={() => handleCharacterChange(player, id)} className='player' key={id}>
                                    <p className='PlayerName'>{player.name}</p>
                                    <img src={`https://chess-tournament-api.devtest.ge${player.image}`} />
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <br />

                <div className='ParticipationWrapper'>
                    <p className="ParticipationQuestion">Have you participated in the Redberry Championship?</p>
                    <input checked={applicant.championshipParticipation} onClick={(e) => handleParticipationChange(e)} type="radio" value="yes" />
                    <label style={{ marginLeft: '3.5px' }}>Yes</label>

                    <input style={{ marginLeft: '10px' }} checked={applicant.championshipParticipation === false} onClick={(e) => handleParticipationChange(e)} type="radio" value="no" />
                    <label style={{ marginLeft: '3.5px' }}>No</label><br />
                </div>

                <Navigation />
            </div>
        </div >
    )
}

export default Experience