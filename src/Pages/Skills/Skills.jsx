import '../../style/style.scss';
import { getCategories, getLanguage, getHobbies, getSoftSkills } from '../../data/data';
import { useState, useEffect } from 'react';





export default function Skills() {
    //UseState permet de gérer l'état de notre application
    const [selectedCategory, setSelectedCategory] = useState(null);
    //selectedCategory est la valeur de l'état, setSelectedCategory est la fonction qui permet de modifier la valeur de l'état
    const [selectedCategoryName, setSelectedCategoryName] = useState('');
    //selectedCategoryName est la valeur de l'état, setSelectedCategoryName est la fonction qui permet de modifier la valeur de l'état
    const [filteredLanguages, setFilteredLanguages] = useState([]);
    //filteredLanguages est la valeur de l'état, setFilteredLanguages est la fonction qui permet de modifier la valeur de l'état

    useEffect(() => {
        if (selectedCategory === null) {
              //si selectedCategory est null, on affiche tous les langages
            setFilteredLanguages(getLanguage());
            setSelectedCategoryName('');
          
        } else {
            //sinon on affiche les langages de la catégorie sélectionnée
            setFilteredLanguages(
                getLanguage().filter(lang => lang.categoryId === selectedCategory)
            );
            //on récupère le nom de la catégorie sélectionnée
            //find permet de récupérer le premier élément d'un tableau qui correspond à la condition
            //ici on récupère le nom de la catégorie qui a l'id correspondant à la catégorie sélectionnée
            const categoryName = getCategories().find(cat => cat.id === selectedCategory)?.name;
            setSelectedCategoryName(categoryName);
        }
    }, [selectedCategory]);

    return (
        <div className="skills">
            <h1 className='skills__title'>Voici mes langages de programmations</h1>
            {/*liste de toutes les catégorie */}
            <div className="skills__categories">
                {selectedCategoryName && (
                    <div className="selected-category">
                        <p className='selected-category--text'>Catégorie sélectionnée : {selectedCategoryName}</p>
                    </div>
                )}
                <ul className="skills__categories__list">
                    <li className="skills__categories__list__item">
                        <button onClick={() => setSelectedCategory(null)}>Tous</button>
                    </li>
                    {/* getCategories() permet de récupérer toutes les catégories et map permet de parcourir le tableau */}
                    {getCategories().map((category) => (
                        <li className="skills__categories__list__item" key={category.id}>
                            <button onClick={() => {
                                //on modifie la valeur de l'état selectedCategory
                                setSelectedCategory(category.id);
                                setSelectedCategoryName(category.name);
                            }}>
                                <img className='category-icon' src={'../Icons/' +category.url} alt= {category.name} />
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {/*liste de tous les languages */}
            <div className="skills__languages">
                <div className="skills__languages__card">
                    {/* on parcourt le tableau des langages filtrés */}
                    {filteredLanguages.map((language) => (
                        <div className="skills__languages__card__item" key={language.id}>

                            <img className="langage-icon" src={'../Icons/' + language.url} alt={language.name} />
                            <p>{language.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="soft-skill__hobbies">
            <div className="soft__skills">
                <h1 className='skills__title'>Soft skills</h1>
                <div className="soft__skills__card">
                    {/* on parcourt le tableau des softskills */}
                    {getSoftSkills().map((softskill) => (
                        <div className="soft__skills__card__item" key={softskill.id}>
                            <img className="soft__skills-icon" src={'../' + softskill.url} alt={softskill.name} />
                            <p>{softskill.name}</p>
                        </div>
                    ))}
                </div>
               

            </div>
            <div className="homme">
                    <img className="homme-icon" src={'../homme.png'} alt="homme" />
                </div>
            <div className="hobbies">
                <h1 className='skills__title'>Hobbies</h1>
                <div className="hobbies__card">
                    {/* on parcourt le tableau des hobbies */}
                    {getHobbies().map((hobby) => (
                        <div className="hobbies__card__item" key={hobby.id}>
                            <img className="hobbies-icon" src={'../' + hobby.url} alt={hobby.name} />
                            <p>{hobby.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}
