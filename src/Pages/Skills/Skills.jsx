import '../../style/style.scss';
import {getCategories, getLanguage} from '../../data/data';
import { useState , useEffect  } from 'react';





export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryName, setSelectedCategoryName] = useState('');
    const [filteredLanguages, setFilteredLanguages] = useState([]);
    
    
    useEffect(() => {
        if (selectedCategory === null) {
            setFilteredLanguages(getLanguage());
            setSelectedCategoryName('');
        } else {
            setFilteredLanguages(
                getLanguage().filter(lang => lang.categoryId === selectedCategory)
            );
            const categoryName = getCategories().find(cat => cat.id === selectedCategory)?.name;
            setSelectedCategoryName(categoryName);
        }
    }, [selectedCategory]);

    return (
        <div className="skills">
            <h1 className='skills_title'>Voici mes langages de programmations</h1>
            {/*liste de toutes les catégorie */}
            <div className="skills__categories">
            {selectedCategoryName && (
        <div className="selected-category">
            <p>Catégorie sélectionnée : {selectedCategoryName}</p>
        </div>
    )}
                <ul className="skills__categories__list">
                    <li className="skills__categories__list__item">
                        <button onClick={() => setSelectedCategory(null)}>Tous</button>
                    </li>
                    {getCategories().map((category) => (
    <li className="skills__categories__list__item" key={category.id}>
        <button onClick={() => {
            setSelectedCategory(category.id);
            setSelectedCategoryName(category.name);
        }}>
            {category.name}
        </button>
    </li>
))}

                </ul>

            </div>
            {/*liste de tous les languages */}
            <div className="skills__languages">
                <div className="skills__languages__card">
                    {filteredLanguages.map((language) => (
                        <div className="skills__languages__card__item" key={language.id}>
                            
                            <img className="langage-icon"src={'../Icons/' + language.url} alt={language.name} />
                            <p>{language.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
