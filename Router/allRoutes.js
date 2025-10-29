import Route from "./Route.js";

//Définir ici nos Routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "connexion", "/pages/auth/signin.html"),
    new Route("/signup", "inscription", "/pages/auth/signup.html"),
    new Route("/account", " Mon compte", "/pages/auth/account.html"),
    new Route("/allResa", "Vos réservervation", "/pages/reservation/allResa.html"),
    new Route("/reserver", "Réserver", "/pages/reservation/reserver.html"),
];


// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";

