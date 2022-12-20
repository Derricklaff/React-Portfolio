import './AboutMe.css'
import ProfilePic from '../../images/Profile.JPG'

export default function AboutMe() {
    return (
        <div id="about-me-wrapper">
            <img src={ProfilePic} alt="Picture of myself" />
            <section id="about-me">
                <h3>About Me</h3>
                <p>Hi there! My name is Derrick. I am a full-stack web developer from Phoenix Arizona. A few things about myself: I am driven, opportunistic, and always motivated to learn. I have recently graduated from the University of Arizona full-stack MERN certificate program! Thank you for visiting my page and I hope to hear from you soon!</p>
            </section>
        </div>
    )
}