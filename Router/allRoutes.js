import Route from "./Route.js";

//Définir ici nos Routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "connexion", "/pages/signin.html"),
    new Route("/signup", "inscription", "/pages/signup.html"),
];


// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";

