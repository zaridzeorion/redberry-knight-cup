import React from 'react'

const PersonalInformation = () => {
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

                <input type="text" placeholder="Name" /> <br />
                <input type="email" placeholder="Email address" /> <br />
                <input type="tel" placeholder="Phone number" /> <br />
                <input type="date" placeholder="Date of birth" />

            </div>
        </div>
    )
}

export default PersonalInformation