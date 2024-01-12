import "../../style/style.scss";
import profil from "../../Images/photo_profil.jpg";
import { Chrono } from "react-chrono";

export default function Home() {
    
  const items = [
    {
      title: "Aout 2023 - Avril 2024",
      cardTitle:
        "Titre Professionnel Concepteur Développeur d’Application (C.D.A)",
      cardSubtitle:
        "Formation pour obtenir le titre professionnel de Concepteur Développeur d’Application.",
      cardDetailedText:
        "Poursuite de formation en développement d'applications, avec un accent sur les compétences pratiques et théoriques nécessaires dans le domaine de la technologie.",
      },
    {
      title: "2016 - Aujourd'hui",
      cardTitle: "Agent Escale Ferroviaire SNCF",
      cardSubtitle: "SNCF PARIS SAINT-LAZARE",
      cardDetailedText:
        "Accueil et assistance aux usagers des transports en commun, vente de produits adaptés à leurs voyages.",
      
    },
    {
      title: "2017",
      cardTitle: "Diplôme Agent Médiation Information et de Services (A.M.I.S)",
      cardSubtitle: "Diplômé en 2017",
      cardDetailedText:
        "Obtention du titre professionnel en médiation d'information et de services.",
      
    },
    {
      title: "2014 - 2016",
      cardTitle: "Agent de Médiation d'information et de services",
      cardSubtitle: "PROMEVIL",
      cardDetailedText:
        "Établissement et rétablissement de contact entre les personnes et les structures, analyse et gestion de conflits.",
      
    },
    {
      title: "2013-2014",
      cardTitle: "Niveau Licence Mathématique/Physique/Informatique",
      cardSubtitle: "IUT Cergy-Pontoise",
      cardDetailedText:
        "Études universitaires en mathématiques, physique et informatique.",
      
    },
    {
      title: "2012-2013",
      cardTitle: "Baccalauréat Sciente technique de l'industrie et du développement durable option : innovation technologique et éco-conception",
      cardSubtitle: "Lycée Gustave Monod",
      cardDetailedText:
        "Obtention du baccalauréat STI2D option ITEC.",
    }
  ];

  return (
    <div className="home">
      <div className="hero">
        <div className="hero__content">
          <div className="hero__img">
            <img className="hero__img--content" src={profil} alt="profil" />
          </div>
          <div className="hero__info">
            <h1 className="hero__info--title">
              Bonjour, je suis{" "}
              <span className="hero__title--name">Benjamin Bandasavanh</span>
            </h1>
            <h2 className="hero__info--subtitle">
              Développeur Web Full/Stack Junior
            </h2>
            <p className="hero__info--text">
              Professionnel dédié au développement d'applications, utilisant mon
              expérience en relations clients et mon adaptabilité pour concevoir
              des solutions innovantes et performantes. Je suis passionné par le
              développement de nouvelles compétences dans ce domaine dynamique.
            </p>
            <div className="hero__info__contact">
              <p>
                {" "}
                <i class="fa-regular fa-calendar"></i> 12 Septembre 1994
              </p>
              <p>
                <i class="fa-solid fa-phone"></i> +33 6 23 96 74 09
              </p>
              <p>
                <i class="fa-regular fa-envelope"></i> Bandasavanh.b@gmail.com
              </p>
              <p>
                <i class="fa-solid fa-location-dot"></i> Montmorency , 95160
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about__content">
          <div className="about__content--title">
            <h2 className="about__title">A propos de moi</h2>
            <div className="about__title--line"></div>
          </div>
          <div className="about__content--text">
            <p className="about__text">
              Je suis un développeur web junior basé à Paris, France. J'ai une
              passion pour la conception de sites Web et la création de beaux
              interfaces. J'aime aussi le design, la musique et les jeux vidéo.
            </p>
          </div>
          <div className="about__content--project">
            <p>
              <i class="fa-solid fa-computer"></i>
            </p>
            <p>
              <i class="fa-solid fa-mobile-screen"></i>
            </p>
            <p>
              <i class="fa-solid fa-laptop"></i>
            </p>
          </div>
        </div>
        <div className="about__langage">
          <div className="about__langage--content">
            <div className="about__langage--content--html">
              <p>HTML 90%</p>
              <div className="about__langage--content--html--line"></div>
            </div>
            <div className="about__langage--content--css">
              <p>CSS 80%</p>
              <div className="about__langage--content--css--line"></div>
            </div>
            <div className="about__langage--content--js">
              <p>Javascript 75%</p>
              <div className="about__langage--content--js--line"></div>
            </div>
            <div className="about__langage--content--react">
              <p>React 75%</p>
              <div className="about__langage--content--react--line"></div>
            </div>
            <div className="about__langage--content--php">
              <p>PHP 70%</p>
              <div className="about__langage--content--php--line"></div>
            </div>
            <div className="about__langage--content--sql">
              <p>SQL 80%</p>
              <div className="about__langage--content--sql--line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline__content--title">
          <h2 className="timeline__title">Mon parcours</h2>
          </div>
        <Chrono items={items} 
        theme={{
            primary: '#F2E4F9',
            secondary: '#484848',
            cardBgColor: '#F2E4F9',
            titleColor: '#484848',
            cardTitleColor: '#F2E4F9',
            cardSubtitleColor: '#B1E1E9',
            titleColorActive: '#F2E4F9',
        }} 
        classNames={{
            card: 'timeline__card',
            title: 'timeline__title',
            cardTitle: 'timeline__cardTitle',
            cardSubtitle: 'timeline__cardSubtitle',
            cardDetailedText: 'timeline__cardDetailedText',
            body: 'timeline__body',
        }}
        fontSizes={{
            title: '1.8rem',
            cardTitle: '1.5rem',
            cardSubtitle: '0.8rem',
            cardDetailedText: '1rem',
            body: '0.7rem',
        }}
        cardHeight={150}
        cardWidth={425}
        
        mode="VERTICAL_ALTERNATING" />
      </div>
    </div>
  );
}
