import React from 'react'

function Backend() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="ri-check-line"></i>
                        <div>
                            <h3>Node Js</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="fi fi-rr-shield-trust"></i>
                        <div>
                            <h3>MySQL</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="fi fi-rr-shield-trust"></i>
                        <div>
                            <h3>Python</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Backend