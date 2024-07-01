import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    navbarHome : "home",
    navbarAbout : "about me",
    navbarSkills : "skills",
    navbarProjects : "projects",
    navbarContact : "contact",
    footer: "© 2024 ANDRIKO Olivier. All rights reserved.",
    netlify : "Hosted on ",
    welcomeMessage: 'Welcome to my portfolio!',
    getStarted: 'Let’s get started !',
    aboutFirstParagraph : "My name is <strong>Olivier ANDRIKO</strong>. 👋",
    aboutSecondParagraph : "I'm a passionate full-stack web/mobile developer currently studying in Lyon, France.",
    aboutThirdParagraph : "For me, computer science isn't just an academic pursuit—it's an integral part of my daily life. Beyond the classroom, I'm constantly engaged in personal projects and reading up on a bunch of different topics, like tech stuff, laws, and ethics, especially since the advent of AI.",
    aboutFourthParagraph : "When I'm not coding, you might find me playing video games or noodling around on the piano.",
    aboutFifthParagraph : "I'm also an avid traveler, having explored the majority of Europe's capitals and ventured through the United States and Russia. Additionally, I've had the enriching experience of participating in two linguistic exchanges in London and Milan, enhancing my fluency in English and Italian.",
    aboutSixthParagraph : "Looking ahead, my aspiration is to bridge my passion for technology with my love for music, creating innovative projects that harmonize both realms. Join me on this journey as I strive to blend creativity and curiosity into each of my projects. 🚀",
    aboutQuickTip : "Quick tip : you can navigate through the website using the left and right arrows on your keyboard !",
    aboutQuickTipMobile : "Quick tip : you can navigate through the website using the swipe gestures on your phone !",
    firstFolder : "general purpose languages",
    secondFolder : "web & frameworks",
    thirdFolder : "database",
    fourthFolder : "mobile development",
    fifthFolder : "others",
    picpalsDescription : "PicPals is a social media platform that allows users to share drawings and connect with friends.",
    planificaDescription : "Planifica is a scheduling web app with an inuitive colorful interface and rich features.",
    portfolioDescription : "This website is my portfolio. It was made to improve my skills in front-end development.",
    fileBucketDescription : "FileBucket is a simple file server web app that you can deploy locally on your computer.",
    projectsTeaser : "And many more on my ",
    contactTitle : "You've reached the end !",
    contactLinksText : "If you appreciate my work or wish to contact me, feel free to check out the following links :",
    blogDescription : "My music/dev blog"
  },
  fr: {
    navbarHome : "accueil",
    navbarAbout : "à propos de moi",
    navbarSkills : "compétences",
    navbarProjects : "projets",
    navbarContact : "me contacter",
    footer: "© 2024 ANDRIKO Olivier. Tous droits réservés.",
    netlify : "Hébergé sur ",
    welcomeMessage: 'Bienvenue sur mon portfolio !',
    getStarted: "C'est parti !",
    aboutFirstParagraph : "Je m'appelle <strong>Olivier ANDRIKO</strong> et je te souhaite la bienvenue.👋",
    aboutSecondParagraph : "Je suis un développeur web/mobile full-stack passionné, étudiant à l'IUT de Lyon 1. ",
    aboutThirdParagraph : "L'informatique n'est pas qu'un enseignement académique pour moi, elle fait partie de mon quotidien. Je réalise des projets en autonomie dans mon temps libre et lis de nombreux ouvrages dans le domaine, qu'ils soient techniques ou juridiques/éthiques.",
    aboutFourthParagraph : "Je m'occupe également en jouant à des jeux vidéos ou en tapotant sur mon piano.",
    aboutFifthParagraph : "Je suis un grand voyageur, ayant visité la plupart des capitales européennes, les Etats-Unis ou encore la Russie. J'ai notamment effectué deux échanges linguistiques à Londres et à Milan qui m'ont permis de consolider mon niveau d'anglais et d'italien.",
    aboutSixthParagraph : "Idéalement, j'aimerais travailler sur des projets qui allient ma passion pour l'informatique avec mon amour pour la musique. N'hésite pas à me contacter si tu as une idée de projet ! 🚀",
    aboutQuickTip :"Petit conseil : tu peux naviguer sur le site en utilisant les flèches directionnelles de ton clavier !",
    aboutQuickTipMobile : "Petit conseil : tu peux naviguer sur le site en swipant vers la gauche ou la droite !",
    firstFolder : "langages polyvalents",
    secondFolder : "développement web",
    thirdFolder : "bases de données",
    fourthFolder : "développement mobile",
    fifthFolder : "divers",
    picpalsDescription : "PicPals est un prototype de réseau social qui permet aux utilisateurs de partager quotidiennement des dessins.",
    planificaDescription : "Planifica est une application web de planification dotée d'une interface intuitive et colorée ainsi que de fonctionnalités riches.",
    portfolioDescription : "Ce site est mon portfolio. Il m'a permis d'améliorer mes compétences en développement front-end.",
    fileBucketDescription : "FileBucket est une application web qui fait office de serveur de fichiers, facilement déployable localement sur votre ordinateur.",
    projectsTeaser : "Et bien d'autres sur mon ",
    contactTitle : "Vous voilà arrivé au bout !",
    contactLinksText : "Si vous appréciez mon travail ou que vous voulez me contacter, n'hésitez pas à consulter les liens suivants :",
    blogDescription : "Mon blog de musique/dev"
  }
};

const i18n = createI18n({
  legacy: false, 
  locale: 'en', 
  messages
});

export default i18n;
