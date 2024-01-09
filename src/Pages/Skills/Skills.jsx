import '../../style/style.scss';
import {getCategories, getLanguage} from '../../data/data';
import { useState , useEffect  } from 'react';




export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredLanguages, setFilteredLanguages] = useState([]);

    useEffect(() => {
        if (selectedCategory === null) {
            setFilteredLanguages(getLanguage());
        } else {
            setFilteredLanguages(
                getLanguage().filter(lang => lang.categoryId === selectedCategory)
            );
        }
    }, [selectedCategory]);

    return (
        <div className="skills">
            {/*liste de toutes les catégorie */}
            <div className="skills__categories">
                <ul className="skills__categories__list">
                    <li className="skills__categories__list__item">
                        <button onClick={() => setSelectedCategory(null)}>Tous</button>
                    </li>
                    {getCategories().map((category) => (
                        <li className="skills__categories__list__item" key={category.id}>
                            <button onClick={() => setSelectedCategory(category.id)}>
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
                            <img src={'../Icons/' + language.url} alt={language.name} />
                            <p>{language.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
