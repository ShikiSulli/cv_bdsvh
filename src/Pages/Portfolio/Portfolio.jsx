import '../../style/style.scss';
import { useState, useEffect } from 'react';
import { getLanguage, getProjects } from '../../data/data';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    //SelectedLanguage est en null par défaut et setSelectedLanguage permet de modifier la valeur de l'état
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    //SearchTerm est empty par défaut et setSearchTerm permet de modifier la valeur de l'état
    const [searchTerm, setSearchTerm] = useState('');
    //filteredProjects est un tableau vide par défaut et setFilteredProjects permet de modifier la valeur de l'état
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
                // On vérifie si le nom du projet ou le nom d'un langage du projet contient le terme de recherche
                //includes permet de vérifier si un tableau contient une valeur
                project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                //filter permet de filtrer un tableau
                //includes permet de vérifier si un tableau contient une valeur
                //toLowerCase permet de mettre en minuscule et includes permet de vérifier si un tableau contient une valeur
                //Lenght > 0 permet de vérifier si le tableau est vide
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
                        //onChange permet de déclencher une fonction à chaque fois que la valeur de l'input change
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="language-buttons">
                    <button onClick={() => setSelectedLanguage(null)}>Tous</button>
                    {languages.map(language => {
                        // si le langage a des projets, on affiche un bouton
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
                {/* filteredprojects.map permet de parcourir le tableau des projets filtrés */}
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
