

export  function getCategories(){
    const categories = [
        { id: 1, name: 'Front-end' },
        { id: 2, name: 'Back-end' },
        { id: 3, name: 'UI/UX' },
        { id: 5, name: 'Database' },
        { id: 6, name: 'in progress'},
        { id: 7, name: 'CMS'}

    ];
    return categories;
}

export  function getLanguage(){
    const languages = [
        { id: 1, name: 'HTML', url:'html.png' , categoryId: 1 },
        { id: 2, name: 'CSS', url:`css.png` , categoryId: 1 },
        { id: 3, name: 'JavaScript', url:`Js.png` , categoryId: 1 },
        { id: 4, name: 'NodeJS', url:`node.png` , categoryId: 2 },
        { id: 5, name: 'ReactJS', url:`react.png` , categoryId: 2 },
        { id: 6, name: 'MongoDB', url:`mongodb.png` , categoryId: 5 },
        { id: 7, name: 'MySQL', url:`Sql.png` , categoryId: 5 },
        { id: 8, name: 'PostgreSQL', url:`postgres.png` , categoryId: 5 },
        { id: 9, name: 'Photoshop', url:`Photoshop.png` , categoryId: 3 },
        {id: 10, name:'XD', url:`XD.png` , categoryId: 3},
        {id: 11, name:'PHP', url:`PHP.png` , categoryId: 2},
        {id: 12, name:'Symfony', url:`Symfony.png` , categoryId: 2},
        {id: 13, name:'Wordpress', url:`Wordpress.png` , categoryId: 7},
        {id: 14, name:'Java', url:`java.png` , categoryId: 6},
        {id: 15, name:'Typescript', url:`Ts.png` , categoryId: 6}

    ];
    return languages;
}

