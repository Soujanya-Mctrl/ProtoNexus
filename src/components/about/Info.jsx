import React from 'react'

function Info() {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class="fi fi-ss-medal about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">0 years</span>
            </div>
            <div className="about__box">
            <i class="fi fi-sr-briefcase about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">1 project</span>
            </div>
            <div className="about__box">
            <i class="fi fi-ss-user-headset about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>

    )
}

export default Info