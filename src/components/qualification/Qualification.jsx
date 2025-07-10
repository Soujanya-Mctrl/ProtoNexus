import "./qualification.css";

function Qualification() {
  return (
    <>
      <section className="qualification section" id="qualification">
        <span className="section__title">Qualification</span>
        <span className="section__subtitle">Timeline of My Growth</span>

        <div className="qualification__container cotainer">
          <div className="qualification__tabs">
            <div className="qualification__button qualification__active button__flex">
              <i class="fi fi-sr-graduation-cap"></i>
              Education
            </div>
            <div className="qualification__button button__flex">
              <i class="fi fi-sr-briefcase"></i>{" "}
              Experience
            </div>
            <div className="qualification__button button__flex">
              <i class="fi fi-sr-diploma"></i>{" "}
              Certifications
            </div>
          </div>

          <div className="qualification__sections">
            <div className="qualification__content qualification__content-active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Bachelor's Degree</h3>
                  <span className="qualification__subtitle">Computer Science & Engineering</span>
                  <div className="qualification__calendar">
                    <i class="fi fi-sr-calendar"></i>
                    2024 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <span className="qualification__school">Kalyani Government Engineering College</span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title"> Higher Secondary Education</h3>
                  <span className="qualification__subtitle">Science</span>
                  <div className="qualification__calendar">
                    <i class="fi fi-sr-calendar"></i>
                    2021 - 2023
                  </div>
                </div>
                <div>
                  <span className="qualification__school">Nava Nalanda High School</span>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Primary & Secondary Education</h3>
                  <span className="qualification__subtitle">General Education</span>
                  <div className="qualification__calendar">
                    <i class="fi fi-sr-calendar"></i>
                    2010 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <span className="qualification__school">St. Lawrence High School</span>
                </div>
              </div>
            </div>


            {/* Experience Section */}
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">No Experience</h3>
                  <span className="qualification__subtitle">---</span>
                  <div className="qualification__calendar">
                    <i class="fi fi-sr-calendar"></i>
                    ---
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <span className="qualification__school">---</span>
                </div>
              </div>
              {/*<div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title"> Higher Secondary Education</h3>
                    <span className="qualification__subtitle">Science</span>
                    <div className="qualification__calendar">
                      <i class="fi fi-sr-calendar"></i>
                      2021 - 2023
                    </div>
                  </div>
                  <div>
                    <span className="qualification__school">Nava Nalanda High School</span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Primary & Secondary Education</h3>
                    <span className="qualification__subtitle">General Education</span>
                    <div className="qualification__calendar">
                      <i class="fi fi-sr-calendar"></i>
                      2010 - 2021
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <span className="qualification__school">St. Lawrence High School</span>
                  </div>
                </div>*/}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Qualification