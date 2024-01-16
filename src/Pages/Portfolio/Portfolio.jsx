import '../../style/style.scss';
import { useState, useEffect } from 'react';
import { getLanguage, getProjects } from '../../data/data';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const hasProjects = (languageId) => {
        return projects.some(project => project.languagesId.includes(languageId));
    };

    // Récupérer les langages et les projets
    const languages = getLanguage();
    const projects = getProjects();

    useEffect(() => {
        let filtered = projects;

        // Filtrer par langage sélectionné
        if (selectedLanguage) {
            filtered = filtered.filter(project => project.languagesId.includes(selectedLanguage));
        }

        // Filtrer par terme de recherche
        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                languages.filter(lang => project.languagesId.includes(lang.id) && lang.name.toLowerCase().includes(searchTerm.toLowerCase())).length > 0
            );
        }

        setFilteredProjects(filtered);
    }, [selectedLanguage, searchTerm]);

    return (
        <div className="portfolio">
            <div className='portfolio__head'>
                <div className="search-bar">
             
                    <input
                        type="text"
                        placeholder="Rechercher par nom ou langage..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="language-buttons">
                    <button onClick={() => setSelectedLanguage(null)}>Tous</button>
                    {languages.map(language => {
                        if (hasProjects(language.id)) {
                            return (
                                <button key={language.id} onClick={() => setSelectedLanguage(language.id)}>
                                    <img src={'../Icons/' + language.url} className='button-icon' alt={language.name} />
                                    {language.name}
                                </button>
                            );
                        }
                        // on retourne null pour ne pas afficher de bouton
                        return null;
                    })}
                </div>
            </div>
            <div className="project-cards">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={'../' + project.url} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                        <a className='github-link' href={project.github} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i> Voir sur GitHub
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}
