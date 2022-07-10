import React from 'react'

import ErrorImage from '../image/Error.png'

const Error = ({ popError, nameError, emailError, phoneError, birthDateError }) => {

    return (
        <ul style={popError ? { display: 'flex' } : { display: 'none' }} className='PopUpError OpenSans'>
            {
                popError ?
                    nameError && <li><img src={ErrorImage} />Name Error! <br /> {nameError}</li> ||
                    emailError && <li><img src={ErrorImage} />Invalid email! <br /> {emailError}</li> ||
                    phoneError && <li><img src={ErrorImage} />Phone Error! <br /> {phoneError}</li> ||
                    birthDateError && <li><img src={ErrorImage} />Birth Date Error! {birthDateError}</li> :
                    null
            }
        </ul>
    )
}

export default Error