import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { useFetch } from 'use-http'

const Experience = () => {
    const [players, setPlayers] = useState([])

    const url = 'https://chess-tournament-api.devtest.ge/api/grandmasters'
    const { get, response } = useFetch(url)

    useEffect(() => { loadPlayers() }, [])

    const loadPlayers = async () => {
        const players = await get('/')
        if (response.ok) setPlayers(players)
    }

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


                <label for="knowledge">level of knowledge</label>
                <br />
                <select name="knowledge" id="knowledge">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="professional">Professional</option>
                </select>
                <br />

                <label for="character">Choose your character</label>
                <br />
                <select name="character" id="character">
                    {players && players.map((player, id) => (
                        <option key={id}>{player.name}</option>
                    ))}
                </select>
                <br />

                <p>Have you participated in the Redberry Championship?</p>
                <input type="radio" value="yes" />
                <label>Yes</label>

                <input type="radio" value="no" />
                <label>No</label><br />

                <Navigation />
            </div>
        </div>
    )
}

export default Experience