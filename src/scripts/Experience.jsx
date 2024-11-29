export default function Experience() {
    return(
        <div id="Experience" className="rounded-3 border border-5 custom-border-bg p-4">
            <section>
                <h3 className="title">Working Experience</h3>
                <ul className="list-unstyled">
                    <li className="mb-2"><FaHtml5 className="icon" /> HTML</li>
                    <li className="mb-2"><FaCss3Alt className="icon" /> CSS</li>
                    <li className="mb-2"><FaJs className="icon" /> JavaScript</li>
                    <li className="mb-2"><FaReact className="icon" /> React</li>
                    <li className="mb-2"><FaBootstrap className="icon" /> Bootstrap</li>
                    <li className="mb-2"><FaFigma className="icon" /> Figma</li>
                </ul>
            </section>
        </div>
    );
}