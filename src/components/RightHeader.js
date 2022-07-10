import React from 'react'
import styles from './RightHeader.module.css'

const RightHeader = () => {
    return (
        <div className={`${styles.RightHeaderWrapper} OpenSans`}>
            <h4 className="RightHeader">
                <span className="RightHeaderContent Nunito">
                    Start Creating Your Account
                </span>
            </h4>

            <div className={styles.Wrapper}>
                <div className={styles.Item1}>
                    <div className={styles.One}>1</div>
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