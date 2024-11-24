import { Github, Linkedin, Mail } from 'lucide-react';
import './Links.css'; // Asegúrate de importar el archivo CSS

export default function Links() {
    return (
        <div id="links">
            <h2>Follow Me</h2>
            <div className="divider">
                <a href="https://github.com/carroyo03" target="_blank" rel="noreferrer">
                    <button aria-label="GitHub" id="GitHub" className="btn btn-primary rounded-2 border border-2">
                        <Github />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/carlosarroyolorenzo" target="_blank" rel="noreferrer">
                    <button aria-label="LinkedIn" id="LinkedIn" className="btn btn-primary rounded-2 border border-2">
                        <Linkedin />
                    </button>
                </a>
                <a href="mailto:cgarroyolorenzo@gmail.com" target="_blank" rel="noreferrer">
                    <button aria-label="Mail" id="Mail" className="btn btn-primary rounded-2 border border-2">
                        <Mail /> 
                    </button>
                </a>
            </div>
        </div>
    );
}

