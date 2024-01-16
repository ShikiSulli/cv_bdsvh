

export  function getCategories(){
    const categories = [
        { id: 1, name: 'Front-end',url:'front-end.png' },
        { id: 2, name: 'Back-end',url:'back-end.png' },
        { id: 3, name: 'UI/UX',url:'ux.png' },
        { id: 5, name: 'Database',url:'database.png' },
        { id: 7, name: 'CMS',url:'cms.png'}

    ];
    return categories;
}

export  function getLanguage(){
    const languages = [
        { id: 1, name: 'HTML', url:'html.png' , categoryId: 1 },
        { id: 2, name: 'CSS', url:`css.png` , categoryId: 1 },
        { id: 3, name: 'JavaScript', url:`Js.png` , categoryId: 1 },
        { id: 4, name: 'NodeJS', url:`node.png` , categoryId: 2 },
        { id: 5, name: 'ReactJS', url:`react.png` , categoryId: 1 },
        { id: 6, name: 'MongoDB', url:`mongodb.png` , categoryId: 5 },
        { id: 7, name: 'MySQL', url:`Sql.png` , categoryId: 5 },
        { id: 8, name: 'PostgreSQL', url:`postgres.png` , categoryId: 5 },
        { id: 9, name: 'Photoshop', url:`Photoshop.png` , categoryId: 3 },
        {id: 10, name:'XD', url:`XD.png` , categoryId: 3},
        {id: 11, name:'PHP', url:`PHP.png` , categoryId: 2},
        {id: 12, name:'Symfony', url:`Symfony.png` , categoryId: 2},
        {id: 13, name:'Wordpress', url:`Wordpress.png` , categoryId: 7},
    ];
    return languages;
}

export function getProjects(){
    const projects = [
        {id :1, name : 'Morgoth Code Forge', url :'wordpress.png', languagesId : [13], desc:'Site vitrine Wordpress avec une charté graphique sur mesure',github : '#'},
        {id :2, name : 'Pokedex_api', url :'pokedex_api.png', languagesId : [5], desc:'Requête Api /Site Web qui permet de rechercher des pokemons et d\'afficher leurs caractéristiques',github : 'https://github.com/ShikiSulli/pokedex'},
        {id :3, name : 'Site Vitrine en Html/Css', url : 'htmlTP.png', languagesId : [1,2], desc:'Site vitrine en Html/Css',github : 'https://github.com/ShikiSulli/site_vitrine'},
        {id :4, name : 'Blogxpress', url : 'blogxpress.png', languagesId : [7,11,12], desc:'Blog avec un back-end en Symfony/PHP, base de donnée MySQL et un front-end en Html/Twig/Css',github : 'https://github.com/ShikiSulli/blogxpress'},
        {id :5, name : 'Cities-api', url :'Cities-api.png', languagesId : [11,7], desc:'création d\'une base de données/API Mysql en PHP qui permet de rechercher des villes',github : 'https://github.com/ShikiSulli/Cities-api'},
        {id :6, name : 'Codeexpress', url :'codexpress.png', languagesId : [11,12,7], desc:'Site qui permet d\'archiver des bouts de code avec un back-end en Symfony/PHP, base de donnée MySQL et un front-end en Html/Twig/Css',github : 'https://github.com/ShikiSulli/codexpress'},
        {id :7, name : 'Biblioapp', url :'Biblioapp.png', languagesId : [11,12,7], desc:'Site gestionnaire de bibliothèque avec un back-end en Symfony/PHP, base de donnée MySQL et un front-end en Html/Twig/Css',github : 'https://github.com/ShikiSulli/biblioapp'},
        {id :8, name : 'Company-api', url :'company-api-sqli.png', languagesId : [11,7], desc:'création d\' une base de données en Sqli qui permet de rechercher des entreprises',github : 'https://github.com/ShikiSulli/company-api'},
        {id :9, name :'Facture-app', url :'factures_js.png', languagesId : [3], desc:'App qui permet de créer des factures et de les exporter en PDF en Javascript',github : 'https://github.com/ShikiSulli/PROJET_FACTURES'},
        {id :10, name : 'Gestionnaire de Movies/Users', url : 'movie_js.png', languagesId : [3], desc:'App qui permet de gérer des films et des utilisateurs en Javascript',github : 'https://github.com/ShikiSulli/MOVIES'},
        {id :11, name :'Kasa', url :'kasa_react.png', languagesId : [4,5,6], desc:'Site de location de logement avec un back-end en NodeJS, base de donnée MongoDB et un front-end en ReactJS',github : 'https://github.com/ShikiSulli/kasa'},
        {id :12, name:'NoteXpress', url: 'NoteXpress.png', languagesId : [11,12,7], desc:'Site  de partage de note ,login/register avec un back-end en Symfony/PHP, base de donnée MySQL et un front-end en Html/Twig/Css',github : 'https://github.com/ShikiSulli/NoteXpress'},
        {id :13, name:'Flag-api', url: 'react_flag.png', languagesId : [4,5,6], desc:'Site qui permet de rechercher des pays et d\'afficher leurs caractéristiques',github : 'https://github.com/ShikiSulli/tp-react-flag'},
        {id :14, name:"RoomValley", url: 'RoomValley.png', languagesId : [11,12,7,3,1,2], desc:'Site de location de salle de réunion avec un back-end en Symfony/PHP, base de donnée MySQL et un front-end en Html/Twig/Css',github : 'https://github.com/ShikiSulli/RoomValley'},
        {id :15, name: 'Site vitrine JS', url : 'Site_vitrine_js.png', languagesId : [3,1,2],desc:'Site vitrine en Javascript' ,github :'https://github.com/ShikiSulli/site_vitrine_js'},
    ];
    return projects;
}

export function getHobbies() {
    const hobbies = [
        {id :1, name : 'Gaming', url :'gaming.png', desc:'Jeux vidéo'},
        {id :2, name : 'Manga', url :'manga.png', desc:'Manga'},
        {id :3, name : 'Musique', url :'musique.png', desc:'Musique'},
        {id :4, name : 'Basketball', url :'basketball.png', desc:'Sport'},
        {id :5, name : 'Cuisine', url :'cuisine.png', desc:'Cuisine'},
        {id :6, name : 'Cinéma', url :'cinema.png', desc:'Cinéma'},
        {id :7, name : 'Formule 1', url :'f1.png', desc:'Formule 1'}
    ];
    return hobbies;
}


export function getSoftSkills() {
    const softSkills = [
        {id :1, name : 'Autonome', url :'autonome.png'},
        {id :2, name : 'Curieux', url :'curieux.png'},
        {id :3, name : 'Organisé', url :'organise.png'},
        {id :4, name : 'Accueillir la clientèle', url :'accueil.png'},
        {id :5, name : 'Travail d\'équipe', url :'travail_equipe.png'},
        {id :6, name : 'Adaptabilité', url :'adaptabilite.png'},
        {id :7, name : 'Analyse', url :'analyse.png'},
        {id :8, name : 'Observation', url :'observation.png'},
        {id :9, name : 'Ecoute active', url :'ecoute.png'},
    ];
    return softSkills;
}

export function RegexEmail(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

export function RegexName(name){
    const regex = /^[a-zA-ZÀ-ÿ]{2,20}$/;
    return regex.test(name);
}   