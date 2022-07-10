import React from 'react'

import KnightLogo from '../image/KnightLogo.png'
import OnboardingLogo from '../image/Onboarding-Completed.png'

const Completed = () => {

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