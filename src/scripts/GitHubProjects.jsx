import { useEffect, useState } from 'react';
import '../styles/GitHubProjects.css';
import $ from 'jquery';

export default function GitHubProjects() {
    const [proyectos, setProyectos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        $.ajax({
            url: '/marcapersonal/data/projects.json',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                setProyectos(data);
                setIsLoading(false);
            },
            error: function(xhr, status, error) {
                console.error('Error detallado:', xhr.responseText);
                setError(error);
                setIsLoading(false);
            }
        });
    }, []);

    return (
        <section id="proyectos" className="rounded-3 border border-5 custom-border-bg p-4">
            <div className="container">
                <h2 id="title">Projects</h2>
                <div id="proyectos-container" className="proyectos-grid">
                    {isLoading ? (
                        <p>Cargando proyectos...</p>
                    ) : error ? (
                        <p>Error al cargar los proyectos: {error}</p>
                    ) : (
                        proyectos.map((proyecto, index) => (
                            <div key={index} className="proyecto">
                                <h3>{proyecto.name}</h3>
                                <p>{proyecto.description}</p>
                                <a 
                                    href={proyecto.url} 
                                    className="btn-proyecto" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    More details
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
