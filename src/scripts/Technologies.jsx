import '../styles/Technologies.css';
import { VscAzure} from 'react-icons/vsc';
import { FaDocker,FaGitAlt} from 'react-icons/fa';
import { SiPostman, SiAlteryx, SiScikitlearn, SiSelenium} from 'react-icons/si';

// Technologies and frameworks section

export default function Technologies() {
    return(
        <div id="Backend" className="rounded-3 border border-5 custom-border-bg p-4">
            <section>
                <h3 className="title">Technologies and frameworks</h3>
                <ul className="list-unstyled">
                    <li className="mb-2"><VscAzure className="icon" /> Azure</li>
                    <li className="mb-2"><FaDocker className="icon" /> Docker</li>
                    <li className="mb-2"><FaGitAlt className="icon" /> Git</li>
                    <li className="mb-2"><SiPostman className="icon" /> Postman</li>
                    <li className="mb-2"><SiAlteryx className="icon" /> Alteryx</li>
                    <li className="mb-2"><SiScikitlearn className="icon" /> Scikit-learn</li>
                    <li className="mb-2"><SiSelenium className="icon" /> Selenium</li>
                </ul>
            </section>
        </div>
    );
}
