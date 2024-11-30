import '../styles/Backend.css';
import { FaPython, FaNode} from 'react-icons/fa';
import { TbSql} from 'react-icons/tb';
import { SiMongodb, SiCplusplus} from 'react-icons/si';

// Backend development skills section

export default function Backend() {
    return(
        <div id="Backend" className="rounded-3 border border-5 custom-border-bg p-4">
            <section>
                <h3 className="title">Backend Development Skills</h3>
                <ul className="list-unstyled">
                    <li className="mb-2"><FaPython className="icon" /> Python</li>
                    <li className="mb-2"><TbSql className="icon" /> SQL</li>
                    <li className="mb-2"><SiMongodb className="icon" /> MongoDB</li>
                    <li className="mb-2"><SiCplusplus className="icon" /> C++</li>
                    <li className="mb-2"><FaNode className="icon" /> Node.js</li>
                </ul>
            </section>
        </div>
    );
}
