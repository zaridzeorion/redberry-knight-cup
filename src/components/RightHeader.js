import React, { useEffect, useState } from 'react'
import styles from './RightHeader.module.css'

import { useDispatch, useSelector } from 'react-redux'

import CheckedImage from '../image/Checked.png'

const RightHeader = () => {
    const dispatch = useDispatch();
    const applicant = useSelector((state) => state.applicant);
    const routesOpenClose = useSelector((state) => state.routesOpenClose);

    const [active, setActive] = useState(false)

    useEffect(() => {
        if (applicant.name || applicant.email || applicant.phone || applicant.birthDate) setActive(true)
        else setActive(false)
    }, [applicant])

    return (
        <div className={`${styles.RightHeaderWrapper} OpenSans`}>
            <h4 className="RightHeader">
                <span className="RightHeaderContent Nunito">
                    Start Creating Your Account
                </span>
            </h4>

            <div className={styles.Wrapper}>
                <div className={styles.Item1}>
                    {
                        routesOpenClose.experience === true ?
                            <div style={active ? { backgroundColor: '#E9FAF1' } : {}} className={styles.One}>
                                <img src={CheckedImage} alt="Checked" />
                            </div>
                            : <div style={active ? { backgroundColor: '#E9FAF1' } : {}} className={styles.One}>
                                1
                            </div>
                    }
                    <p>Personal information</p>
                </div>

                <div className={styles.Item2}>
                    <div className={styles.Two}>2</div>
                    <p>Chess experience</p>
                </div>
            </div>

        </div>
    )
}

export default RightHeader