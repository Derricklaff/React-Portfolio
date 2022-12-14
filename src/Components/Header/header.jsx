import './header.css';
import ProfilePic from '../../images/Profile.JPG';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';


export default function Header() {
    return (
        <header>
            <div>
                <img src={ProfilePic} alt="Picture of myself" />
                <h2>Derrick Lafforthun</h2>
            </div>
            <nav>
                <a className='header-anchor' rel="noreferrer" href="https://github.com/Derricklaff?tab=repositories" target="_blank"><AiFillGithub /></a>
                <a className='header-anchor' rel="noreferrer" href="https://www.linkedin.com/in/derrick-lafforthun-b2321153/" target="_blank"><AiFillLinkedin /></a>
            </nav>
        </header>
    )
}