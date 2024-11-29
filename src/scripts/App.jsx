import '../styles/App.css';
import About from './About';
import Links from './Links';
import Frontend from './Frontend';
import Backend from './Backend';
import Technologies from './Technologies';
import GitHubProjects from './GitHubProjects';
import Experience from './Experience';

export default function App() {
    return (
        <div className="App">
            <div className='profile-wrapper'>
                <img id="profpic" src="assets/carlos.jpg" alt="Profile Picture" loading='eager'/>
            </div>
            <h1>Carlos Arroyo</h1>
            <h2>Full-Stack Developer & AI Engineer</h2>
            <About />
            <Frontend />
            <Backend />
            <Technologies />
            <GitHubProjects />
            <Links />
        </div>
    )
};