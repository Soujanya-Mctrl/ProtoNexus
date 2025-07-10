import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Designing from "./Designing";
import VideoEditing from "./VideoEditing";

function Skills() {
    return (
        <section className="skills section" id="skills">
            <span className="section__title">Skills</span>
            <span className="section__subtitle">My Technical and Creative Toolkit</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Designing />
                <VideoEditing />
            </div>
        </section>
    )
}

export default Skills