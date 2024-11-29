import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Links.css'; // Asegúrate de importar el archivo CSS

export default function Links() {
    const githubRef = useRef();
    const linkedinRef = useRef();
    const mailRef = useRef();


    const changeButtonColor = (buttonRef) => {
        buttonRef.current.style.backgroundColor = 'gray';
    }
    const changeButtonColorBack = (buttonRef) => {
        buttonRef.current.style.backgroundColor = '#75bcff';
    }

    return (
        <div id="links">
            <h2>Get in touch</h2>
            <div className="divider">
                <a href="https://github.com/carroyo03" target="_blank" rel="noreferrer">
                    <button 
                    ref={githubRef}
                    onMouseOver={() => changeButtonColor(githubRef)}
                    onMouseOut={() => changeButtonColorBack(githubRef)}
                    aria-label="GitHub" 
                    id="GitHub" 
                    className="btn btn-primary rounded-2 border border-2">
                        <Github />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/carlosarroyolorenzo" target="_blank" rel="noreferrer">
                    <button 
                    ref={linkedinRef}
                    onMouseOver={() => changeButtonColor(linkedinRef)}
                    onMouseOut={() => changeButtonColorBack(linkedinRef)}
                    aria-label="LinkedIn" 
                    id="LinkedIn" 
                    className="btn btn-primary rounded-2 border border-2">
                        <Linkedin />
                    </button>
                </a>
                <a href="mailto:cgarroyolorenzo@gmail.com" target="_blank" rel="noreferrer">
                    <button 
                    ref={mailRef}
                    onMouseOver={() => changeButtonColor(mailRef)}
                    onMouseOut={() => changeButtonColorBack(mailRef)}
                    aria-label="Mail" 
                    id="Mail" 
                    className="btn btn-primary rounded-2 border border-2">
                        <Mail /> 
                    </button>
                </a>
            </div>
        </div>
    );
}
